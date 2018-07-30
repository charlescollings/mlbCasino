import React, { Component } from 'react';
import "./MlbMatchGame.css";
// import gamesScheduleData from "../../../src/data/gamesScheduleData"
import API from "../../utils/API"

class MlbMatchGame extends Component {
    state = {
        dealerNumber: 0,
        userNumber: 0,
        betResult: "No Bet",
        winningPutoutJerseyNumber: 0,
        dailyGameSchedule: [],
        chosenGameInningsData: [],
        previousOutInGame: [],
        currentInning: 0,
        currentGameHomeTeam: ['BOS'],
        currentGameAwayTeam: ['NYY'],
        currentHalfInning: ["Top"],
        currentOuts: 0,
        nextOut: 1,
        homeScore: 0,
        awayScore: 0,
        chosenGameId: []
    };


    getData = (event) =>  {
        event.preventDefault();
        API.getDailyGameSchedule()
        .then(res => {
            this.setState({
                dailyGameSchedule: res.data
            })
        })
        .catch(err => console.log(err));
    }


    loadGameData = (event, id) => {
        // event.preventDefault();
        console.log(id);
        API.getGameInfo(id)
        .then(res => { 
            var eventsLength = res.data.game.innings[res.data.game.innings.length-1].halfs[0].events.length
            console.log(eventsLength)
            var currentInning = res.data.game.innings.length-1;
            this.setState({
                chosenGameId: res.data.game.id,
                homeScore: res.data.game.scoring.home.runs,
                awayScore: res.data.game.scoring.away.runs,
                chosenGameInningsData: res.data.game.innings,
                currentGameHomeTeam: res.data.game.scoring.home.abbr,
                currentGameAwayTeam: res.data.game.scoring.away.abbr,
                currentInning: currentInning,
                currentHalfInning: res.data.game.innings[currentInning].halfs[1].events.length ? "Bottom" : "Top",
                // if event has length is true, do whats after ?, if false do whats after :
                currentOuts: res.data.game.innings[currentInning].halfs[1].events.length ? res.data.game.innings[currentInning].halfs[1].events[res.data.game.innings[currentInning].halfs[1].events.length-1].at_bat.events[res.data.game.innings[currentInning].halfs[1].events[res.data.game.innings[currentInning].halfs[1].events.length-1].at_bat.events.length-1].count.outs : res.data.game.innings[currentInning].halfs[0].events[res.data.game.innings[currentInning].halfs[0].events.length-1].at_bat.events[res.data.game.innings[currentInning].halfs[0].events[res.data.game.innings[currentInning].halfs[0].events.length-1].at_bat.events.length-1].count.outs,
                winningPutoutJerseyNumber: res.data.game.innings[1].halfs[0].events[1].at_bat.events[4].fielders[0].jersey_number

            })          
        })
          .catch(err => console.log(err));
    }

    // pressPlay = (gameId) => {
    //     this.loadGameData(gameId);
    //     // event.preventDefault();
    //     // generate randon number for user and dealer
    //     const lastPutoutJerseyNumber = this.state.winningPutoutJerseyNumber
    //     const randomUserNumber = Math.floor((Math.random() * 99) + 1);
    //     const randomDealerNumber = Math.floor((Math.random() * 99) + 1);
    //     // const gameNumber = Math.floor((Math.random() * 99) + 1);
    //     this.setState({
    //         dealerNumber: randomDealerNumber,
    //         userNumber: randomUserNumber,
    //         betResult: "Pending..."
    //     });
    //     setTimeout(() => {
    //         this.loadGameData(this.state.chosenGameId);
    //         if (lastPutoutJerseyNumber != this.state.winningPutoutJerseyNumber) {
    //             this.setState({
    //                 winningPutoutJerseyNumber: this.state.winningPutoutJerseyNumber
    //             });
    //             this.runGame(this.state.userNumber, this.state.dealerNumber, this.state.winningPutoutJerseyNumber);
    //         }
    //     }, 10000);
// 
        // setTimeout(() => {
        // }, 3000);
    // };

    // run this 5 seconds after press play is hit
    runGame = (userNumber, dealerNumber, winningNumber) => {
        // var userWin = false;
        if (Math.abs(userNumber - winningNumber) < Math.abs(dealerNumber - winningNumber)) {
            var userWin = true;
            this.setState({
                betResult: userWin.toString()
            });
        } else {
            userWin = false;
            this.setState({
                betResult: userWin.toString()
            });
        }
    };
    
