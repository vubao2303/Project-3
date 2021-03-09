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
import Student from "./pages/StudentPage"
import Class from "./pages/Class"
import Display from "./pages/Display";

function App() {
  return (
    <Router >
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/display" component={Display} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/class" component={Class} />
        <Route path="/yearbook" component={Yearbook} />
        <Route path="/display" component={Display} />
      </Switch>
    </Router>
  );
}

export default App;

