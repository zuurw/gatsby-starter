import React from 'react'
import renderer from 'react-test-renderer'
import IndexMarkup from '../pages/index'

describe(`HomePage`, () =>
  it(`renders correctly`, () => {
    const tree = renderer.create(<IndexMarkup />).toJSON()
    expect(tree).toMatchSnapshot()
  }),
)
