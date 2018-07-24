import React, { Component } from 'react';
import "./MlbMatchGame.css";
import gamesScheduleData from "../../../src/data/gamesScheduleData"
// import gamesJuly21 from "../../data/gamesJuly21"

class MlbMatchGame extends Component {
    state = {
        dealerNumber: 0,
        userNumber: 0,
        playResult: "No Current Play",
        gameNumber: 0,
        gamesScheduleData: {
            games: []
        }
        // chosenGame: 

    };

    // do i need componentDidMount sets/hydrates the initial state if I need info to populate on pageload
    componentDidMount() {
        // when component loads grab the daily game schedule and populate dropdown
        // API call that looks at date and pulls the daily schedule object
        this.setState({
            gamesScheduleData: gamesScheduleData,
        });
    }

    loadGameData = (event, id) => {
        event.preventDefault();
        console.log(id);
        // loop through games file to find file with id that matches id of clicked game
    }

    // methods 
    pressPlay = event => {
        // event.preventDefault();
        // generate randon number for user and dealer
        const randomUserNumber = Math.floor((Math.random() * 99) + 1);
        const randomDealerNumber = Math.floor((Math.random() * 99) + 1);
        const gameNumber = Math.floor((Math.random() * 99) + 1);
        this.setState({
            dealerNumber: randomDealerNumber,
            userNumber: randomUserNumber,
            gameNumber: gameNumber,
            playResult: "Pending..."
        });

        setTimeout(() => {
            this.runGame(randomUserNumber, randomDealerNumber, gameNumber);
        }, 3000);
    };

    // run this 5 seconds after press play is hit
    runGame = (playerOne, playerTwo, number) => {
        // var userWin = false;
        // randon gameNumber below will actually be API call to get jersey# of player
        
        if (Math.abs(playerOne - number) < Math.abs(playerTwo - number)) {
            var userWin = true;
            this.setState({
                playResult: userWin.toString()
            });
        } else {
            userWin = false;
            this.setState({
                playResult: userWin.toString()
            });
        }
    }


        // populate those numbers onto "your number" and "dealer number"
        // set play status to pending
        // turn on API listenser, or make API call every few seconds
        // once jersey number data is rec'd then calculate winner of game
        // update next play div
        // update last play div
        // update last 10 numbers div
        // update available numbers div?
        // update account $balance
    
    
        render() {
            return (
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col border border-success rounded div1">
                            <p>How To Play:</p>
                        </div>

                        <div className="col border border-success rounded div2">
                            <div className="dropdown">
                              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Choose MLB game to play on
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                              {this.state.gamesScheduleData.games.map(game => (
                                <button 
                                    className="dropdown-item" 
                                    type="button"
                                    key={game.id} 
                                    onClick={(event) => this.loadGameData(event, game.id)}
                                 >  
                                 {game.away.abbr} at {game.home.abbr}                              
                                 </button>
                              ))}
                              </div>
                            </div>
                            <p>Next Available Play</p>
                            <div className="pull-right">
                                <button
                                  onClick={this.pressPlay}
                                  type="submit"
                                  className="btn btn-lg btn-danger"
                                >
                                  Click Here to Play
                                </button>
                            </div>

                            <p>Your number: {this.state.userNumber}</p>
                            <p>Dealer number: {this.state.dealerNumber}</p>
                            <p>Game number: {this.state.gameNumber}</p>
                            <p>Play Result: {this.state.playResult}</p>
                        </div>
                        
                        <div className="col border border-success rounded div3">
                            <p>Last Play:</p>
                            <p>Last 10 Numbers:</p>
                            <p>Active Numbers:</p>
                        </div>
                    </div>
                </div>
            );
        };
    };
    
    export default MlbMatchGame;