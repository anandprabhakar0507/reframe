<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.






-->
<a href="/../../#readme">
    <img align="left" src="https://github.com/reframejs/reframe/raw/master/docs/images/logo-with-title-and-slogan.min.svg?sanitize=true" width=296 height=79 style="max-width:100%;" alt="Reframe"/>
</a>
<br/>
<p align="right">
    <sup>
        <a href="#">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/star.svg?sanitize=true"
              width="16"
              height="12"
            >
        </a>
        Star if you like
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <a href="https://github.com/reframejs/reframe/blob/master/contributing.md">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/biceps.min.svg?sanitize=true"
              width="16"
              height="14"
            >
            Co-maintain Reframe
        </a>
    </sup>
    <br/>
    <sup>
        <a href="https://twitter.com/reframejs">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/tw.svg?sanitize=true"
              width="15"
              height="13"
            >
            Follow on Twitter
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <a href="https://discord.gg/kqXf65G">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/chat.svg?sanitize=true"
              width="14"
              height="10"
            >
            Chat on Discord
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
    </sup>
</p>
&nbsp;
<p align='center'><a href="/../../#readme">Intro</a> &nbsp; | &nbsp; <a href="/docs/starters.md#readme">Starters</a> &nbsp; | &nbsp; <a href="/docs/usage-manual.md#readme"><b>Usage Manual</b></a> &nbsp; | &nbsp; <a href="/docs/concepts.md#readme">Concepts</a> &nbsp; | &nbsp; <a href="/docs/plugins.md#readme">Plugins</a></p>
&nbsp;

# Usage Manual

### Basics

