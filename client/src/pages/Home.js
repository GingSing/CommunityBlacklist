import React, { Component } from 'react';
import { Blacklist } from '../components';

class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="homeHeader">
                </div>
                <div className="homeBody">
                    <Blacklist />
                </div>
            </div>
        );
    }
}

export default Home;