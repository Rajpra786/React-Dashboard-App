/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: Main File to manage routes and views                         *
 ********************************************************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/pe-icon-7-stroke.css";

import MainLayout from "layouts/Main.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <MainLayout {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
