import React from "react";
import "./App.css";
import ExperiencesList from "./components/ExperiencesList";
import AddExperience from "./components/AddExperience";
import ExperienceDetails from "./components/ExperienceDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <AddExperience />
        </Route>
        <Route path="/:id">
          <ExperienceDetails />
        </Route>
        <Route path="/">
          <ExperiencesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
