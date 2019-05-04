import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            email: '',
            password: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //credentials must be set to put cookies
        const requestOptions = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({email:this.state.email, password:this.state.password})
        }
        fetch('http://localhost:4000/user/login', requestOptions)
        .then(res => res.json())
        .then(user=>{
            console.log(user);
            this.props.history.push('/info');
        })
        .catch(err => console.log(err));
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="login">
                    <h5>Sign In</h5>
                    <div className="inputField">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="inputField">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="inputField">
                        <button type="submit" value="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;