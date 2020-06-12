import * as reducers from "./reducers";
import { setSearchField } from "./actions";
import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

describe("Search Robot", () => {
  const initialSearch = {
    searchField: "",
  };

  test("Should Return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialSearch);
  });

  test("Should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initialSearch, setSearchField("abc"))
    ).toEqual({ searchField: "abc" });
  });
});

describe("Request Robots", () => {
  const initialRobot = {
    robots: [],
    isPending: false,
  };

  const mockRobots = {
    robots: [
      {
        id: 1233,
        name: "Jack Smith",
        email: "JacktheHammerSmith@gmail.com",
      },
    ],
    isPending: false,
  };

  test("Should Return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialRobot);
  });

  test("Request in the pending state", () => {
    expect(
      reducers.requestRobots(initialRobot, { type: REQUEST_ROBOTS_PENDING })
    ).toEqual({ robots: [], isPending: true });
  });

  test("Request in the success state", () => {
    expect(
      reducers.requestRobots(initialRobot, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1233,
            name: "Jack Smith",
            email: "JacktheHammerSmith@gmail.com",
          },
        ],
      })
    ).toEqual(mockRobots);
  });

  test("Request in the Failed state", () => {
    expect(
      reducers.requestRobots(initialRobot, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "NOOOOOOO!!!!",
      })
    ).toEqual({ robots: [], error: "NOOOOOOO!!!!", isPending: false });
  });
});
