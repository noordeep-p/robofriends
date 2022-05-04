import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./components/Card";
import Searchbox from "./components/Searchbox";
import ErrorBoundry from "./components/ErrorBoundry";
import "./index.css";

import { setSearch, requestRobots } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearch(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function App({ onRequestRobots, robots, searchField, onSearchChange }) {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="container">
      <Searchbox searchChange={onSearchChange} />
      <ErrorBoundry>
        {filteredRobots.map((robot) => {
          return (
            <Card
              key={robot.id}
              name={robot.name}
              username={robot.username}
              email={robot.email}
            />
          );
        })}
      </ErrorBoundry>
    </div>
  );
});
