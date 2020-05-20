/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: Main activity                                            *
 ********************************************************************************************************/


import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "views/Dashboard.jsx";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";

import routes from "routes.js";
import image from "assets/img/sidebar.jpg";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "black",
      hasImage: true,
    };
  }

  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/main" && prop.path === "/dashboard") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <Dashboard data={this.state.color} />}
            key={key}
          />
        );
      } else if (prop.layout === "/main" && prop.path === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
	
  componentDidMount() {

  }
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          image={this.state.image}
          hasImage={this.state.hasImage}
        />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar brandText="Rajendra" />
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    );
  }
}

export default Main;
