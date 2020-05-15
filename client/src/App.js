import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./component/Navigation";
import UsersList from "./component/UsersList";

import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={UsersList} />
        <Route path="/edit/:id" component={UsersList} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
