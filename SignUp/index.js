import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "./App";

import SignUpPage from './App';

class SignUpContainer extends Component {
    handleSignUp = async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
          const user = await app.auth().createUserWithEmailAndPassword(email.value, password.value);
          this.props.history.push("/");
        } catch (error) {
          alert(error);
        }
    };
}
