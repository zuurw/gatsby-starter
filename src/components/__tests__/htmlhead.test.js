import React from 'react'
import renderer from 'react-test-renderer'
import { HelmetMarkup }  from '../htmlhead'
const metaData = require(`../../../gatsby-config`).siteMetadata

describe(`HelmetMarkup`, () =>
  it(`renders correctly`, () => {
    const data = {
      site: {
        siteMetadata: {
          defaultTitle: metaData.defaultTitle,
          description: metaData.description,
          lang: metaData.lang,
          locale: metaData.locale,
          icon: metaData.icon,
          siteUrl: metaData.siteUrl,
          titleTemplate: metaData.titleTemplate,
          twitterCreator: metaData.twitterCreator  
        }
      }
    }
    const tree = renderer.create(<HelmetMarkup data={data} />).toJSON()
      expect(tree).toMatchSnapshot()
  })
)
