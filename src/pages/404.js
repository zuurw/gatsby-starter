import React from 'react'
import Layout from '../components/layout.js'
import HtmlHead from '../components/htmlhead'
import { Link } from 'gatsby'

export const BodyMarkup = () => (
	<article>
		<h1>Page not found</h1>
		<p>You might find what you're looking for at <Link to="/">the index page</Link>.</p>
	</article>
)

export const FourOhFourMarkup = props => (
	<Layout>
		<HtmlHead title="Ooops." />
		<BodyMarkup />
	</Layout>
)

export default FourOhFourMarkup