    render() {
        let dropDownItems = null
        if (this.state.dailyGameSchedule.length > 0) {
            dropDownItems = this.state.dailyGameSchedule.map(game => (
                <button 
                    className="dropdown-item" 
                    type="button"
                    key={game.id} 
                    onClick={(event) => this.loadGameData(event, game.id)}
                 >  
                 {game.away.abbr} at {game.home.abbr}                              
                 </button>
            ))      
        }
        return (
            <div className="container-fluid gameWrapper">
                <div className="row titleBar">
                    <p>MLB Casino</p>
                </div>
                <div className="row slogan">
                    <p>*where every live baseball game is your own personal casino*</p>
                </div>

                <div className="row justify-content-between">
                    <div className="col div1">
                        <div className="row gamesDropdown">
                            <div className="dropdown">
                                <button onClick={this.getData} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Choose MLB game to play on
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    {dropDownItems}
                                </div>
                            </div>
                        </div>
                        <div className="mlbActiveGame">
                            {this.state.currentGameAwayTeam} at {this.state.currentGameHomeTeam}
                        </div>
                        <div className="activeMlbGameScore">
                            <h4><u>Score</u></h4>
                            <h4>{this.state.currentGameAwayTeam} {this.state.awayScore}</h4>
                            <h4>{this.state.currentGameHomeTeam} {this.state.homeScore}</h4>

                            <h4>Current Inning: {this.state.currentHalfInning} of {this.state.currentInning}</h4>
                            <h4>Current Outs: {this.state.currentOuts}</h4>
                            <button 
                                className="btn btn-secondary" 
                                type="button"
                                key={this.state.chosenGameId} 
                                onClick={(event) => this.loadGameData(event, this.state.chosenGameId)}
                             >  
                             Refresh MLB Game Data                             
                             </button>
                        </div>
                    </div>

                    <div className="col div2">
                        <div className="container matchGameTitle">
                            Jersey Match Game
                        </div>
                        <div className="nextAvailPlay container">
                            <h2>{this.state.currentGameAwayTeam} at {this.state.currentGameHomeTeam}</h2>
                            {/* <h6>Next Jersey Match Game starts in:</h6> */}
                            <h6>Next Jersey Match Game starts soon...</h6>
                            <div className="container playButtonPanel">
                            <h5>{this.state.currentHalfInning} of {this.state.currentInning}, out# {this.state.currentOuts+1}</h5>
                                <div className="pull-right playButton">
                                    <button
                                      // onClick={this.pressPlay(this.state.chosenGameId)}
                                      type="submit"
                                      className="btn btn-lg btn-success"
                                    >
                                      <p>Click to Play</p>
                                    </button>
                                </div>
                            </div>
                        </div>  
                        <div className="container activeUserGameStatus">
                            <div className="row titleRow">
                                <h4>Active Jersey Match Game</h4>
                            </div>
                            <div className="row gameNumbers">
                                <h5>{this.state.currentGameAwayTeam} at {this.state.currentGameHomeTeam}: {this.state.currentHalfInning} of {this.state.currentInning}, out# {this.state.currentOuts+1}</h5>

                                <div className="col">
                                    <h6>Your number {this.state.userNumber}</h6>
                                </div>
                                <div className="col">
                                    <h6>Winning Jersey # {this.state.userGameWinningNumber}</h6>
                                </div>
                                <div className="col">
                                    <h6>Dealer Number {this.state.dealerNumber}</h6>
                                </div>
                            </div>
                            <div className="row gameResultRow">
                                <h6>Game Result: {this.state.betResult}</h6> 
                            </div>               
                        </div>
                    </div>

                    <div className="col div3">
                        <div className="container rulesTitle">
                            Jersey Match Game Rules
                        </div>
                        <ul>
                            <li>Jersey Match Game is based on the next out in your selected MLB game</li>
                            <li>The winning jersey number is the jersey number of the player to make the next official putout</li>
                            <li>Your jersey number is picked randomly from 1 - 99</li>
                            <li>Dealer's jersey number is picked randomly from 1 - 99</li>
                            <li>Winner is determined by whoever's jersey number - you or the dealer's - is closest to the winning jersey number</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};
    
export default MlbMatchGame;