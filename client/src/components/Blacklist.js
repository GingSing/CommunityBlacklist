import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Blacklist.css';

//requires blackList
//requires users to have a votes, name, lastUpdatedDescription and lastUpdated field
class Blacklist extends Component{
    render(){
        return(
            <div className="blackList">
                <ul className="blackList-unordered">
                    {
                        this.props.blackList && this.props.blackList.map(user => {
                            return (
                                <li className="blackList-unordered-list">
                                    <Link to={`/${user.name}`}>
                                        <span>{user.votes}</span>
                                        <span>{user.name}</span>
                                        <span>{user.lastUpdatedDescription}</span>
                                        <span>{user.lastUpdated}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Blacklist;