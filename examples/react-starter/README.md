<h1 align="center">
  <p>Enterwell React starter</p>
  <div>
    <a href="https://www.javascript.com/" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="30" />
    </a>
    <a href="https://reactjs.org/" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="30" />
    </a>
    <a href="https://nextjs.org/" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="nextjs" width="30" />
    </a>
    <a href="https://mobx.js.org/README.html" target="_blank">
      <img src="https://mobx.js.org/assets/mobx.png" alt="mobx" width="30" />
    </a>
    <a href="https://mui.com/" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="mui" width="30" />
    </a>
    <a href="https://sass-lang.com/" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="30" />
    </a>
    <a href="https://storybook.js.org/" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" alt="storybook" width="30" />
    </a>
    <a href="https://jestjs.io/" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="jest" width="30" />
    </a>
    <a href="https://www.cypress.io/" target="_blank">
      <img src="https://www.cypress.io/icons/icon-48x48.png" alt="cypress" width="30" />
    </a>
  </div>
</h1>

<div align="center">

[![Build](https://github.com/Enterwell/react-starter/actions/workflows/BuildAndTest.yml/badge.svg?branch=main)](https://github.com/Enterwell/react-starter/actions/workflows/BuildAndTest.yml)
![GitHub last commit](https://img.shields.io/github/last-commit/Enterwell/react-starter?label=Last%20commit)
[![GitHub issues](https://img.shields.io/github/issues/Enterwell/react-starter?color=0088ff)](https://github.com/Enterwell/react-starter/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/Enterwell/react-starter)](https://github.com/Enterwell/react-starter/graphs/contributors)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Enterwell/react-starter?color=0088ff)](https://github.com/Enterwell/react-starter/pulls)

</div>

This document represents the official React starter documentation. React starter was created due to the desire to unify all React projects that we will develop in the future. This document will therefore explain and list out the following conclusions that the Enterwell elders agreed on after several multi-hour meetings:

* application architecture
* organization of the project files and folders
* recommendation of npm packages that have proven useful in the past

If any doubts remain after reading this document, feel free to contact us via [GH Issues](https://github.com/Enterwell/react-starter/issues).

## Table of contents

* [Quick start](#quick-start)
* [Why React and why Next.js?](#why-react-and-why-nextjs)
* [Project structure](#project-structure)
  * [Project root files](#project-root-files)
  * [Project root folders](#project-root-folders)
* [Architecture](#architecture)
  * [Components](#components)
  * [Data](#data)
  * [Logic](#logic)
  * [Architecture example](#architecture-example)
* [Styles](#styles)
* [Naming](#naming)
  * [Naming folders](#naming-folders)
  * [Naming files](#naming-files)
* [Testing](#testing)
  * [Unit testing](#unit-testing)
  * [Component testing](#component-testing)
  * [End-to-end testing](#e2e-end-to-end-testing)
* [Packages](#packages)
  * [Default packages](#default-packages)
  * [Additional packages](#additional-packages)
* [Developing using Storycap](#developing-using-storycap)
* [Launching the application](#launching-the-application)
* [Predeployment TODOs](#predeployment-todos)

## Quick start

This project uses [Yarn](https://classic.yarnpkg.com/en/) as its package manager so in order to get quickly up and running you will need to have it installed on your machine.

If you don't already have it, you can easily install it by using the following command (assuming you have [Node.js](https://nodejs.org/en/) installed)

```bash
npm install --global yarn
```

Now you can setup the application without any hassle using the following command

```bash
yarn create next-app -e https://github.com/Enterwell/react-starter
```

And success, you are ready to rumble!

Once in the project directory, you can start the `development` version of the application using the command

```bash
yarn dev
```

For documentation on running the application in other modes, see ['Launching the application' section](#launching-the-application).

## Why React and why Next.js?

[React](https://reactjs.org/) is one of many JavaScript libraries and frameworks that aim to make building user interfaces easier. React is Facebook's project, which ensures a certain certainty that this is not just another buzzword technology that will be forgotten in a month. Why was React chosen for application development, and not, say, Vue or Angular, I do not know, but since it turned out to be quite easy and fast to develop applications with it, there was no need to change.

[Next.js](https://nextjs.org/) is one of React frameworks that we relatively recently decided to use together with React. Its use makes it easier to configure projects (without having to mess around with [webpack](https://webpack.js.org/)), provides support for pre-rendering pages, and more.

## Project structure

The React starter's root contains all the configuration files of the tools used during the development and build of the application, as well as folders with different aspects of the application.

### Project root files

* `.eslintrc` - used for configuring [ESLint](https://eslint.org/)
* `.eslintignore` - used for defining files that will be ignored by [ESLint](https://eslint.org/)
* `.gitignore` - used for defining files which changes [Git](https://git-scm.com/) will not track
* `package.json` - used for defining packages used in the application (so-called `dependencies` and `devDependencies`)
* `cypress.json` - used for configuring [Cypress](https://www.cypress.io/) 
* `jest.config.js` - used for configuring [Jest](https://jestjs.io/) 
* `yarn.lock` - used by [Yarn](https://classic.yarnpkg.com/en/) to know exactly which versions of the packages need to be installed
* `next.config.js` - used for defining non-default [Next.js](https://nextjs.org/) configuration
* `README.md` - used for project description - how to get it started, some basic things about the packages used or some other tips for people who will work on the project in the future
* `CHANGELOG.md` - used for keeping [application change logs](https://keepachangelog.com/en/1.0.0/) (adding new features, fixing bugs, etc.)

### Project root folders

* `.storybook` - a folder used for [Storybook](https://storybook.js.org/) configuration which contains various configuration files
* `.stories-approved` - a place where images of all of the defined `Storybook` stories are stored
* `.cypress-approved` - a place where all cypress screenshots are stored
* `app-models` - a place where all the app-models that exist within the application are stored
* `component-models` - a place where all the component-models that exist within the application are stored
* `components` - a place where all components that are not related to only one `view` are stored (so-called *shared components*)
* `config` - a place where the various configuration files, used by the application itself, are stored (e.g. internationalization configuration, MUI themes, or something else)
* `cypress` - a place where Cypress related files are stored
* `helpers` - a place where all the helpers that exist within the application are stored
* `hooks` - a place where all custom hooks that exist within the application are stored
* `mappers` - a place where all the mappers that exist within the application are stored
* `models` - a place where all the models that exist within the application are stored
* `pages` - a folder which subfolders and files form a hierarchy of available application routes
* `public` - a place where all the static resources of the application are stored (e.g. images, SVGs and files that can be downloaded through the application)
* `repositories` - a place where all the repositories that exist within the application are stored
* `services` - a place where all the services that exist within the application are stored
* `styles` - a place where all the global styles that exist within the application are stored
* `tests` - a place where all of the tests that exist within the application are stored
* `view-models` - a place where all the view-models that exist within the application are stored
* `views` - a place where all the views and only related components are stored

More details on what each of these entities is can be read in the section on the architecture of the React starter application. Additional note: it is possible to find, in some folders, a file named `TODO_delete_this_later.txt` which sole purpose is to make the folder not empty so that Git can track it.

## Architecture

Let's start now *in medias res* - the image just below this paragraph shows the architecture of Enterwell React applications. Of course, this is not the only, and at least the only correct architecture of the React application, but it is an architecture around which the elders of Enterwell almost unanimously agreed. Different segments of the architecture will be explained below.

<div style="margin: 50px 0; text-align: center;">
  <img src="./public/assets/images/architecture.png" alt="Arhitektura" >
</div>

### Components

At the heart of any React application are its components. Components are the building blocks of an application and define the user interface that the user will ultimately see. In Enterwell's React architecture, components can correspond to one of the following 3 groups: `pages`, `views`, and `components`.

#### Pages

React applications developed at Enterwell in previous years used `react-router` and similar packages for routing. By switching to Next.js, the need for using these packages has disappeared and the routes of applications are defined by a hierarchy of files and folders within [`pages`](https://nextjs.org/docs/basic-features/pages) folder (e.g. `pages/index.jsx` file matches the route `/`, `pages/pokemons/index.jsx` file matches the route `/pokemons` etc.).

Since this way of routing is typical of Next.js, and due to the desire to make applications a little less coupled with it, `pages` components service only as an encapsulation around the `views` components.

It is important to note that within the `pages` folder there are also files that do not correspond directly to the application routes. This refers to [`_app.jsx`](https://nextjs.org/docs/advanced-features/custom-app), [`_document.jsx`](https://nextjs.org/docs/advanced-features/custom-document) and [`_error.jsx`](https://nextjs.org/docs/advanced-features/custom-error-page) files that have a special role defined by Next.js.

#### Views

`views` components represent everything that the user sees on an application route, and they can then use one or more "ordinary" components within themselves. If the `view` component becomes too complex, it is recommended to break it down into more "ordinary" components. If the "ordinary" components obtained in such a way are used only in that `view` and nowhere else, they need to be placed in a separate folder within the folder of that `view`. Components used in multiple places in the application need to be placed in a separate folder within the `components` folder.

#### Components

`components` components represent all those components that are used in several places in the application. A component should be placed in this folder if it is used in at least two places in the application or if it is general enough to be used in multiple places. Once the development of the application has started, all components will be used in only one place, but some of them can be assumed in advance that they can be used in more places. Examples of such components are various `Input` components.

### Data

Each React component has support for data persistence in the form of its `state`. If the application has slightly larger components with a larger amount of data, the `state` of these components can easily become obscure, and the components themselves become too polluted with the application's logic. To address this problem, over time, libraries have emerged that simulate `state` behavior (in the sense that they activate component re-render when data on which it depends changes) but also allow data on which the component depends to be stored outside of it. One of these libraries is [`mobx`](#default-packages) which is used in Enterwell React applications.

In general, both data storage methods are combined within Enterwell React applications. When it comes to forms or some components with a small amount of data that need to be stored, then `state` is used for storage. When it comes to larger components with more complex logic, then data and logic are separated from the components into separate units. The following is a hierarchy of units for data persistence in the application.

#### App-model

App-models persist data that is common to the entire application and that should be preserved throughout the use of the application, regardless of the route on which the user is located.

App-models can be accessed directly or through a view-model that needs to keep a reference to it. You should almost always use the latter way of accessing app-models. The former method should only be used for some top components that do not belong directly to any `view` (e.g. layout component which is the same for most `views` and is defined within the common `_app.jsx` component which does not have its own view-model).

In addition to data, app-models also contain logic for retrieving and modifying them.

#### View-model

In view-models, the data that is characteristic to a `view` persists. Depending on the needs, view-models can be destroyed along with the `view` or can exist throughout the life of the application. When the application contains a `view` with a list of some data (e.g. a list of all Pokemon), then it is appropriate to use view-models that are created only once and that exist throughout the life of the application. For `views` that show the details of the list elements (e.g. details of a Pokemon), it is appropriate to use view-models that last as long as the `view` to which they belong. In the latter case, short-term view-models are suitable because the same `view` is used to display several different routes (e.g. `/pokemons/1`, `/pokemons/45` etc.) and with this, the case of incorrect data displaying during the initial component rendering is avoided.

The above cases are just examples and the lifespan of a view-model depends solely on the needs of an application. Also, just like app-models, view-models contain logic in addition to data to retrieve and modify it.

#### Component-model

Data that is inherent to a `component` persists in component-models. Component-models should not be made for all components, but only for those with more complex logic (e.g. when the same modal is used to create something on multiple `views` in the application, it is more appropriate to separate logic into a component-model than to repeat it in each view model and then forward it to the component).

### Logic

It has already been mentioned that part of the application logic is located in app-models, view-models and component-models. The logic distributed across these units should be closely related only to the data they contain. Looking at the previous picture, it is evident that there is another layer of logic which segments will be discussed in this section.

#### Model

Models are classes that represent entities used in an application. Data retrieved from the server (or other data source) needs to be mapped to appropriate models.

#### Mapper

Mappers are classes that provide a data mapping service. The most common use case is to use them when mapping data from the server to the models used in the application. When mapping, it is possible to make appropriate transformations over individual data (e.g. data formatting, data localization, etc.).

#### Repository

Repositories are classes that serve as application boundaries and through which the application retrieves data. How the data will be retrieved depends solely on the repository or the application itself. The most common way to retrieve data is from an API, but data can also be retrieved from `local storage`, for example.

Repository methods use individual mappers to map the data they retrieve.

#### Service

Services are classes that provide an application-specific role, such as displaying notifications, communicating with `local storage`, communicating with an API or something else.

#### Helper

Helpers are classes very similar in purpose to services, but still a little less specific and they usually provide some "stupid" service that is repeated in several places in the application.

#### Hooks

Hooks are similar in purpose to helpers, but they are primarily focused for being used in React components. They let us extract component logic into reusable functions. Hooks are JavaScript functions whose name starts with `use` and that may call other Hooks.

### Architecture example

<div style="margin: 50px 0; text-align: center;">
  <img src="./public/assets/images/architecture-pokemons.png" alt="React starter application architecture" >
</div>

For all this not to be just a dead letter on the screen, a smaller application that implements the previously described architecture was created as part of the React starter. The application uses PokéAPI and, as you can already guess, it is used to view Pokemon.

The application consists of 3 "smart" and 2 "stupid" pages. Stupid pages are those to which the user will not otherwise voluntarily come to watch the content, but will be redirected there in certain situations. Those 2 "stupid" pages are `_error.jsx` and `404.jsx`. `_error.jsx` is displayed to the user when an application error occurs, and `404.jsx` when the user enters a route that is not defined. The "smart" pages are `index.jsx` (corresponding to route `/`), `pokemons/index.jsx` (corresponding to route `/pokemons`) and `pokemons/[id].jsx` (corresponding to route `/pokemons/{pokemon-id}`). The `index.jsx` page in this application only displays the message that nothing can be seen there and directs the user to the Pokemon page. `pokemons/index.jsx` displays a list of Pokemon with pagination. Clicking on an individual Pokemon from the list opens the `pokemons/[id].jsx` page showing its details. The `pokemons/index.jsx` and `pokemons/[id].jsx` pages in the upper right corner display a component where the user can enter their name.

Since the `index.jsx` page does not store any data, no logic is tied to it, so it will not be mentioned below.

The `pokemons/index.jsx` page displays a list of Pokemon retrieved from PokéAPI. The component corresponding to that page keeps a copy of the `PokemonsViewModel` inside of itself. Although this view model is retrieved each time the user arrives on that route, there is only one instance of that view model while using the application (unless the page refreshes or the page is closed and reopened). Using the `PokemonsViewModel` methods, the component calls to retrieve the data and then displays it. The `PokemonsViewModel` uses the `PokemonsRepository` which communicates with an API, to retrieve Pokemon. After retrieving the data from an API, `PokemonsRepository` forwards the data to the `PokemonsMapper` which maps it to a collection of `PokemonSimplified` models and returns it to the repository. The repository then gives the mapped data to the `PokemonsViewModel`.

The `pokemons/[id].jsx` page shows Pokemon details retrieved from PokéAPI. The component corresponding to that page keeps a copy of the `PokemonDetailsViewModel`. Unlike `PokemonsViewModel`, there is not just one instance of `PokemonDetailsViewModel`, but a new one is created each time (each time a user comes to that page). Retrieving Pokemon details works the same as retrieving a list of them - the same repository and mapper are used, and only the data is mapped to another model. Another difference of this page in relation to `pokemons/index.jsx` is that this page needs information about the name of the current user which is stored at the application level in `UserAppModel`. `UserAppModel` instance is therefore accessible to the page through its view-model. `UserAppModel` retrieves user data using `UserAppRepository` which communicates with `local storage`.

The components used within this demo application are not necessarily compatible with the components that should be used on "real" applications. This primarily refers to the `LoadingContainer` component around which the spears are broken and which according to some should behave differently.

To make it easier to develop components (whether `component` or `views`) and isolate them from the rest of the application and its business logic during their development, we use [Storybook](https://storybook.js.org/docs/react/get-started/introduction). Storybook is an open-source tool that allows us to build UI components and pages in isolation. It does not need to run the entire, possibly complex, dev stack, force test data, and navigate the entire application to develop a single component. We use Storybook for shared components located in the `components` folder and for pages that are harder to trigger eg. error pages. In our case that would be `NotFoundView`, `ErrorView` and `InternalServerErrorView`.

In order to add new component to `Storybook` it is necessary to define a [story](https://storybook.js.org/docs/react/get-started/whats-a-story) file within the same folder as the component file, which can be identified by the `.stories.jsx` extension. You can read up on how to write a story [here](https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories).

Starting the `Storybook` UI interface is done with the command

```bash
yarn storybook
```

This command will start `Storybook` locally and output the address at which the process is running. Depending on your system configuration, the address will automatically be opened in a new browser tab.

## Styles

Each component (whether `component` or `view`) should have its own styles. Styles are placed in the same folder as the component file and the style file can be identifier by the `.module.scss` extension. The exception to this rule are global styles that apply to the entire application and are located in the `styles` folder. Colors that are used in the application are defined the same way as global styles. This way, they can be used in several places in the application without having to rewrite them over and over again (this is especially convenient for the main colors of the theme that runs throughout the application). It is important to note that not all colors should be extracted into global styles, especially if they will be used only in one place.

## Naming

Naming is something that always provokes controversy because most of us have some style of our own that we prefer. Even while negotiating this React starter there were such problems, and everyone was wanting to have it their own way. It was difficult and the creators of React were not very helpful as there is no official convention. Observing other React projects, we came to the decisions described below.

### Naming folders

* When naming folders in the root folder, `kebab-case` is used (all words are written in lower case and are separated by a hyphen)
* When naming folders in subfolders, `PascalCase` is used (all words are capitalized and are not separated from each other)
* Exceptions to the previous rules are subfolders of `pages` and `public` folders which are also written with `kebab-case`

### Naming files

* Configuration files in the root folder are not subject to any rules but are written in the form required by the tools that use them
* All files in `pages` and `styles` folders are written with `kebab-case`
* All files that represent React components and files from which a class or more functions are `exported` are written with `PascalCase`
* Files from which a class instance or an object is `exported` are written in `camelCase` (the first word is written in lower case, the rest in uppercase and they are not separated from each other)
* Files of "local" styles are written with `PascalCase` with extension `.module.scss`
* Files from the `public` folder are not subject to any rules

## Testing

By writing tests we achieve automated checks that everything in the application is working properly. Automated tests are useful because you don't have to manually test all the functionalities every time something changes in the application. All of our tests are written inside the `tests` folder in the project root.

We have selected both [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) as the most suitable libraries for testing the application. When we talk about application testing, we can divide all tests into three different logical levels.

### Unit testing

Unit testing is different from other testing methods because it consists of testing isolated parts of the source code, testing the code and logic. We use them in the application to test `services` and `helpers` or any other JavaScript code when there is some advanced logic. We will never use unit tests, or any other testing method, for testing third-party code directly, because if we depend on a certain package, we must be able to assume that it will work properly.

Unit tests are written inside the `tests/unit` folder. There are already 3 unit tests written in the application. They can be recognized by the `spec.js` extension. `LocalStorageService.spec.js` testing the corresponding `LocalStorageService.js` service, `StoriesCompare.spec.js` testing the `StoriesCompare.js` helper and `CypressCompare.spec.js` testing the `CypressCompare.js` helper.

Unit tests can be run directly from the command line using the command

```bash
yarn unit-test
```

### Component testing

Component testing is conceptually the same as unit testing, except that instead of functions, we test components. We want to write these tests because the number of components can very easily reach a large number. Now, after each change in the source code, it becomes almost impossible to check all of their states to see if they still behave as expected.

Component tests are written inside the `tests/component` folder. There are already tests written for each component in the application from the `components` folder. They can be recognized by the `spec.jsx` extension.

Component tests can be run directly from the command line using the command

```bash
yarn component-test
```

or a UI can be opened through which they can be manually run. The UI is opened by using the command

```bash
yarn component-test-open
```

### E2E (end-to-end) testing

E2E or end-to-end tests are used to verify that the application is working as a whole. They confirm big features and even entire pages. Most often, they "survive" refactoring because, despite refactoring, application still needs to work as expected. They represent how users use the application and give us the most confidence that the application is working properly.

End-to-end tests are written inside the `tests/integration` folder. There are already tests written for each page of the application from the `views` folder. They can be recognized by the `spec.js` extension.

End-to-end tests can be run directly from the command line using the command

```bash
yarn e2e-test
```

or a UI can be opened through which they can be manually run. The UI is opened by using the command

```bash
yarn e2e-test-open
```

Sometimes some tests do not pass when run by using the command line, so it is recommended to always run them using the UI if you can.

Various different commands were shown that can run each testing method separately from each other. This can be useful if we want to focus on one type of tests without running others. But we can also run all of the tests at once by using the command

```bash
yarn test
```

In both, component and end-to-end tests, we can use `Cypress`'s handy [screenshot](https://docs.cypress.io/api/commands/screenshot) command. Using this command we can generate a screenshot of the application under test at any desired moment. This can make it easier for us to review PRs and all new future changes.

The screenshot command can be called with and without a parameter.

```bash
cy.screenshot()
```
takes a screenshot that will be stored in the `.cypress-pending` directory with a default name including the current test's suite and test name.

```bash
cy.screenshot(fileName)
```
takes a screenshot that will be stored in the `.cypress-pending` directory with a given name instead of the default one.

We have defined our own `screenshot` command override in the `cypress/support/commands.js` module. Our custom `screenshot` implementation unfocuses any focused element (for consistent screenshots), waits `200ms` for any assets that may be loading, and then calls the original command.

We have also defined the following script within `project.json`

```bash
yarn cypress-check
```
which runs our end-to-end and component tests and places the generated screenshots in the `.cypress-pending` folder in the project root. The script will then run our custom logic contained in the `CypressCompare.js` helper.

This script is run automatically on all PRs to the `main` branch by the `.github/workflows/ScreenshotsCheck.yml` GitHub Action. The workflow creates a commit with the screenshots to the PR branch.

This gives us an easy way to get a visual comparison of the tests that have changed when reviewing the PRs.

#### Interactive testing using the Cypress Studio

By using `Cypress` as our end-to-end testing tool we have been given an option to extend existing or create new tests entirely by clicking and recording interactions against the running application. This feature is called [Cypress Studio](https://docs.cypress.io/guides/core-concepts/cypress-studio).

To open `Cypress Studio` you need to launch the `Test Runner` by executing the following command

```bash
yarn e2e-test-open
```

The window will open showing the list of all currently defined end-to-end tests from the `tests/integration` folder. Here, you can create a new `spec.js` file by clicking on the `New Spec File` button in the upper right section of the window, or run an already defined file by clicking on it.

Once the tests complete their run, you can do one of the following two things:
* Hover over any existing test and use the revealed `Add Commands to Test` icon, or
* Hover over any `describe` block and use the revealed `Add New Test` icon

Either way, `Cypress Studio` will open where you can freely interact with the application and see the generated testing commands in the `Command Log`. By right-clicking on any DOM element you can generate various assertions. Each generated command in the `Command Log` can be undone by hovering over it and using the delete button.

Use `cancel` button to exit `Cypress Studio` and discard the recorded interactions. To save the generated commands use the `Save Commands` button. Once saved, underlying `spec.js` is updated with the recorded actions.

## Packages

By looking at `package.json` you can get an idea of some of the packages used. The React starter includes only the basic packages that we think will always be used in the application, but there is also a whole set of other packages that are used as needed.

One of the questions that come up when adding packages is whether they should be added as `dependencies` or as `devDependencies`. The limit is blurry, but let's say that only the packages without which the application can not work on production should be added as `dependencies`, while `devDependencies` should only include packages used during development. You don't need to worry so much about it, because the applications we develop will work properly regardless of that.

### Default packages

The following are packages that have been added to the project by default and will most likely be used in the application. If it turns out that there is no need for some of them, they can be removed freely. Note: packages that are tools to help the development and the build of the application (`babel`, `eslint`, `next`, etc.) are not described.

* [`react`](https://reactjs.org/) / [`react-dom`](https://reactjs.org/docs/react-dom.html) - library which role has already been described and which name is in the name of the starter, which implies that it is impossible not to use
* [`mobx`](https://mobx.js.org/README.html) / [`mobx-react-lite`](https://mobx-react.js.org/) - state management library that allows you to separate application logic from rendering components (allows data changes to cause components to render - it has a similar effect as state components but it is not necessarily related to it)
* [`cypress`](https://www.cypress.io/) - library that allows you to write tests for the application
* [`@mui/material`](https://mui.com/) / [`@mui/icons-material`](https://mui.com/components/material-icons/) - a collection of React components and icons that allows us not to reinvent the wheel by writing our own buttons, inputs and other components
* [`axios`](https://github.com/axios/axios) - HTTP client that allows easy communication between the application and the server or an API
* [`noty`](https://ned.im/noty/#/) - library used to display notifications within the application
* [`clsx`](https://github.com/lukeed/clsx) - package that simplifies conditional class assignment to HTML elements / React components

### Additional packages

Since the goal of this starter is not to bloat or overload it with all the possible packages that could be used, many of them will need to be added as needed. The following is a list of packages that are recommended for use if the described functionality of the application provided by that package is needed.

If none of the following packages meet your wishes and demands, you need to add a new one of your choice. [npm](https://www.npmjs.com/) is a place where you can find packages for everything.

* [`@enterwell/react-form-validation`](https://github.com/Enterwell/react-form-validation) - our own, "homemade" package for working with React forms that primarily allows for their easy validation
* [`@enterwell/enum-helper`](https://github.com/Enterwell/js-enum-helper) - another "homemade" package that makes it easier to work with enums
* [`@mui/lab`](https://mui.com/components/about-the-lab/) - an additional collection of MUI components that have not yet become an integral part of the core collection
* [`@material-ui/pickers`](https://material-ui-pickers.dev/) - a collection of time and date picker components also developed by the MUI (formerly known as Material-UI) team
* [`sentry`](https://sentry.io/welcome/) - application error tracking package (so-called *error monitoring*)
* [`i18next`](https://www.i18next.com/) / [`react-i18next`](https://react.i18next.com/) - framework for internalization of applications with minimal overhead
* [`moment`](https://momentjs.com/) - library that makes it easier to work with dates and times

## Developing using Storycap

For a more organized development of components and pages, we use `Storybook` as we have already mentioned earlier. One of its add-ons we use is called [Storycap](https://github.com/reg-viz/storycap).

`Storycap` crawls `Storybook` and generates images of all defined stories. With the help of these generated images, we can make it easier for us to review PRs and all new future changes.

Script has been defined within `project.json` that is used for this purpose.

```bash
yarn stories-check
```
which runs `Storycap` and places generated images in the `.stories-pending` folder in the project root. The script will then run our custom logic contained in the `StoriesCompare.js` helper.

At the end of the execution, images of all of the stories that have changed in this development iteration have now been modified and overwritten in the `.stories-approved` folder (either because we modified the components or because we added, modified, or deleted some of the stories).

This script is run automatically on all PRs to the `main` branch by the `.github/workflows/ScreenshotsCheck.yml` GitHub Action. The workflow creates a commit with the modified images to the PR branch.

This gives us an easy way to get a visual comparison of the stories that have changed when reviewing the PRs.

## Launching the application

There are several commands with which you can launch the application and it all depends on whether you want it to run in `development` or `production` mode and whether you want to use the local API or not.

Starting the application in `development` mode using the remote API is done with the command

```bash
yarn dev
```

Starting the application in `development` mode using the local API is done with the command

```bash
yarn dev-local
```

When application development is complete, the application needs to be `built`. `Building` the application is done using the commands

```bash
yarn build
```

```bash
yarn build-local
```

depending on whether the application uses a local or remote API.

When you have successfully `built` your application, you can start the `production` version using the command

```bash
yarn start
```

Whether running in `development` or `production` mode, application is available at `http://localhost:3000`.

</br>

Exporting your application to static HTML, which can then be run standalone without the need of a `Node.js` server is done using the command

```bash
yarn export
```

This command generates an `out` directory in the project root. Only use this command if you don't need any of the [features](https://nextjs.org/docs/advanced-features/static-html-export#unsupported-features) requiring a `Node.js` server.

## Predeployment TODOs

Before deploying the application, make sure that all the tasks from the list below have been completed.

* Change application's name in the `package.json`
* Change application's default title in the `_app.jsx`
* Change favicon
* Remove all unused and starter's specific files (e.g. `architecture.png`, `architecture-pokemons.png`, `PokemonsMapper.js`, `PokemonsRepository.js`...)
* Remove all `TODO_delete_this_later` files and empty folders
* Customize error pages
