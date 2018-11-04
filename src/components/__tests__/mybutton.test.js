import React from 'react'
import styled from 'react-emotion'
import renderer from 'react-test-renderer'

const MyButton = styled(`button`)`
  color: hotpink;
`

test(`MyButton renders correctly -- proving that react-emotion and jest-emotion are working`, () => {
  expect(
    renderer.create(<MyButton>This is hotpink.</MyButton>).toJSON()
  ).toMatchSnapshot()
})
