import React, { Component } from 'react';
import "./MlbMatchGame.css";
// import gamesScheduleData from "../../../src/data/gamesScheduleData"
import API from "../../utils/API"

class MlbMatchGame extends Component {
    state = {
        dealerNumber: 0,
        userNumber: 0,
        playResult: "No Current Play",
        gameNumber: 0,
        dailyGameSchedule: [],
        chosenGameInningsData: [],
        previousOutInGame: [],
        currentInning: 1,
        currentGameHomeTeam: [],
        currentGameAwayTeam: [],
        currentHalfInning: 0,
        currentOuts: []
    };

    // do i need componentDidMount sets/hydrates the initial state if I need info to populate on pageload
    componentDidMount() {
        // when component loads grab the daily game schedule and populate dropdown
        // API call that looks at date and pulls the daily schedule object
        API.getDailyGameSchedule()
        .then(res => {
            this.setState({
              dailyGameSchedule: res.data.games,
            })
        })
          .catch(err => console.log(err));
    };
    
    loadGameData = (event, id) => {
        event.preventDefault();
        // console.log(id);
        API.getGameInfo(id)
        .then(res => {
           
            this.setState({
              chosenGameInningsData: res.data.game.innings,
              currentGameHomeTeam: res.data.game.scoring.home.abbr,
              currentGameAwayTeam: res.data.game.scoring.away.abbr,
              currentInning: res.data.game.innings.length-1,
              currentHalfInning: res.data.game.innings[res.data.game.innings.length-1].halfs[1].events.length ? 1 : 0,
              currentOuts: res.data.game.innings[res.data.game.innings.length-1].halfs[this.state.currentHalfInning].events[0].at_bat.description
              // previousOutInGame: res.data.game.innings[res.data.game.innings(innnings.length)]
            })
            
        })
          .catch(err => console.log(err));
    }

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
                              {this.state.dailyGameSchedule.map(game => (
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
                            
                            <p>Current Game: {this.state.currentGameAwayTeam} at {this.state.currentGameHomeTeam}</p>
                            <p>Current Inning: {this.state.currentInning}</p>
                            <p>Current Half Inning: {this.state.currentHalfInning}</p>
                            <p>Outs: {this.state.currentOuts}</p>
                              
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
                           
                            <p>Last 10 Numbers:</p>
                            <p>Active Numbers:</p>
                        </div>
                    </div>
                </div>
            );
        };
    };
    
    export default MlbMatchGame;