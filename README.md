<h1 align="center">Gatsby 'Hello World' Starter by David Sabine</h1>
<h2 align="center">Vanilla Gatsby (v2), <em>plus</em> PWA plugins, basic SEO plugins, and test tools: Jest &amp; Cypress</h2>
 
Kick off your project with this boilerplate. This barebones starter ships with the main Gatsby files and the basic TDD/automated-test tools preferred by the Gatsby core contributors: Jest &amp; Cypress

Basically, This starter combines [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) with [the official testing guides](https://next.gatsbyjs.org/docs/testing/) and the SEO-related plugins to produce appropriate &lt;HEAD&gt; content and manifest, sitemap, and robots files.
  

## 🚀 Quick start

1.  **Install the Gatsby CLI.**

The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

```sh

# install the Gatsby CLI globally

npm install -g gatsby-cli

```

2.  **Create a Gatsby site using this starter.**

Use the Gatsby CLI to create a new site, specifying this starter.

```sh

# create a new Gatsby site using this starter

gatsby new my-gatsby-site https://github.com/davidsabine/gatsby-starter

```

3.  **Start developing.**

Navigate into your new site’s directory and start it up.

```sh

cd my-gatsby-site

npm install


# to run jest tests

yarn test


# to run jest tests for every change to source code

yarn test:watch


# or to run end-to-end tests with Cypress

yarn test:e2e
# Note: tests will run in Cypress default runner and
# will update as you edit code. It's awesome.


# or to run end-to-end tests with Cypress, against the production build

yarn test-prod:e2e


# or, as with other starters, you can...

yarn develop

```

4.  **Open the source code and start editing!**

After running `yarn develop` or `gatsby develop`, your site is now running at `http://localhost:8000`!

Open the `my-gatsby-site` directory in your code editor of choice and look for these files to read the tests:

- Any files in a folder called `__tests__`
- Any files called `*.test.js` or `*.spec.js`
- Any files in a folder called `cypress/integration`

Save your changes and the browser and test runners will update in real time!


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

.

├── `__mocks__`

├── cypress

├──├──integration

├──├──├── `*.e2e.js`

├── node_modules

├── public

├── src

├──├── components

├──├──├── `__tests__`

├──├── pages

├── .eslintrc.json

├── .gitattributes

├── .gitignore

├── cypress.json

├── gatsby-config.js

├── jest-loadershim.js

├── jest-preprocess-beforeeach.js

├── jest-preprocess

├── LICENSE

├── package-lock.json

├── package.json

├── README.md

└── yarn.lock

## 🗝 Remarks

1. **`.eslintrc.json`** This file is included to help your IDE settings.  The repository does not include the ESLint module. (Yet.)

2. **`Test folders & files`** I have used a naming convention for Cypress tests: `a-name.e2e.js`.
- That naming convention is not important. What *is* important is that the Cypress tests should not be named `something.test.js` or `something.spec.js`.  Doing so will cause Jest to run the tests and Jest will complain.
- If you *really want* to use the `(test|spec).jsx?` naming convention, then edit the testRegex in the Jest setup in package.json so Jest knows to exclude the Cypress tests.

## 🎓 Learning Gatsby

Looking for more guidance about automated testing with Gatsby? Helpful guides are available [in Gatsby's docs](https://next.gatsbyjs.org/docs/testing/).

See <a  href="//next.gatsbyjs.org/docs/gatsby-starters/">other community starters</a> here.

## 🛰 About David Sabine

- [@davesabine](//twitter.com/DaveSabine)
- [David @ GitHub](//github.com/DavidSabine)
- [David @ LinkedIn](//ca.linkedin.com/in/davidsabine)
