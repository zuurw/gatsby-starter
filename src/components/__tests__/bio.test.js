import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library"
import Bio from "../bio";

describe("Bio", () =>
  it("renders correctly -- according to react-test-renderer", () => {
    const tree = renderer.create(<Bio />).toJSON();
    expect(tree).toMatchSnapshot();
  }),
  it("renders correctly -- according to react-testing-library", () => {
    const { getByTestId } = render(<Bio />);
    expect(getByTestId("my-bio")).toHaveTextContent("My Bio!");
  })
)
