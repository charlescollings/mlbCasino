import React, { Component } from 'react';
import "./MlbMatchGame.css";
// import gamesScheduleData from "../../../src/data/gamesScheduleData"
import API from "../../utils/API"

class MlbMatchGame extends Component {
    state = {
        dealerNumber: 0,
        userNumber: 0,
        betResult: "No Current Bet",
        userGameWinningNumber: 0,
        dailyGameSchedule: [],
        chosenGameInningsData: [],
        previousOutInGame: [],
        currentInning: 0,
        currentGameHomeTeam: ['Boston Red Sox'],
        currentGameAwayTeam: ['New York Yankees'],
        currentHalfInning: ["None"],
        currentOuts: 0,
        nextOut: 1
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
        event.preventDefault();
        // console.log(id);
        API.getGameInfo(id)
        .then(res => {       
            this.setState({
              chosenGameInningsData: res.data.game.innings,
              currentGameHomeTeam: res.data.game.scoring.home.abbr,
              currentGameAwayTeam: res.data.game.scoring.away.abbr,
              currentInning: res.data.game.innings.length-1,
              currentHalfInning: res.data.game.innings[res.data.game.innings.length-1].halfs[1].events.length ? "Bottom" : "Top",
              // // if event has length is true, do whats after ?, if false do whats after :
              // currentOuts: res.data.game.innings[res.data.game.innings.length-1].halfs[1].events.length ? res.data.game.innings[res.data.game.innings.length-1].halfs[1].half : res.data.game.innings[res.data.game.innings.length-1].halfs[0].half //.events[this.events.length].count.outs
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
            userGameWinningNumber: gameNumber,
            betResult: "Pending..."
        });
        setTimeout(() => {
            this.runGame(this.state.userNumber, this.state.dealerNumber, this.state.userGameWinningNumber);
        }, 3000);
    };

    // run this 5 seconds after press play is hit
    runGame = (userNumber, dealerNumber, winningNumber) => {
        // var userWin = false;
        // randon gameNumber below will actually be API call to get jersey# of player

        
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
    }
    
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
                    <p>MLB Jersey Match Game</p>
                </div>
                <div className="row slogan">
                    <p>*where every live baseball game is your own personal casino*</p>
                </div>
                <div className="row gamesDropdown">
                {/* on dropdown click call getDailyGameSchedule API */}
                    <div className="dropdown">
                        <button onClick={this.getData} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Choose MLB game to play on
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            {dropDownItems}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col div1">
                        <div className="mlbActiveGame">
                            <p>{this.state.currentGameAwayTeam} at {this.state.currentGameHomeTeam}</p>
                        </div>
                        <div className="activeMlbGameStatus">
                            <h2><u>MLB Game Status</u></h2>   
                            <h4 className="big">Current Inning: {this.state.currentHalfInning} of {this.state.currentInning}</h4>
                            <h4>Current Outs: {this.state.currentOuts}</h4>
                            <div className="nextAvailPlay container">
                                <h6><u>Next Available Jersey Match Game</u></h6>
                                <h6>{this.state.currentHalfInning} of {this.state.currentInning}, out # {this.state.nextOut}</h6>
                                <div className="pull-right playButton">
                                    <button
                                      onClick={this.pressPlay}
                                      type="submit"
                                      className="btn btn-lg btn-success"
                                    >
                                      Click Here to Play
                                    </button>
                                </div>
                            </div>                   
                        </div>
                    </div>

                    <div className="col div2">
                        <div className="userActiveGame">
                            <h2><u>Your Current Game</u></h2> 
                            <p>{this.state.currentGameAwayTeam} at {this.state.currentGameHomeTeam}</p>
                            <h6>{this.state.currentHalfInning} of {this.state.currentInning}, out # {this.state.nextOut}</h6>
                        </div>
                        <div className="container activeUserGameStatus">
                            <h4>Your number: {this.state.userNumber}</h4>
                            <h4>Dealer number: {this.state.dealerNumber}</h4>
                            <h4>Game number: {this.state.userGameWinningNumber}</h4>
                            <h4>Bet Result: {this.state.betResult}</h4>                
                        </div>
                    </div>

                    <div className="col border border-success rounded div2">
                        <div className="activeGameStatus">
                            <div className="nextAvailPlay container">
                                <h6><u>Next Available Jersey Match Game</u></h6>
                                <h6>{this.state.currentHalfInning} of {this.state.currentInning}, out # {this.state.nextOut}</h6>
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
    
export default MlbMatchGame;