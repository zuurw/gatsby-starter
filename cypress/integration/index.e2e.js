describe("Homepage at baseUrl", () => {
	it("exists", () => {
		cy.visit("/")
		cy.get("body").contains("Hello world!")
		cy.url().should('include',"localhost")
	})
	it('uses gatsby-plugin-google-analytics', () => {
		const uacode = `UA-125425021-1`
		cy.visit(`/`)
		.then((window) => {
			const currentHref = window.location.href
			const headHtml = window.document.head.innerHTML
			if(currentHref.indexOf(`:8000`) === -1) {
				assert.notEqual(headHtml.indexOf(uacode),-1,`in production`)
			} else {
				assert.equal(headHtml.indexOf(uacode),-1,`not in development`)
			}
		})
	})
})
