<h1 align="center">Gatsby 'Hello World' Starter <em>plus</em> Jest &amp; Cypress</h1>
<h2>Vanilla Gatsby (v2) Ready for TDD and Automated End-to-End Testing</h2>
 
<div  align="center">
<img style="width:15%;" alt="Gatsby Logo"  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTA2IDI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDYgMjgiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiNmZmZ9LnN0MXtmaWxsOiM2Mzl9PC9zdHlsZT48Zz48cGF0aCBkPSJNNjIuOSwxMmgyLjh2MTBoLTIuOHYtMS4zYy0xLDEuNS0yLjMsMS42LTMuMSwxLjZjLTMuMSwwLTUuMS0yLjQtNS4xLTUuM2MwLTMsMi01LjMsNC45LTUuM2MwLjgsMCwyLjMsMC4xLDMuMiwxLjZWMTJ6IE01Ny43LDE3YzAsMS42LDEuMSwyLjgsMi44LDIuOGMxLjYsMCwyLjgtMS4yLDIuOC0yLjhjMC0xLjYtMS4xLTIuOC0yLjgtMi44QzU4LjksMTQuMiw1Ny43LDE1LjQsNTcuNywxN3oiLz48cGF0aCBkPSJNNzEuMiwxNC40VjIyaC0yLjh2LTcuNmgtMS4xVjEyaDEuMVY4LjZoMi44VjEyaDEuOXYyLjRINzEuMnoiLz48cGF0aCBkPSJNNzkuNywxNC40Yy0wLjctMC42LTEuMy0wLjctMS42LTAuN2MtMC43LDAtMS4xLDAuMy0xLjEsMC44YzAsMC4zLDAuMSwwLjYsMC45LDAuOWwwLjcsMC4yYzAuOCwwLjMsMiwwLjYsMi41LDEuNCBjMC4zLDAuNCwwLjUsMSwwLjUsMS43YzAsMC45LTAuMywxLjgtMS4xLDIuNWMtMC44LDAuNy0xLjgsMS4xLTMsMS4xYy0yLjEsMC0zLjItMS0zLjktMS43bDEuNS0xLjdjMC42LDAuNiwxLjQsMS4yLDIuMiwxLjIgYzAuOCwwLDEuNC0wLjQsMS40LTEuMWMwLTAuNi0wLjUtMC45LTAuOS0xbC0wLjYtMC4yYy0wLjctMC4zLTEuNS0wLjYtMi4xLTEuMmMtMC41LTAuNS0wLjgtMS4xLTAuOC0xLjljMC0xLDAuNS0xLjgsMS0yLjMgYzAuOC0wLjYsMS44LTAuNywyLjYtMC43YzAuNywwLDEuOSwwLjEsMy4yLDEuMUw3OS43LDE0LjR6Ii8+PHBhdGggZD0iTTg1LjgsMTMuM2MxLTEuNCwyLjQtMS42LDMuMi0xLjZjMi45LDAsNC45LDIuMyw0LjksNS4zYzAsMy0yLDUuMy01LDUuM2MtMC42LDAtMi4xLTAuMS0zLjItMS42VjIySDgzVjUuMmgyLjhWMTMuM3ogTTg1LjUsMTdjMCwxLjYsMS4xLDIuOCwyLjgsMi44YzEuNiwwLDIuOC0xLjIsMi44LTIuOGMwLTEuNi0xLjEtMi44LTIuOC0yLjhDODYuNiwxNC4yLDg1LjUsMTUuNCw4NS41LDE3eiIvPjxwYXRoIGQ9Ik05OC41LDIwLjVMOTMuNywxMkg5N2wzLjEsNS43bDIuOC01LjdoMy4ybC04LDE1LjNoLTMuMkw5OC41LDIwLjV6Ii8+PHBhdGggZD0iTTU0LDEzLjdoLTIuOGMwLDAtNC4yLDAtNC4yLDB2Mi44aDMuN2MtMC42LDEuOS0yLDMuMi00LjYsMy4yYy0yLjksMC01LTIuNC01LTUuM1M0My4xLDksNDYsOWMxLjYsMCwzLjIsMC44LDQuMiwyLjEgbDIuMy0xLjVDNTEsNy41LDQ4LjYsNi4zLDQ2LDYuM2MtNC40LDAtOCwzLjYtOCw4LjFzMy40LDguMSw4LDguMXM4LTMuNiw4LTguMUM1NC4xLDE0LjEsNTQsMTMuOSw1NCwxMy43eiIvPjwvZz48Zz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUsMTRoLTd2Mmg0LjhjLTAuNywzLTIuOSw1LjUtNS44LDYuNUw1LjUsMTFjMS4yLTMuNSw0LjYtNiw4LjUtNmMzLDAsNS43LDEuNSw3LjQsMy44bDEuNS0xLjMgQzIwLjksNC44LDE3LjcsMywxNCwzQzguOCwzLDQuNCw2LjcsMy4zLDExLjZsMTMuMiwxMy4yQzIxLjMsMjMuNiwyNSwxOS4yLDI1LDE0eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zLDE0LjFjMCwyLjgsMS4xLDUuNSwzLjIsNy42YzIuMSwyLjEsNC45LDMuMiw3LjYsMy4yTDMsMTQuMXoiLz48L2c+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LDBDNi4zLDAsMCw2LjMsMCwxNHM2LjMsMTQsMTQsMTRzMTQtNi4zLDE0LTE0UzIxLjcsMCwxNCwweiBNNi4yLDIxLjhjLTIuMS0yLjEtMy4yLTQuOS0zLjItNy42TDEzLjksMjUgQzExLjEsMjQuOSw4LjMsMjMuOSw2LjIsMjEuOHogTTE2LjQsMjQuN0wzLjMsMTEuNkM0LjQsNi43LDguOCwzLDE0LDNjMy43LDAsNi45LDEuOCw4LjksNC41bC0xLjUsMS4zQzE5LjcsNi41LDE3LDUsMTQsNSBjLTMuOSwwLTcuMiwyLjUtOC41LDZMMTcsMjIuNWMyLjktMSw1LjEtMy41LDUuOC02LjVIMTh2LTJoN0MyNSwxOS4yLDIxLjMsMjMuNiwxNi40LDI0Ljd6Ii8+PC9nPjwvc3ZnPg==">
See <a  href="//next.gatsbyjs.org/docs/gatsby-starters/">all community starters</a> here.
</div>

