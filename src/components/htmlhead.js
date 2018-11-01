import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

export const HelmetMarkup = ({data}) => {
	return (
		<Helmet>
			<html lang={data.site.siteMetadata.lang} />
			<meta itemprop='description' content={data.site.siteMetadata.description} />
			<meta itemprop='image' content={data.site.siteMetadata.icon} />
			<meta itemprop='name' content={data.site.siteMetadata.defaultTitle} />
			<meta name='description' content={data.site.siteMetadata.description} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:creator' content={data.site.siteMetadata.twitterCreator} />
			<meta name='twitter:description' content={data.site.siteMetadata.description} />
			<meta name='twitter:image' content={data.site.siteMetadata.icon} />
			<meta name='twitter:image:alt' content={data.site.siteMetadata.defaultTitle} />
			<meta name='twitter:title' content={data.site.siteMetadata.defaultTitle} />
			<meta property='og:description' content={data.site.siteMetadata.description} />
			<meta property='og:image' content={data.site.siteMetadata.icon} />
			<meta property='og:locale' content={data.site.siteMetadata.locale} />
			<meta property='og:title' content={data.site.siteMetadata.defaultTitle} />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={data.site.siteMetadata.siteUrl} />
			<title>{data.site.siteMetadata.defaultTitle}</title>
		</Helmet>
	)
}

export const HtmlHead = props => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						defaultTitle
						description
						lang
						locale
						icon
						siteUrl
						twitterCreator
					}
				}
			}
		`}
		render={data => <HelmetMarkup {...props} data={data} />}
		/>
)

export default HtmlHead
