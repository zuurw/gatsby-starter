const pageData = require(`../../test-config`).pages.fourOhFour

describe(`404 page`, () => {
	it(`has appropriate layout markup`, () => {
		cy.visit(pageData.path)
		cy.get(`header`).contains(`Page not found`)
		cy.get(`footer`).should(`be.not.null`)
	})
})
