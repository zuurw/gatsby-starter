import AppDescription from '../appdescription'
import React from 'react'
import renderer from 'react-test-renderer'
import { render } from 'react-testing-library'

describe(`AppDescription`, () =>
  it(`renders correctly -- according to react-test-renderer`, () => {
    const tree = renderer.create(<AppDescription />).toJSON()
    expect(tree).toMatchSnapshot()
  }),
  it(`renders correctly -- according to react-testing-library`, () => {
    const { getByTestId } = render(<AppDescription />)
    expect(getByTestId(`app-description`)).toHaveTextContent(`This is a Gatsbyjs starter that`)
  })
)
