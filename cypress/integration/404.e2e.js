describe("404 page", () => {
	it("exists", () => {
		cy.visit(`/404/`, {failOnStatusCode: false })
		.then((window) => {
			const currentHref = window.location.href
			cy.get("body").contains("Page not found")
		})
	})
})
