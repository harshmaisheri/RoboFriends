import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

const Wrapper = shallow(<SearchBox />);

it("Expect to render SearchBox", () => {
  expect(Wrapper.debug()).toMatchSnapshot();
});
