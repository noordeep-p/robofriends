import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./components/Card";
import Searchbox from "./components/Searchbox";
import ErrorBoundry from "./components/ErrorBoundry";
import "./index.css";

import { setSearch } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearch(event.target.value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function App(props) {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  });

  return (
    <div className="container">
      <Searchbox searchChange={props.onSearchChange} />
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
