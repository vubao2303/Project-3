import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
// import Header from "./components/Header";
import Yearbook from "./pages/Yearbook"

function App() {
  return (
    <Router >
      <Nav />


      <Switch>
        <Route exact path="/" component={Yearbook} />
        {/* <Route exact path="/save" component={Saved} />
        <Route exact path="/search" component={Books} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}

export default App;

