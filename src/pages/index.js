import Bio from '../components/bio'
import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout'
import React from 'react'

export const IndexMarkup = props => (
	<Layout>
		<HtmlHead title="Home" />
		<header>
			<h1>Hello world!</h1>
		</header>
		<main>
			<Bio />
		</main>
	</Layout>
)

export default IndexMarkup
