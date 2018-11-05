import React from 'react'
import Footer from '../components/footer'
import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout.js'
import { Link } from 'gatsby'

export const FourOhFourMarkup = props => (
	<Layout>
		<HtmlHead title="Ooops." />
		<header>
			<h1>Page not found</h1>
		</header>
		<main>
			<p>You might find what you're looking for at <Link to="/">the index page</Link>.</p>
		</main>
	</Layout>
)

export default FourOhFourMarkup