- [Getting Started](#getting-started)
- [CSS](#css)
- [Static Assets](#static-assets)
- [Async Data](#async-data)
- [Navigation & Links](#navigation--links)
- [`doNotRenderInBrowser`](#donotrenderinbrowser)
- [`renderHtmlAtBuildTime`](#renderhtmlatbuildtime)

### Use Cases

- Flexible stack
  - [Add/Remove Server](#addremove-server)
  - [Add/Remove Frontend](#addremove-frontend)
  - [Add/Remove Database](#addremove-database)
- Deploy
  - [Static Deploy](#static-deploy)
  - [Serverless Deploy](#serverless-deploy)
- Integrations
  - [Vue](#vue)
  - [React Router](#react-router)
  - [TypeScript](#typescript)
  - [Express](#express)
  - [Koa](#koa)
  - [PostCSS](#postcss)
  - [React Native (Web)](#react-native-web)
  - [React Native (Web) + React Router](#react-native-web--react-router)
  - [Bootstrap](#boostrap)
  - [Semantic UI](#semantic-ui)
  - [Frontend Libraries](#frontend-libraries)

### Custom

*Full customization. Based on eject.*

- Server
  - [Custom Server](#custom-server)
  - [Custom Server Framework (Express, Koa, ...)](#custom-server-framework-express-koa-)
  - [Full Custom Server](#full-custom-server)
- Rendering
  - [Custom HTML &lt;head&gt;, &lt;meta&gt;, &lt;html&gt;, ...](#custom-html-head-meta-html-)
  - [Custom Renderer](#custom-renderer)
- Browser
  - [Custom Default Browser Entry](#custom-default-browser-entry)
  - [Custom Page Browser Entry](#custom-page-browser-entry)
  - [Full Custom Browser Entry](#full-custom-browser-entry)
- Routing
  - [Advanced Routing](#advanced-routing)
  - [Custom Router](#custom-router)
- Build
  - [Custom Babel](#custom-babel)
  - [Custom Webpack](#custom-webpack)
  - [Full Custom Build](#full-custom-build)


<br/>
<br/>





## Getting Started

1. Install the Reframe CLI:
   ~~~shell
   $ npm install -g @reframe/cli
   ~~~
   <details>
   <summary>With yarn</summary>

   ~~~shell
   $ yarn global add @reframe/cli
   ~~~
   </details>
   <details>
   <summary>With npx (local install)</summary>

   Instead of globally installing `@reframe/cli`, you can use
   [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b):
   ~~~shell
   $ npx @reframe/cli create react-frontend
   ~~~

   Then prefix every `$ reframe <command>` with `npx`.
   For example:
   ~~~shell
   $ cd my-react-frontend/
   $ npx reframe dev
   ~~~
   npx uses the `@reframe/cli` locally installed at `my-react-frontend/node_modules/@reframe/cli`.
   <br/><br/>
   </details>

2. Create a new app with the `react-frontend` starter:
   ~~~shell
   $ reframe create react-frontend
   ~~~

3. Build and serve the app:
   ~~~shell
   $ cd my-react-frontend/
   $ reframe dev
   ~~~

4. Open [http://localhost:3000](http://localhost:3000).

5. Read [Usage Manual - Basics](/docs/usage-manual.md#basics).

> The
> [react-frontend](/plugins/create/starters/react-frontend#readme)
> starter scaffolds a static site.
> There are other starters to scaffold
> a SSR app, a backend-only app, a full-stack app, etc.
> See [Starters](/docs/starters.md#readme).

<b><sub><a href="#basics">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>





## CSS

A CSS file can be loaded and applied by importing it.

~~~js
import './GlitterStyle.css';
~~~

Example of a page using CSS:
 - [/examples/basics/pages/glitter/](/examples/basics/pages/glitter/)

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#basics">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>


## Static Assets

Static assets (images, fonts, videos, etc.) can be imported as well
but importing an asset doesn't actually load it:
Only the URL of the asset is returned.
It is up to us to use/fetch the URL of the asset.

~~~js
import diamondUrl from './diamond.png';

// do something with diamondUrl, e.g. `await fetch(diamondUrl)` or `<img src={diamondUrl}/>`
~~~

In addition, static assets can be referenced in CSS by using the `url` data type.

~~~css
.diamond-background {
    background-image: url('./diamond.png');
}
~~~

Example of a page using fonts, images and other static assets:
 - [/examples/basics/pages/glitter/](/examples/basics/pages/glitter/)

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#basics">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






## Async Data

The page config `async getInitialProps()` can be used to fetch data before your page's view is rendered.
The value returned by `async getInitialProps()` is then available to your page's view.

For example:

~~~js
// /examples/basics/pages/got/GameOfThronesPage.config.js

import React from 'react';
import getCharacters from './data/getCharacters';
import CharacterList from './views/CharacterList';

export default {
    route: '/game-of-thrones',

    // Everything returned in `getInitialProps()` is passed to the props of the view
    getInitialProps: async () => {
        const characters = await getCharacters();
        return {characters};
    },

    // Our data is available at `props.characters`
    view: props => <CharacterList characters={props.characters}/>,

    doNotRenderInBrowser: true,
};
~~~

Alternatively, you can fetch data in a stateful component.
But in that case the data will not be rendered to HTML.

Deeper explanation and further examples of pages asynchronously loading data:
 - [/examples/basics/pages/got/](/examples/basics/pages/got/)

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#basics">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>





## Navigation & Links

The standard way to navigate between pages is to use the HTML link tag `<a>`.

See [Advanced Routing](#advanced-routing) for alternative ways of navigating.

Example:

~~~js
import React from 'react';

export default {
    route: '/page-a',
    view: () =>
        <div>
            This is page A.
            <a href='/page-b'>Page B</a>.
        </div>,
};
~~~
~~~js
import React from 'react';

export default {
    route: '/page-b',
    view: () =>
        <div>
            This is page B.
            <a href='/page-a'>Page A</a>.
        </div>,
};
~~~

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#basics">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>







## `doNotRenderInBrowser`

The page config option `doNotRenderInBrowser` allows you to control whether the page is rendered in the browser.

By default,
a page is rendered in the browser so that it can have interactive views.
(A like button, an interactive graph, a To-Do list, etc.).

 - `doNotRenderInBrowser: false` (default value)
   <br/>
   The page is rendered in the browser.
   <br/>
   The page's code (e.g. React components) and the view library (e.g. React) are loaded in the browser.
   <br/>
   The page is rendered to the DOM.
   <br/>
   The DOM may change.
 - `doNotRenderInBrowser: true`
   <br/>
   The page is not rendered in the browser.
   <br/>
   No JavaScript is loaded nor executed in the browser.
   (Or much less JavaScript.)
   <br/>
   The page is not rendered to the DOM.
   (The page is rendered to HTML only.)
   <br/>
   The DOM will not change.

Setting `doNotRenderInBrowser: true` makes your page considerably faster.
So,
if your page has no interactive views,
then you should set `doNotRenderInBrowser: true`.
(More precisely, you should set `doNotRenderInBrowser: true` when your page's view components are all stateless.)

By setting `doNotRenderInBrowser: true` to all your pages,
you remove browser-side JavaScript.
In other words,
you remove the frontend,
and the view library
(React/Vue/etc.)
is only used on the server as an HTML template engine.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#basics">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>


## `renderHtmlAtBuildTime`

With Reframe,
your pages are always rendered to HTML.
(Modern view libraries, such as React and Vue, can render components to HTML.)

The page config option `renderHtmlAtBuildTime` allows you to control whether the page's HTML is
rendered statically at build-time or
dynamically at request-time.

 - `renderHtmlAtBuildTime: false` (default value)
   <br/>
   The page is rendered to HTML at request-time.
   <br/>
   The page is (re-)rendered to HTML every time the user requests the page.
 - `renderHtmlAtBuildTime: true`
   <br/>
   The page is rendered to HTML at build-time.
   <br/>
   The page is rendered to HTML only once, when Reframe is building and transpiling your app.

By default,
a page is rendered to HTML at request-time.
But if the page's content is static
(a landing page, an about page, a blog post, a personal homepage, etc.)
it is wasteful to re-render its HTML on every page request.

By setting `renderHtmlAtBuildTime: true` to all your pages,
you effectively remove the need for a Node.js server.
You can then deploy your app to a static host such as Netlify or GitHub Pages.

If you don't want to render your page to HTML,
then do something like that:
~~~jsx
const Loading = require('./path/to/your/loading/component');
const Search = require('./path/to/your/search/component');

const SearchPageConfig = {
  title: 'Search products',
  route: '/search',
  view: SearchPage,
  // We render <Loading> to HTML at build-time
  renderHtmlAtBuildTime: true,
  // We render <Search> to the DOM
  doNotRenderInBrowser: false,
};

export default SearchPageConfig;

function SearchPage(props) {
  if( props.isNodejs ) {
    return <Loading/>;
  } else {
    return <Search {...props}/>;
  }
}
~~~

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#basics">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>











## Add/Remove Server

By setting `renderHtmlAtBuildTime: true` to all your pages you remove the need for a Node.js server.
See
[renderHtmlAtBuildTime](#renderhtmlatbuildtime).

On the other hand,
if you need a Node.js server
you can eject Reframe's server code:
~~~shell
$ reframe eject server
~~~
You then have full control over the Node.js server.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>



## Add/Remove Frontend

By setting `doNotRenderInBrowser: true` to all your page configs you remove browser-side JavaScript.

You app is then only a backend with plain old HTML.

You can't have interactive views but
you can still have dynamic content by rendering the HTML dynamically at request-time.

More infos at
[doNotRenderInBrowser](#donotrenderinbrowser)
and
[renderHtmlAtBuildTime](#renderhtmlatbuildtime).

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>



## Add/Remove Database

If you didn't eject the server code already then eject it:

~~~js
$ reframe eject server
~~~

(All starters, with the exception of the `react-frontend` starter, have already have ejected the server code for you.)

Once you have eject and gained control over the server, you are free to use add/remove any database/ORM.


<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>








## Static Deploy

If your app is html-static, you can deploy it to a static host.

Your app is html-static when all your page configs have `renderHtmlAtBuildTime: true`.
In that case,
all HTMLs are rendered at build-time,
your app consists of static browser assets only,
no Node.js server is required,
and your app can be statically served.

If you add the `@reframe/deploy-git` plugin you can then
run `$ reframe deploy` to automatically deploy your app.

The deploy command works with any static host that integrates with Git such as
[Netlify](https://www.netlify.com/) (recommanded) or
[GitHub Pages](https://pages.github.com/).

If you want to manually deploy then simply copy/serve the `dist/browser/` directory.
This directory contains all browser assets.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>


## Serverless Deploy

If your app is stateless then we recommand serverless deployment.

Serverless deployment solutions:
 - [Up](https://github.com/apex/up) - CLI tool to manage serverless deployement on AWS.
   <br/>
   The free tier is generous and will likely be enough for your first prototype.
   <br/>
   Step-by-step guide on how to deploy a Reframe app on Up: [github.com/AurelienLourot/reframe-on-up](https://github.com/AurelienLourot/reframe-on-up).
 - [Now](https://zeit.co/now) - Serverless host.
   <br/>
   Includes a free plan, albeit less generous than Up/AWS.
   (See [zeit.co/pricing](https://zeit.co/pricing).)


If you want to persist data, you may consider using a cloud database.
 - [List of cloud databases](/docs/cloud-databases.md)
<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>








## Vue

With the
[`@reframe/vue`](/plugins/vue) plugin
you can use Reframe with Vue instead of React.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>

## React Router

You can use the React Router components by adding the [@reframe/react-router](/plugins/react-router) plugin.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>

## TypeScript

You can write your app with TypeScript by adding the [@reframe/typescript](/plugins/typescript) plugin.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>

## Express

You can use Express (instead of Hapi) by using the [@reframe/express](/plugins/express) plugin.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>

## Koa

You can use Koa (instead of Hapi) by using the [@reframe/koa](/plugins/koa) plugin.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>

## PostCSS

You can write your styles with PostCSS by adding the [@reframe/postcss](/plugins/postcss) plugin.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>




## React Native (Web)

If you want an app on the web and on mobile,
you may consider create a web app with Reframe and [React Native Web](https://github.com/necolas/react-native-web)
and a mobile app with [React Native](https://facebook.github.io/react-native/).
Both app will then share most/lots of code.

Add the [`@reframe/react-native-web`](/plugins/react-native-web) plugin to render your page's React components with React Native Web.

Examples of apps using Reframe + RNW:
 - [/plugins/react-native-web/example](/plugins/react-native-web/example)
 - [/examples/react-native-web-and-react-router](/examples/react-native-web-and-react-router)

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






## React Native (Web) + React Router

As mentioned in the previous section you can use Reframe + React Native Web to share code with your React Native mobile app.

And you can share routing logic by using Reframe + React Native Web + [React Router Web](https://reacttraining.com/react-router/web) for your web app and React Native + [React Router Native](https://reacttraining.com/react-router/native) for your mobile app.

For example:
 - [/examples/react-native-web-and-react-router](/examples/react-native-web-and-react-router)

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






## Bootstrap

See section [Frontend Libraries](#frontend-libraries) below.

## Semantic UI

See section [Frontend Libraries](#frontend-libraries) below.

## Frontend Libraries

There are two ways to add third party browser code:
 - Directly add the code with `<script>` and `<link>` tags.
 - Include the code into Reframe's bundles with `import 'thirdparty/main.js';` and `import 'thirdparty/style.css';`.

See
[Custom HTML &lt;head&gt;, &lt;meta&gt;, &lt;html&gt;, ...](#custom-html-head-meta-html-)
for how to change the HTML to add `<script>` and `<link>` tags.

See
[Custom Default Browser Entry](#custom-default-browser-entry)
for how to eject the browser entry to add
`import 'thirdparty/main.js';` and `import 'thirdparty/style.css';`.

Example that uses jQuery and Semantic UI:
 - [/examples/custom-browser-lib](/examples/custom-browser-lib)

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#use-cases">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>













## Custom Server

By default, Reframe creates a server with the web framework hapi ([hapijs.com](https://hapijs.com/)).

You can customize the hapi server by ejecting it with `$ reframe eject server`.

We encourage you to eject the server and you should if you want to
 - Add custom routes
 - Add API endpoints
 - Add authentication endpoints
 - Use a process manager such as PM2
 - etc.

Running `$ reframe eject server` will copy the following code to your codebase.

~~~js
// /plugins/hapi/start.js

const Hapi = require('hapi');
const config = require('@brillout/reconfig').getConfig({configFileName: 'reframe.config.js'});
const {symbolSuccess, colorEmphasis} = require('@brillout/cli-theme');
const HapiAdapter = require('@universal-adapter/hapi');

module.exports = start();

async function start() {
  const server = Hapi.Server({
      port: process.env.PORT || 3000,
      debug: {request: ['internal']},
  });

  await server.register(
    // We use https://github.com/brillout/universal-adapter to integrate Reframe with Hapi
    new HapiAdapter([
      // Run `$ reframe eject server-rendering` to eject the server rendering code
      config.ServerRendering,
      // Run `$ reframe eject server-assets` to eject the static asset serving code
      config.StaticAssets,
    ])
  );

  await server.start();

  const env = colorEmphasis(process.env.NODE_ENV||'development');
  console.log(symbolSuccess+'Server running (for '+env+')');

  return server;
}
~~~

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>







## Custom Server Framework (Express, Koa, ...)

Check the [list of plugins](/docs/plugins.md) for a plugin integrating the server framework you want to use.
You can then get control over the server instance by runnning `$ reframe eject server`.

If there isn't a plugin for the server framework you want, then run
`$ reframe eject server`
to get control over the server.
At that point you can get rid of the current server framework and replace it another server framework.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>




## Full Custom Server

The following ejectables give you full control over the server.

- `$ reframe eject server`
  <br/>
  Eject the code that creates the server instance.
  See previous sections.
- `$ reframe eject server-rendering`
  <br/>
  Eject the code that implements server-side rendering. (The generation of HTML of pages at request-time.)
- `$ reframe eject server-assets`
  <br/>
  Eject the code that implements the serving of static browser assets (JavaScript files, CSS files, images, fonts, etc.)

If you eject all these ejectables then every single server LOC is in your codebase and you have full control over the server logic.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>









## Custom HTML &lt;head&gt;, &lt;meta&gt;, &lt;html&gt;, ...

Reframe uses [`@brillout/index-html`](https://github.com/brillout/index-html) to generate HTML.

You have full control over the "outer-part" HTML.
(`<meta>`, `<!DOCTYPE html`>, `<head>`, `<html>`, `<body>`, `<script>`, etc.)

There are two ways to change the outer-part HTML:
 - By creating a `index.html` file
 - Over the page config

1. Over the page config:

~~~js
// /examples/custom-head/pages/landing.config.js

import React from 'react';

export default {
    // Add <title>Welcome<title>
    title: 'Welcome',

    // Add <meta name="description" content="A welcome page.">
    description: 'A welcome page.',

    // Add <script src="https://example.org/awesome-lib.js" type="text/javascript"></script>
    scripts: [
        'https://example.org/awesome-lib.js',
    ],

    // Add <link href="https://example.org/awesome-lib.css" rel="stylesheet">
    styles: [
        'https://example.org/awesome-lib.css',
    ],

    // ...
    // ...
    // Every `@brillout/index-html` option is available over the page config
    // ...
    // ...

    route: '/',
    view: () => <h1>Welcome</h1>,
    doNotRenderInBrowser: true,
};
~~~

Note that if `awesome-lib.js` and `awesome-lib.css` are inside your project, you can't follow this
technique. Instead you will have to [customize the browser entry](#custom-default-browser-entry).

2. Over a `index.html` file saved in your app's root directory:

~~~js
// /examples/custom-head/index.html

<!DOCTYPE html>
<html>
    <head>
        <link rel="manifest" href="/manifest.json">
        !HEAD
    </head>
    <body>
        !BODY
        <script src="https://example.org/some-lib.js" type="text/javascript"></script>
    </body>
</html>
~~~

Also, the `indexHtml` page config option allows you to override the `index.html` file for a specific page:

~~~js
// /examples/custom-head/pages/about.config.js

import React from 'react';

export default {
    // Set a different outer-part HTML for the `/about` page
    indexHtml: (
`<!DOCTYPE html>
<html>
    <head>
        <title>About</title>
        !HEAD
    </head>
    <body>
        !BODY
    </body>
</html>
`
    ),

    route: '/about',
    view: () => <h1>About Page</h1>,
    doNotRenderInBrowser: true,
};
~~~

All `@brillout/index-html` options are available over the page config.

See [`@brillout/index-html`'s documentation](https://github.com/brillout/index-html) for the list of options.

Example:
 - [/examples/custom-head](/examples/custom-head)

If you want to use something else than `@brillout/index-html`, then you can eject the renderer,
see [Custom Renderer](#custom-renderer).

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>







## Custom Renderer

By default Reframe renders the `view` property of your page configs with React.

You can customize how your views are rendered.

Either use another plugin in the [list of renderer plugins](/docs/plugins.md#renderers) or eject the renderer with `$ reframe eject renderer`.

Ejecting the React renderer will copy the following code to your codebase.

~~~js
// /plugins/react/renderToDom.js

const ReactDOM = require('react-dom');
const browserConfig = require('@brillout/browser-config');
const {CONTAINER_ID, getReactElement} = require('./common');

module.exports = renderToDom;

async function renderToDom({pageConfig, initialProps}) {
    const reactElement = getReactElement({
        pageConfig,
        initialProps,
        viewWrappers: browserConfig.browserViewWrappers,
    });

    const container = document.getElementById(CONTAINER_ID);
    ReactDOM.hydrate(reactElement, container);
}
~~~
~~~js
// /plugins/react/renderToHtml.js

const ReactDOMServer = require('react-dom/server');
const generateHtml = require('@brillout/index-html');
const config = require('@brillout/reconfig').getConfig({configFileName: 'reframe.config.js'});
const {CONTAINER_ID, getReactElement} = require('./common');

module.exports = renderToHtml;

async function renderToHtml({pageConfig, initialProps}) {
    const reactElement = getReactElement({
        pageConfig,
        initialProps,
        viewWrappers: config.nodejsViewWrappers,
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
~~~
~~~js
// /plugins/react/common.js

const React = require('react');

module.exports = {
    CONTAINER_ID: 'root-react',
    getReactElement,
};

function getReactElement({pageConfig, initialProps, viewWrappers}) {
    let reactElement = React.createElement(pageConfig.view, initialProps);
    reactElement = applyViewWrappers({reactElement, initialProps, viewWrappers});
    return reactElement;
}

// Apply view wrappers.
// E.g. the `@reframe/react-router` plugin adds a view wrapper to add
// the provider-components `<BrowserRouter>` and `<StaticRouter>`.
function applyViewWrappers({reactElement, initialProps, viewWrappers=[]}) {
    viewWrappers
    .forEach(viewWrapper => {
        reactElement = viewWrapper(reactElement, initialProps);
    });
    return reactElement;
}
~~~

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>







## Custom Default Browser Entry

You can customize the browser entry code by running `$reframe eject browser`.

We encourage you to do so and you should if you want to:
  - Initialize user tracking such as Google Analytics
  - Initialize error tracking such as Sentry
  - Add a frontend library such as Bootstrap or Semantic UI
  - etc.

Running `$reframe eject browser` ejects the following code.

~~~js
// /plugins/browser/browserInit.js

import browserConfig from '@brillout/browser-config';

initBrowser();

async function initBrowser() {
    // Include pre-init code here

    // Plugins can add init functions
    // For example:
    //  - page hydration (i.e. rendering of the page to the DOM)
    //  - user tracking initialization
    for(const initFunction of Object.values(browserConfig.initFunctions)) {
        await initFunction();
    }

    // Include post-init code here
}
~~~

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






## Custom Page Browser Entry

You can customize the browser entry code for a single page
without affecting the browser entry code of other pages.

You do this by setting the page config `browserInit`.
For example:

~~~js
// /examples/custom-browser/pages/custom-hydration.config.js

import React from 'react';
import TimeComponent from '../../basics/pages/time/TimeComponent';

export default {
    route: '/custom-hydration',
    browserInit: {
        initFile: './custom-hydration.js',
    },
    doNotRenderInBrowser: true,
    view: () => (
        <div>
            <div>
                Some static stuff.
            </div>
            <div>
                Current Time:
                <span id="time-hook">
                    <TimeComponent/>
                </span>
            </div>
        </div>
    ),
};
~~~

~~~js
// /examples/custom-browser/pages/custom-hydration.js

import React from 'react';
import ReactDOM from 'react-dom';
import TimeComponent from '../../basics/pages/time/TimeComponent';
import './style.css';

ReactDOM.hydrate(<TimeComponent/>, document.getElementById('time-hook'));

console.log('custom hydration');
~~~

You can see the example in full and other examples at [/examples/custom-browser](/examples/custom-browser).

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






## Full Custom Browser Entry

You can as well eject the code that orchestrates the hydration of the page by running `$ reframe eject browser-hydrate`.
If you want to customize the rendering process itself
you should run `$ reframe eject renderer` instead,
see [Custom Renderer](#custom-renderer).

The browser entry of each page is generated at build-time.
You can take control over the generation of browser entries by running `$ reframe eject build-browser-entries`.
We recommand to use the previously mentioned ejectables instead.
Use this ejectable as last resort.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






## Advanced Routing

###### Reframe's default router

By default, Reframe uses [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp) to match URLs with a the page config's `route`.
(React Router uses `path-to-regexp` as well.)

For example, in the following page config, Reframe will use `path-to-regexp` to determine if a URL matches the page's route `'/hello/:name'`.

~~~jsx
const HelloPage = {
    route: '/hello/:name',
    view: ({route: {args: {name}}}) => <div>Welcome {name}</div>,
};
~~~

See [`path-to-regexp`'s docs](https://github.com/pillarjs/path-to-regexp) for further information about the route string syntax.

###### Advanced routing with React Router

You can use React Router's components by adding the plugin [`@reframe/react-router`](/react-router).

Using React Router components allow you to implement:
 - **pushState-navigation**
   <br/>
   To navigate to a new page by manipulating the DOM instead of loading the new page's HTML.
   (A detailed explanation of "pushState-navigation" follows below.)
   Such navigation make sense for route changes that cause only small changes on the page.
   It would for example be prohibitive to reload the entire page for a URL change that causes only minor changes to a little box on the page.
 - **Nested Routes**
   <br/>
 - **SPAs**
   <br/>
   Apps where the app's entire browser-side code is bundled in one script and loaded at once.
 - **URL hash**
   <br/>
   URLs with a `window.location.hash`.

###### Html-navigation VS pushState-navigation

There are two ways of navigating between pages:
 - *HTML-navigation*
   <br/>
   When clicking a link, the new page's HTML is loaded.
   (In other words, the browser discards the current DOM and builds a new DOM upon the new page's HTML.)
 - *pushState-navigation*
   <br/>
   When clicking a link, the URL is changed by `history.pushState()` and the DOM is manipulated (instead of loading the new page's HTML).

By default, Reframe does HTML-navigation when using `<a>` links between pages defined with page configs.

###### pushState-navigation

By using React Router's components you can do pushState-navigation.
Pages are then defined by React Router's component instead of page configs.

Note that with *page* we denote any view that is identified with a URL:
If two URLs have similar views that differ in only in a small way,
we still speak of two pages because these two views have two different URLs.

Also note that the broswer-side code is splitted only between pages defined with page configs,
and pages defined with React Router components will share the same browser-side code bundle.


<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>





## Custom Router

Reframe can be used with any routing library.

Either use another plugin in the [list of router plugins](/docs/plugins.md#routing) or eject the router with `$ reframe eject router`.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






## Custom Babel

You can customize the babel config by creating a `.babelrc` file.

Example:
 - [/examples/custom-babel](/examples/custom-babel)

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






## Custom Webpack

You can customize the webpack config by using `webpackBrowserConfig` and/or `webpackNodejsConfig`.

~~~js
// reframe.config.js

module.exports = {
    $plugins: [
        require('@reframe/react-kit')
    ],
    webpackBrowserConfig: webpackConfig,
    webpackNodejsConfig: webpackConfig,
};

function webpackConfig({
    config,

    // Webpack entries
    // For `webpackNodejsConfig` this is the list of found page config paths
    // For `webpackBrowserConfig` this is the list of (generated) browser entry files
    entries,

    // The directory where the built assets are expected to be
    outputPath,

    // Config modifiers provided by the package `@brillout/webpack-config-mod`
    setRule, getRule, getEntries, addBabelPreset, addBabelPlugin, modifyBabelOptions
}) {
    // Either
    //  - apply modifications to `config` (by using modifiers or manually), or
    //  - return an entirely new config object (by using `entries` and `outputPath`)

    return config;
}
~~~

All `@brillout/webpack-config-mod` config modifiers are listed at [/helpers/webpack-config-mod](/helpers/webpack-config-mod).

Examples:
 - Using config modifiers [/examples/custom-webpack](/examples/custom-webpack)
 - Fully custom config [/examples/custom-webpack-full](/examples/custom-webpack-full)
 - Source code of [`@reframe/postcss`](/plugins/postcss)
 - Source code of [`@reframe/react`](/plugins/react)
 - Source code of [`@reframe/typescript`](/plugins/typescript)

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>



## Full Custom Build

Run `$ reframe eject build` to eject the overall build code.

It will copy the following file to your codebase.

~~~js
// /plugins/build/runBuild.js

const Build = require('webpack-ssr/Build');
const watchDir = require('webpack-ssr/watchDir');

const projectConfig = require('@brillout/reconfig').getConfig({configFileName: 'reframe.config.js'});

const outputDir = projectConfig.projectFiles.buildOutputDir;
const getPageFiles = () => projectConfig.getPageConfigFiles();
const getWebpackBrowserConfig = ({config, ...utils}) => projectConfig.webpackBrowserConfigModifier({config, ...utils});
const getWebpackNodejsConfig = ({config, ...utils}) => projectConfig.webpackNodejsConfigModifier({config, ...utils});
const {log, doNotWatchBuildFiles} = projectConfig;
const {pagesDir} = projectConfig.projectFiles;
const {getPageHtmls, getPageBrowserEntries} = projectConfig;
const serverEntryFile = projectConfig.transpileServerCode && projectConfig.serverStartFile;

const build = new Build({
    outputDir,
    getPageFiles,
    getPageBrowserEntries,
    getPageHtmls,
    getWebpackBrowserConfig,
    getWebpackNodejsConfig,
    log,
    doNotWatchBuildFiles,
    serverEntryFile,
});

watchDir(pagesDir, () => {build()});

module.exports = build;
~~~

Run `$ reframe eject build-rendering` to eject `getPageHtmls()` to gain control over the static rendering.
(That is the rendering of pages to HTML that happens at build-time.
In other words, the HTML rendering of pages that have `renderHtmlAtBuildTime: true` in their page configs.)
Note that, most of the time, you should eject the renderer instead,
see [Custom Renderer](#custom-renderer).
Use this ejectable as last resort.

Run `$ reframe eject build-browser-entries` to eject `getPageBrowserEntries()` to gain control over the generation of the browser entry source code of each page.
Note that, most of the time, you should use the browser ejectables instead,
see the sections under "Custom > Browser".
Use this ejectable as last resort.

If you eject all build ejectables, then you have full control over the build logic.

<br/>

Feel free to [open a GitHub issue](https://github.com/reframejs/reframe/issues/new) or [chat with Reframe authors on Discord](https://discord.gg/kqXf65G).
<br/>
<br/>
<b><sub><a href="#custom">&#8679; TOP  &#8679;</a></sub></b>
<br/>
<br/>
<br/>






<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/usage-manual.template.md` instead.






-->
