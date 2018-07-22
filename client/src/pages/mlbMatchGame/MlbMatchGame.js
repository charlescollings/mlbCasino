import React, { Component } from 'react';
import "./MlbMatchGame.css";

class MlbMatchGame extends Component {

    state = {
        dealerNumber: 0,
        userNumber: 0,
        playResult: "No Current Play",
        gameNumber: 0,
   
    };
    // do i need componentDidMount sets/hydrates the initial state if I need info to populate on pageload

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