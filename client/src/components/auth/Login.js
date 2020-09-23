import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { connect } from 'react-redux';

import {login} from '../../redux/actions/authActions';
import {clearErrors} from '../../redux/actions/errorActions'

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: null,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    // Create user object
    const user = {
      email,
      password,
    };

    //   Attempt to register
    this.props.login(user);

    

    const { msg } = this.props.error.msg;
    this.setState({ msg });
  };
  
  componentDidUpdate = (prevProps) => {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //   Check for login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
        setTimeout(() => {
          this.props.clearErrors();
        }, 3000);
      } else {
        this.setState({ msg: null });
      }
    };

    if(this.props.user) {
      this.props.history.push('/')
    }
  };

  render() {
    return (
      <div className="vertical-center ml-3">
        <Form onSubmit={this.onSubmit}>
          <h1 className="text-center mb-3">
            {" "}
            Welcome to <strong> My TodoList</strong>
          </h1>
          <FormGroup>
          {this.state.msg ? (
            <Alert color="danger"> {this.state.msg} </Alert>
          ) : null}
            <Label for="email">Email :</Label>
            <Input
              style={{color:'white'}}
              onChange={this.onChange}
              classname="mb-3"
              type="email"
              name="email"
              id="email"
              placeholder="insert your email here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password :</Label>
            <Input
              style={{color:'white'}}
              onChange={this.onChange}
              classname="mb-3"
              type="password"
              name="password"
              id="password"
              placeholder="insert your password here"
            />
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block mb-3">Login</Button>
          <div classname="mb-3">
            {" "}
            Or simply continue with your Facebook account{" "}
          </div>
          <FacebookLoginButton />
          <span> Not a member Yet ? </span>{" "}
          <Link to="/signin"> Sign in here </Link>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    error : state.error,
    user : state.auth.user
})

export default connect(mapStateToProps, {login, clearErrors})(Login);
