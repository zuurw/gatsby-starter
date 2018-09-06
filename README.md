# gatsby-my-hello-world

Gatsby Starter with the bare essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site.  And by bare essentials, I mean from a developers perspective, this starter includes the test and lint configuration commonly used by Gatsby community.

- Jest
- Cypress
- and Eslint configuration (for your IDE, I haven't yet included the necessary modules to run eslint within yarn or npm)

1. After cloning the repo, run in a terminal: `npm install`
2. Wait.  (Cypress will take a few minutes.)

## Running in development

1. In a terminal: `gatsby develop`
2. Then in your browser: `http://localhost:8000`
3. And graphql at: `http://localhost:8000/___graphql`


## About tests in this starter

### Jest is used for unit and component tests

1. In a terminal: `yarn test`
2. Enjoy!

Will run all tests found in:
- .js or .jsx files in any folder called "__tests__"
- or any file in any folder ending with either "test.js", "test.jsx", "spec.js", or "spec.jsx"

### Cypress is used for end-to-end tests

1. In a terminal: `yarn test:e2e`
2. The first time it runs, Cypress will perform some setup -- on Windows you will be prompted to adjust your firefox to allow the network activity...so allow it.
3. Enjoy!

Will run all tests found in the `/cypress/integration` folder.

> I have used a naming convention: `a-name.e2e.js`
> That naming convention isn't important. What *is* important is that these tests are not called `something.test.js` or `something.spec.js` — doing so will cause Jest to run the tests and Jest will complain.
> If you *really want* to use the `(test|spec).jsx?` naming convention, then edit the testRegex in the Jest setup in package.json.
