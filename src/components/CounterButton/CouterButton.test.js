import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

const mockColor = "red";
const Wrapper = shallow(<CounterButton color={mockColor} />);

it("Correctly increments the counter number", (done) => {
  Wrapper.find('[id="counter"]').simulate("click");
  expect(Wrapper.state()).toEqual({ count: 1 });
  Wrapper.find('[id="counter"]').simulate("click");
  expect(Wrapper.state()).toEqual({ count: 2 });
  done();
});
