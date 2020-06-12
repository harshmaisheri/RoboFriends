import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

const mockRobots = [
  {
    id: 1,
    name: "John Snow",
    username: "I Know Nothing",
    email: "johnsnow@got.com",
  },
];
const Wrapper = shallow(<CardList robots={mockRobots} />);

it("Expect to Render Card List", (done) => {
  expect(Wrapper.debug()).toMatchSnapshot();
  done();
});
