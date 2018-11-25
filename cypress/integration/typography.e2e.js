const pages = require(`../../nav-config`).pages

describe(`typography.js`, () => {
	for (const pageData in pages) {
		it(`is used in page: `+ pages[pageData].path, () => {
			cy.request(pages[pageData].path)
			.should((xhr) => {
				expect(xhr.body).to.contain(`typography.js`)
			})
		})
	}
})
