import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.checkLoggedIn = this.checkLoggedIn.bind(this);
    }

    checkLoggedIn(){
        const requestOptions = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
        fetch('http://localhost:4000/user/ensureAuthentication', requestOptions)
            .then(res=>res.json())
            .then(body=>{
                console.log(body.message);
                return true;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }
    render(){
        return(
            <div className="navBar">
                <h3><Link to="/">Community Blacklist</Link></h3>
                <div className="navBar-lists">
                    <ul className="navBar-pages-list">
                        <li><Link to="/post">Post</Link></li>
                    </ul>
                    <ul className="navBar-tools-list">
                        <li><Link to="/profile">Profile</Link></li>
                        {
                            this.checkLoggedIn() ? null : (<li><Link to="/login">Sign In</Link> / <Link to="/register">Sign Up</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;