Kick off your project with this boilerplate. This barebones starter ships with the main Gatsby files and the basic TDD/automated-test tools preferred by the Gatsby core contributors: Jest &amp; Cypress

Basically, This starter combines [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) with [the official testing guides](https://next.gatsbyjs.org/docs/testing/). The result is a vanilla version of Gatsby ready for TDD and automated end-to-end testing.
  

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

gatsby new high-quality-site https://github.com/davidsabine/gatsby-starter-hello-world-for-tdd

```

3.  **Start developing.**

Navigate into your new site’s directory and start it up.

```sh

cd high-quality-site

npm install


# to run jest tests

yarn test


# to run jest tests for every change to source code

yarn test:watch


# or to run end-to-end tests with Cypress

yarn test:e2e
# Note: tests will run in Cypress default runner and
# will update as you edit code. It's awesome.


# or, as with other starters, you can...

gatsby develop

```

4.  **Open the source code and start editing!**

Your site is now running at `http://localhost:8000`!

Open the `high-quality-site` directory in your code editor of choice and look for these files to read the tests:

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


## 🛰 About David Sabine

- [@davesabine](//twitter.com/DaveSabine)
- [David @ GitHub](//github.com/DavidSabine)
- [David @ LinkedIn](//ca.linkedin.com/in/davidsabine)
