import React, { Component } from 'react';
import './css/Register.css';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            firstName:"",
            lastName: "",
            username: "",
            ebayUserName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(){

    }
    
  render() {
    return (
      <div className="register">
        <h3>Register</h3>
        <form className="registerForm" onSubmit={this.handleSubmit}>
            <label>First Name:</label>
            <input type="firstName" id="firstName" onChange={this.handleChange} />
            <label>Last Name:</label>
            <input type="lastName" id="lastName" onChange={this.handleChange} />
            <label>Username:</label>
            <input type="username" id="username" onChange={this.handleChange} />
            <label>Ebay Username:</label>
            <input type="ebayUserName" id="ebayUserName" onChange={this.handleChange} />
            <label>Email:</label>
            <input type="email" id="email" onChange={this.handleChange} />
            <label>Password:</label>
            <input type="password" id="password" onChange={this.handleChange} />
            <label>Confirm Password:</label>
            <input type="passwordConfirm" id="passwordConfirm" onChange={this.handleChange} />
            <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    )
  }
}
