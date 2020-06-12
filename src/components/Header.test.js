import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const Wrapper = shallow(<Header />);

it("Expect to render card component", () => {
  expect(Wrapper.debug()).toMatchSnapshot();
});
