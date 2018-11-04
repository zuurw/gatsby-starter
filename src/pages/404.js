import React from 'react'
import Layout from '../components/layout.js'
import HtmlHead from '../components/htmlhead'
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
		<footer />
	</Layout>
)

export default FourOhFourMarkup
