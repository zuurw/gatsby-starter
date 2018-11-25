import React from 'react'

class AppDescription extends React.Component {
	render() {
		return (
			<section>
				<p data-testid="app-description">This is a Gatsbyjs starter that ships with boilerplate Gatsby and a small collection of plugins to start a PWA with Google Analytics, Tag Manager, Manifest, SEO tools, Stripe for product listings and checkout, plus the basic TDD/automated-test tools preferred by the Gatsby core contributors: Jest &amp; Cypress.</p>
				<p>A demo of this starter can be found at <a href="//gatsby-starter.davesabine.com">gatsby-starter.davesabine.com</a> and the full source code is at <a href="//github.com/DavidSabine/gatsby-starter">github.com/DavidSabine/gatsby-starter</a>.</p>
			</section>
		)
	}
}

export default AppDescription
