const metaData = require(`../../gatsby-config`).siteMetadata

describe("Homepage at baseUrl", () => {
	it("exists", () => {
		cy.visit("/")
		cy.get("body").contains("Hello world!")
		cy.url().should('include',"localhost")
	})
	it(`uses helmet for <head>`, () => {
		const pageTitle = `Home`
		cy.get(`html`).should(`have.attr`, `lang`, metaData.lang)
		cy.get(`html title`).should(`have.text`, metaData.titleTemplate.replace(`%s`, pageTitle))
		cy.get(`html meta[itemprop='description']`).should(`have.attr`, `content`, metaData.description)
		cy.get(`html meta[itemprop='image']`).should(`have.attr`, `content`, metaData.icon)
		cy.get(`html meta[itemprop='name']`).should(`have.attr`, `content`, pageTitle)
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
	it('uses gatsby-plugin-google-tagmanager', () => {
		const gtmcode = `GTM-W9DNBKC`
		cy.visit(`/`)
		.then((window) => {
			const currentHref = window.location.href
			const headHtml = window.document.head.innerHTML
			assert.notEqual(headHtml.indexOf(gtmcode),-1)
		})
	})
})
