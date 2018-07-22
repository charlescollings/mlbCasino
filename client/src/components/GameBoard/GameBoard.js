import React, { Component } from 'react';
import "./GameBoard.css";
import API from "../../utils/API";

// const GameBoard = props => <h1 className="gameboard">{props.children}</h1>;

class GameBoard extends Component {

    state = {
        homeTeam: "",
        awayTeam: "",
        gameTime: ""
    }
        
    getGamesSchedule = () => {
        API.getGamesSchedule({

        })
        .then(res =>
            this.setState({
                homeTeam: res.games[0].home.abbr,
                awayTeam: res.games[0].away.abbr,
                gameTime: res.games[0].scheduled
            })
        )
        .catch(err => console.log(err));
    };

    render() {
        return (

            <div className="container">
                <div className="gameBoard">
                    <p>Schedule of Games</p> 
                    <p>{this.state.homeTeam}</p>
                </div>
            </div>
        );
    };
}

export default GameBoard;