import * as actions from "./actions";
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING } from "./constants";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

test("should create an action to search robots", () => {
  const text = "wooo";
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

describe("Handle Robots Request API", () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();

  test("handle pending request API", () => {
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };

    expect(action[0]).toEqual(expectedAction);
  });
});
