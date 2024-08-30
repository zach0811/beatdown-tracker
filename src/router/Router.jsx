import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import { Login } from "../user/Login";
// import Logout from "../pages/logout/Logout";
import PNF from "../pages/404";
import { checkLogin } from "../auth";
import { QSheet } from "../Components/QSheet/QSheet";
export default class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route
            exact
            path="/home"
            render={() => (!checkLogin() ? <Login /> : <Navigate to="/home" />)}
          />
          <Route
            exact
            path="/dashboard"
            render={() =>
              checkLogin() ? <Dashboard /> : <Navigate to="/dashboard" />
            }
          />
          <Route
            exact
            path="/qsheet"
            render={() =>
              checkLogin() ? <QSheet /> : <Navigate to="/qsheet" />
            }
          />
          <Route
            exact
            path="/login"
            render={() => (checkLogin() ? <Login /> : <Navigate to="/login" />)}
          />
          <Route exact path="/*" component={PNF} />
        </Routes>
      </React.Fragment>
    );
  }
}
