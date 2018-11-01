describe("404 page", () => {
	it("exists", () => {
		cy.visit(`/non-existent-page`, {failOnStatusCode: false })
		.then((window) => {
			const currentHref = window.location.href
			if(currentHref.indexOf(`:8000`) === -1) {
				//this doesn't seem to work due to a 2nd XHR (and cross-origin) request that I don't understand
				cy.get("body").contains("Page not found")
			} else {
				cy.get("body").contains("Gatsby.js development 404 page")
			}
		})
	})
})
