describe("typography.js", () => {
	it("is used in index page", () => {
		cy.request(`/`)
		.should((xhr) => {
			expect(xhr.body).to.contain(`typography.js`)
		})
	})
	it("is used in 404 error page", () => {
		cy.request(`/404/`)
		.should((xhr) => {
			expect(xhr.body).to.contain(`typography.js`)
		})
	})
})
