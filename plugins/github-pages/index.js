module.exports = deployStatic;

const cmdDescription = 'Deploy to GitHub Pages.';

function deployStatic() {
    return {
        name: require('./package.json').name,
        cliCommands: [
            {
                name: 'deploy-static',
                description: cmdDescription,
                action: runDeploy,
            }
        ],
    };
}

async function runDeploy() {
    console.log();
    console.log(cmdDescription);
    console.log();

    const getProjectConfig = require('@reframe/utils/getProjectConfig');
    const git = require('@reframe/utils/git');
    const assert_usage = require('reassert/usage');
    const assert_internal = require('reassert/internal');
    const Confirm = require('prompt-confirm');
    const GitUrlParse = require("git-url-parse");
    const {colorError, colorEmphasis, strDir, loadingSpinner, symbolSuccess} = require('@brillout/cli-theme');

    const projectConfig = getProjectConfig();

    const {githubPagesRepository} = projectConfig;
    assert_usage(
        githubPagesRepository && githubPagesRepository.repository,
        "Reframe config `githubPagesRepository.repository` missing.",
        "",
        "Create a new GitHub repository at https://github.com/new",
        "",
        "Then add the repository's address to `githubPagesRepository.repository` in your `reframe.config.js`",
        "",
        "Example: ",
        (
`
// reframe.config.js

module.exports = {
    githubPagesRepository: {
        repository: 'git@github.com:username/repo',
        branch: 'master', // optional, default is \`master\`
    },
};
`
        )

    );

    assert_usage(
        projectConfig.build.getBuildInfo
    );

    const buildInfo = require(projectConfig.build.getBuildInfo)({requireProductionBuild: true});
    const {staticAssetsDir, buildEnv, pageConfigs, buildTime} = buildInfo;
    assert_internal(buildEnv==='production');
    assert_internal(buildTime);

    const htmlDynamicPages = (
        pageConfigs
        .filter(pageConfig => !pageConfig.htmlStatic)
    );
    assert_usage(
        htmlDynamicPages.length===0,
        "To be able to statically deploy to GitHub Pages, all your page configs need to have `htmlStatic: true`.",
        "But the following pages don't have `htmlStatic: true`:",
        htmlDynamicPages
        .map(pageConfig => {
            console.log(pageConfig);
            return "  "+pageConfig.pageName+" ("+pageConfig.pageFile+")";
        })
        .join('\n')
    );

    assert_usage(
        await git.gitIsAvailable(),
        "Git doesn't seem to be installed.",
        "You need to install git."
    );

    const cwd = staticAssetsDir;

    await git.init({cwd});

    assert_usage(
        await git.gitIsConfigured({cwd}),
        "Git user name and/or email is not configured.",
        "You need to add your user name and email to git."
    );

    const {repository, branch='master'} = githubPagesRepository;

    const repoInfo = GitUrlParse(repository);
    assert_usage(
        repoInfo.source==='github.com',
        "The repository `"+repository+"` isn't a GitHub repository but it should be."
    );

    const repoShort = 'github:'+repoInfo.owner+'/'+repoInfo.name;
    const githubPageUrl__without_protocol = (
        repoInfo.owner+'.github.io' +
        (repoInfo.name === repoInfo.owner+'.github.io' ? '' : ('/'+repoInfo.name))
    );
    const githubPageUrl = 'https://'+githubPageUrl__without_protocol;

    const remoteText = ' '+colorEmphasis(branch)+' of '+colorEmphasis(repoShort);
    const loadingText = remoteText;
    loadingSpinner.start({text: 'Loading'+loadingText});

    await git.addRemote({cwd, remote: repository, name: 'origin'});

    await git.fetch({cwd, remote: 'origin', branch});

    await git.branch({cwd, args: ['-u', 'origin/'+branch]});

    await git.reset({cwd, args: ['FETCH_HEAD']});

    const readmePath = await git.checkoutReadme({cwd});
    if( ! readmePath ) {
        writeReadme({cwd, githubPageUrl});
    }

    loadingSpinner.stop();
    console.log(symbolSuccess+'Loaded'+loadingText+' at '+colorEmphasis(strDir(cwd)));
    console.log();

    const {commit: commitHash} = await git.commit({cwd, message: 'Built at '+buildTime.toString()});

    if( ! commitHash ) {
        console.log(symbolSuccess+"App already deployed. App live at "+githubPageUrl);
        console.log();
        return
    }

    const commitInfo = await git.show({cwd, args: [commitHash, '--name-only']});

    console.log(symbolSuccess+'New commit:');
    console.log();
    console.log(commitInfo);
    console.log();

    const confirmText = 'Deploy app? (By pushing commit '+colorEmphasis(commitHash)+' to'+remoteText+'.)';
    const prompt = new Confirm(confirmText);

    const answer = await prompt.run();
    assert_internal([true, false].includes(answer));

    console.log();

    if( answer ) {
        loadingSpinner.start({text: 'Deploying'});
        await git.push({cwd, remote: 'origin', branch});
        loadingSpinner.stop();
        console.log(symbolSuccess+'App deployed. (Commit '+colorEmphasis(commitHash)+' pushed.) App live at '+githubPageUrl);
        console.log();
    } else {
        console.log(colorError("App not deployed.")+" (Commit not pushed.)");
        console.log();
    }
}

function writeReadme({cwd, githubPageUrl}) {
    const fs = require("fs");
    const path = require("path");

    const filePath = path.resolve(cwd, './readme.md');
    const fileContent = (
`Source code of [${githubPageUrl__without_protocol}](${githubPageUrl}).

Written with [Reframe](https://github.com/reframejs/reframe) and
deployed with [@reframe/github-pages](https://github.com/reframejs/reframe/tree/master/plugins/github-pages).
`
    );

    fs.writeFileSync(filePath, fileContent);
}