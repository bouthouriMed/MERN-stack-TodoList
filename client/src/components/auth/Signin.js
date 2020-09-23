import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import { connect } from "react-redux";
import { register, loadUser } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

class Signin extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    msg: null,
    isAuthenticated: null,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = this.state;

    // Create user object
    const newUser = {
      username,
      email,
      password,
    };

    //   Attempt to register
    this.props.register(newUser);

   

    const { msg } = this.props.error.msg;
    this.setState({ msg });
  };

  componentDidUpdate = (prevProps) => {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //   Check for register error
      if (error.id === "REGISTER_FAIL") {
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
      <div className="vertical-center">
        <Form onSubmit={this.onSubmit}>
          <h1 className="text-center mb-3">
            Welcome to <strong> My Shopping List</strong>
          </h1>
          {this.state.msg ? (
            <Alert color="danger"> {this.state.msg} </Alert>
          ) : null}
          {this.props.isAuthenticated === true ? (
            <Alert color="success">
              {" "}
              {`Welcome ${this.state.username}, you're successfully registered`}{" "}
            </Alert>
          ) : null}
          <FormGroup>
            <Label for="username">Username :</Label>
            <Input
              style={{color:'white'}}
              onChange={this.onChange}
              className="mb-3"
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </FormGroup>
          <FormGroup>
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
          <Button className="btn-lg btn-dark btn-block mb-3">Sign in</Button>
          <span> Already a member ? </span>
          <Link to="/login"> Login in here </Link>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  user: state.auth.user
});

export default connect(mapStateToProps, { register, clearErrors, loadUser })(Signin);
