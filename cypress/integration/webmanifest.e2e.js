describe("manifest document", () => {
	it("exists", () => {
		cy.request(`/manifest.webmanifest`).should((xhr) => {
			expect(xhr.status).to.eq(200)
			expect(xhr.headers).to.have.property('content-type', 'application/manifest+json')
		})
	})
})
