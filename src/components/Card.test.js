import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("Expect to render card component", (done) => {
  const wrapper = shallow(<Card />);
  expect(wrapper.debug()).toMatchSnapshot();
  done();
});
