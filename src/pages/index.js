import React from 'react'
import Bio from '../components/bio'
import Footer from '../components/footer'
import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout'

export const IndexMarkup = props => (
	<Layout>
		<HtmlHead title="Home" />
		<header>
			<h1>Hello world!</h1>
		</header>
		<Bio />
		<Footer />
	</Layout>
)

export default IndexMarkup
