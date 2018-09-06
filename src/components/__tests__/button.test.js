import React from 'react'
import styled from 'react-emotion'
import renderer from 'react-test-renderer'

const Button = styled.div`
  color: hotpink;
`

test(`Button renders correctly -- proving that react-emotion and jest-emotion are working`, () => {
  expect(
    renderer.create(<Button>This is hotpink.</Button>).toJSON()
  ).toMatchSnapshot()
})
