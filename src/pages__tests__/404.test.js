import React from 'react'
import renderer from 'react-test-renderer'
import FourOhFour from '../pages/404'

describe(`404`, () =>
  it(`renders correctly`, () => {
    const tree = renderer.create(<FourOhFour />).toJSON()
    expect(tree).toMatchSnapshot()
  }),
)
