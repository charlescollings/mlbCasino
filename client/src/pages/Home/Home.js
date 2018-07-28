import React, { Component } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import troutJersey from "../../images/mike-trout-1.jpg"
import rouletteWheel from "../../images/roulette-wheel.jpg"
import bingoCard from "../../images/bingo-card.jpg"
import slotMachine from "../../images/slot-machine.jpg"

class Home extends Component {

// do i need componentDidMount?

// methods 


    render() {
        return (
            <div className="container-fluid wrapper">
                <div className="row titleBar">
                        <p>MLB Casino</p>
                </div>
                <div className="row slogan">
                        <p>*where every live baseball game is your own personal casino*</p>
                </div>
                <div className="row availGameCards">
                    <div className="gameCard">
                        <div className="gameTitle">
                            <p>MLB Jersey Match</p>
                        </div>
                        <div>
                            <img className="gameImage" alt="jersey" src={troutJersey} />
                        </div>
                        <div>
                        <Link to="/MlbMatchGame">
                            <button className="btn btn-med btn-danger">
                                Enter Jersey Match
                            </button>
                        </Link>
                        </div>
                    </div>
                    <div className="gameCard">
                        <div className="gameTitle">
                        <p>MLB Roulette</p>
                        </div>
                        <div>
                            <img className="gameImage" alt="roulette wheel" src={rouletteWheel} />
                        </div>
                        <div>
                        <Link to="/MlbMatchGame">
                            <button className="btn btn-med btn-danger">
                                Enter MLB Roulette
                            </button>
                        </Link>
                        </div>
                    </div>
                    <div className="gameCard">
                        <div className="gameTitle">
                        <p>MLB Bingo</p>
                        </div>
                        <div>
                            <img className="gameImage" alt="bingo card" src={bingoCard} />
                        </div>
                        <div>
                        <Link to="/MlbMatchGame">
                            <button className="btn btn-med btn-danger">
                                Enter MLB Bingo
                            </button>
                        </Link>
                        </div>
                    </div>
                    <div className="gameCard">
                        <div className="gameTitle">
                        <p>MLB Slots</p>
                        </div>
                        <div>
                            <img className="gameImage" alt="slot machine" src={slotMachine} />
                        </div>
                        <div>
                        <Link to="/MlbMatchGame">
                            <button className="btn btn-med btn-danger">
                                Enter MLB Slots
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;