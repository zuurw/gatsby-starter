const metaData = require(`../../gatsby-config`).siteMetadata
const pageData = require(`../../nav-config`).pages.home

describe(`Homepage at baseUrl: `+ pageData.path, () => {
	it(`has appropriate layout markup`, () => {
		cy.visit(pageData.path)
		cy.get(`header`).contains(`Hello world!`)
		cy.get(`footer`).should(`be.not.null`)
		cy.url().should('include',`localhost`)
	})
})
