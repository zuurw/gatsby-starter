describe("robots document", () => {
	it("exists", () => {
		cy.request(`/robots.txt`).should((xhr) => {
			expect(xhr.status).to.eq(200)
			expect(xhr.headers).to.have.property('content-type', 'text/plain; charset=UTF-8')
			expect(xhr.body).to.contain(`User-agent: *`)
		})
	})
})
