import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
// import Header from "./components/Header";
import Yearbook from "./pages/Yearbook"
import Login from "./pages/Login"
import Search from "./pages/Search"
import Create from "./pages/Create"
import Main from "./pages/Main"


function App() {
  return (
    <Router >
      <Nav />


      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/yearbook" component={Yearbook} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/create" component={Create} />
        {/* <Route exact path="/" component={Yearbook} /> */}
        {/* <Route exact path="/save" component={Saved} />
        <Route exact path="/search" component={Books} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}

export default App;

