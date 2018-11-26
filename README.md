<h1 align="center">Gatsby Starter by David Sabine</h1>
<h2 align="center">Gatsby (v2) plus plugins for Google Analytics, Tag Manager, Manifest, SEO tools, Stripe, and automated-test tools preferred by the Gatsby core contributors: Jest &amp; Cypress.</h2>
 
Basically, this started with [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world), then I added:

- test tools _a la_ [the official testing guides](https://next.gatsbyjs.org/docs/testing/)
- PWA-related and SEO-related plugins to produce appropriate &lt;HEAD&gt; content and manifest, sitemap, and robots files
- emotion and typography plugins for styled components
- Stripe plugins to enable e-commerce features
- and `gatsby-plugin-create-client-paths` to isolate an area of the site for dynamic (non-static) React app
  
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

gatsby new my-gatsby-site https://github.com/DavidSabine/gatsby-starter

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

# or

yarn serve

```

4.  **Open the source code and start editing!**

After running `yarn develop` or `gatsby develop`, your site is now running at `http://localhost:8000`!

Open the `my-gatsby-site` directory in your code editor of choice and look for these files to read the tests:

- Any files in a folder called `__tests__`
- Any files called `*.test.js` or `*.spec.js`
- Any files in a folder called `cypress/integration`

Save your changes and the browser and test runners will update in real time!

5.  **Make it yours**

This starter uses some plugins which require an 'active' setup, such as for Google Analytics and Stripe.  So, I have used real API keys which you should replace with your own.  Specifically:

- `gatsby-plugin-google-analytics` is currently using my UA code. Replace the value of `trackingId` in `gatsby-config.js` with your own UA code. (Login to Google Analytics and find or make your own web property.)
- `gatsby-plugin-google-tagmanager` is currently using my own ID and Auth token.  Replace the values of `id`, `gtmAuth`, and `gtmPreview` with your own values. (Login to Google Tag Manager and find or make your own configuration.)
- `gatsby-source-stripe` is currently using a secretKey for my `dev` environment at Stripe.  Replace the values of `objects` and `secretKey` with your own.  (Login to Stripe and find or make your own account.)
- `gatsby-config.js` generally uses dummy values that I've made up.  Replace the values with your own.

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
