const metaData = require(`../../gatsby-config`).siteMetadata

describe("404 page", () => {
	it("exists", () => {
		cy.visit(`/404`, {failOnStatusCode: false })
		.then((window) => {
			const currentHref = window.location.href
			cy.get("body").contains("Page not found")
		})
	})
	it(`uses helmet for <head>`, () => {
		cy.get(`html`).should(`have.attr`, `lang`, metaData.lang)
		cy.get(`html title`).should(`have.text`, metaData.defaultTitle)
		cy.get(`html meta[itemprop='description']`).should(`have.attr`, `content`, metaData.description)
		cy.get(`html meta[itemprop='image']`).should(`have.attr`, `content`, metaData.icon)
		cy.get(`html meta[itemprop='name']`).should(`have.attr`, `content`, metaData.defaultTitle)
		cy.get(`html meta[name='description']`).should(`have.attr`, `content`, metaData.description)
		cy.get(`html meta[name='twitter:card']`).should(`have.attr`, `content`, `summary_large_image`)
		cy.get(`html meta[name='twitter:creator']`).should(`have.attr`, `content`, metaData.twitterCreator)
		cy.get(`html meta[name='twitter:description']`).should(`have.attr`, `content`, metaData.description)
		cy.get(`html meta[name='twitter:image']`).should(`have.attr`, `content`, metaData.icon)
		cy.get(`html meta[name='twitter:image:alt']`).should(`have.attr`, `content`, metaData.defaultTitle)
		cy.get(`html meta[name='twitter:title']`).should(`have.attr`, `content`, metaData.defaultTitle)
		cy.get(`html meta[property='og:description']`).should(`have.attr`, `content`, metaData.description)
		cy.get(`html meta[property='og:image']`).should(`have.attr`, `content`, metaData.icon)
		cy.get(`html meta[property='og:locale']`).should(`have.attr`, `content`, metaData.locale)
		cy.get(`html meta[property='og:title']`).should(`have.attr`, `content`, metaData.defaultTitle)
		cy.get(`html meta[property='og:type']`).should(`have.attr`, `content`, `website`)
		cy.get(`html meta[property='og:url']`).should(`have.attr`, `content`, metaData.siteUrl)
	})
	it.skip(`uses helmet titleTemplate in <head>`, () => {
		//todo
		cy.get(`html title`).should(`have.text`, `Error 404 — Hello World`)
	})
})
