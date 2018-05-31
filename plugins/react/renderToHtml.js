const React = require('react');
const ReactDOMServer = require('react-dom/server');
const generateHtml = require('@brillout/index-html');
const reconfig = require('@brillout/reconfig');
const {CONTAINER_ID, getReactElement} = require('./common');

module.exports = renderToHtml;

async function renderToHtml({pageConfig, initialProps}) {
    const reframeConfig = reconfig.getConfig({configFileName: 'reframe.config.js'});
    const viewWrappers = reframeConfig.nodejsViewWrappers;
    const reactElement = getReactElement({
        pageConfig,
        initialProps,
        viewWrappers,
    });

    const contentHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

    const html = renderHtmlDocument(contentHtml, pageConfig);

    return html;
}

function renderHtmlDocument(contentHtml, pageConfig) {
    const htmlOptions = Object.assign({bodyHtmls: []}, pageConfig);
    htmlOptions.bodyHtmls.push('<div id="'+CONTAINER_ID+'">'+contentHtml+'</div>');

    const html = generateHtml(htmlOptions);

    return html;
}
