describe("sitemap document", () => {
	it("exists", () => {
		cy.request(`/sitemap.xml`).should((xhr) => {
			expect(xhr.status).to.eq(200)
			expect(xhr.headers).to.have.property('content-type', 'text/xml; charset=UTF-8')
		})
	})
})
