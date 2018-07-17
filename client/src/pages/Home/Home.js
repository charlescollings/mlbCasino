import React, { Component } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

class Home extends Component {

// do i need componentDidMount?

// methods 


    render() {
        return (
            <div className="wrapper">
                <p>wrapper</p>
                <div className="insideDiv1">
                    <div>
                    <p>mlb match game</p>
                    </div>
                    <div>
                    <Link to="/MlbMatchGame">
                        <button className="btn btn-lg btn-danger">
                            Enter mlb match game
                        </button>
                    </Link>
                    </div>
                    <div className="gameRules">
                    short description of rules
                    </div>
                </div>
                <div className="insideDiv2">
                    mlb roulette
                </div>
                <div className="insideDiv3">
                    mlb slots
                </div>
            </div>
        );
    };
};

export default Home;