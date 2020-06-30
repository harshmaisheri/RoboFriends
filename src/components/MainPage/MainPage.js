import React, { Component } from "react";

import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundry from "../Errors/ErrorBoundry";
import Header from "../Header/Header";

import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { robots, onSearchChange, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={this.filteredRobots(robots)} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
