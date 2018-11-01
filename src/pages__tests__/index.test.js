import React from 'react'
import renderer from 'react-test-renderer'
import {BodyMarkup as HomePage} from '../pages/index'

describe(`HomePage`, () =>
  it(`renders correctly`, () => {
    const tree = renderer.create(<HomePage message='Hello world!' />).toJSON()
    expect(tree).toMatchSnapshot()
  }),
)
