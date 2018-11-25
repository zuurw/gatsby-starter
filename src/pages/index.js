import Bio from '../components/bio'
import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout'
import React from 'react'
import AllSitePages from '../components/allsitepages';

export const IndexMarkup = props => (
	<Layout>
		<HtmlHead title='Home' />
		<header>
			<h1>Hello world!</h1>
		</header>
		<main>
			<Bio />
			<AllSitePages />
		</main>
	</Layout>
)

export default IndexMarkup
