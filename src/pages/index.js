import React from 'react'
import Bio from '../components/bio'
import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout'

export const BodyMarkup = ({message}) => (
	<article>
		<h1>{message}</h1>
		<Bio />
	</article>
)

export const IndexMarkup = props => (
<Layout>
	<HtmlHead />
	<BodyMarkup message='Hello world!' />
</Layout>	
)

export default IndexMarkup
