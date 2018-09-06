describe("Homepage at baseUrl", () => {
	it("exists", () => {
		cy.visit("/")
		cy.get("body").contains("Hello world!")
		cy.url().should('include',"localhost")
	})
})