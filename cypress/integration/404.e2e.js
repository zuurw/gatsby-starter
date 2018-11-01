describe("404 page", () => {
	it("exists", () => {
		cy.visit("/non-existent-page")
		cy.get("body").contains("Gatsby.js development 404 page")
	})
})
