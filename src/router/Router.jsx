import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import PNF from "../pages/404";
import { checkLogin } from "../auth";
export default class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route
            exact
            path="/"
            render={() => (!checkLogin() ? <Login /> : <Navigate to="/home" />)}
          />
          <Route
            exact
            path="/home"
            render={() => (checkLogin() ? <Home /> : <Navigate to="/" />)}
          />
          <Route
            exact
            path="/dashboard"
            render={() => (checkLogin() ? <Dashboard /> : <Navigate to="/" />)}
          />
          <Route
            exact
            path="/logout"
            render={() => (checkLogin() ? <Logout /> : <Navigate to="/" />)}
          />
          <Route exact path="/*" component={PNF} />
        </Routes>
      </React.Fragment>
    );
  }
}
