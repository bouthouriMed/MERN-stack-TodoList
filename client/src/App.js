import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Signin from "./components/auth/Signin";
import { connect } from "react-redux";


import "./App.css";
import Home from "./components/Home";
import PrivateRoute from "../src/components/PrivateRoute";
import { loadUser } from "./redux/actions/authActions";

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { loadUser })(App);
