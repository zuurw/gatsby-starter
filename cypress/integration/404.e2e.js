describe("404 page", () => {
	it("has appropriate layout markup", () => {
		cy.visit(`/404/`)
		cy.get(`header`).contains("Page not found")
		cy.get(`footer`).should(`be.not.null`)
	})
})
