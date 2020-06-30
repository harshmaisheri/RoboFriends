import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let Wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  Wrapper = shallow(<MainPage {...mockProps} />);
});

it("Render MainPage", () => {
  expect(Wrapper.debug()).toMatchSnapshot();
});

it("Filter Robots Correctly", () => {
  expect(Wrapper.instance().filteredRobots([])).toEqual([]);
});

it("Filter Robots Correctly", () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "johndoe@gmail.com",
      },
    ],
    searchField: "n",
    isPending: false,
  };
  const Wrapper2 = shallow(<MainPage {...mockProps} />);
  expect(Wrapper2.instance().filteredRobots()).toEqual([
    {
      id: 3,
      name: "John",
      email: "johndoe@gmail.com",
    },
  ]);
});
