const metaData = require(`../../gatsby-config`).siteMetadata

describe("Homepage at baseUrl", () => {
	it("has appropriate layout markup", () => {
		cy.visit("/")
		cy.get(`header`).contains("Hello world!")
		cy.get(`footer`).should(`be.not.null`)
		cy.url().should('include',"localhost")
	})
})
