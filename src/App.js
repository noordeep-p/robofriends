import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Searchbox from "./components/Searchbox";

import "./index.css";
import ErrorBoundry from "./components/ErrorBoundry";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
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
}
