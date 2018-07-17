import React, { Component } from 'react';
import "./MlbMatchGame.css";

class MlbMatchGame extends Component {

    //state = {
    // var userNumber = "";
    dealerNumber = []
    //    // q: "",
    //    // end_year: "",
    //    // message: "Search For Articles To Begin!"
    //  };
    // do i need componentDidMount?
    
    // methods 
    pressPlay = event => {
        event.preventDefault();
        console.log("play button working");
        // generate randon number for user and dealer
        const randomUserNumber = Math.floor((Math.random() * 99) + 1);
        // this.setState({
        //     userNumber: this.randomUserNumber
        //   });
        console.log(randomUserNumber)

        const randomDealerNumber = Math.floor((Math.random() * 99) + 1);
        var dealerNumber = randomDealerNumber;
        // this.setState({
        //     dealerNumber: randomDealerNumber
        //   });
        console.log(dealerNumber)
        // populate those numbers onto "your number" and "dealer number"
        // set play status to pending
        // turn on API listenser, or make API call every few seconds
        // once jersey number data is rec'd then calculate winner of game
        // update next play div
        // update last play div
        // update last 10 numbers div
        // update available numbers div?
        // update account $balance
        
      };
    
    
        render() {
            return (
       
                <div className="wrapper">
                    <p>wrapper</p>
                    <div className="insideDiv1">
                        <p>How To Play:</p>
                    </div>
                    <div className="insideDiv2">
                        <p>Next Available Play</p>
                         {/* <Button
                          onPress={this.pressPlay}
                          title="Click to Play"
                          color="#841584"
                          accessibilityLabel="Learn more about this purple button"
                        /> */}
                        <div className="pull-right">
                            <button
                              onClick={this.pressPlay}
                              type="submit"
                              className="btn btn-lg btn-danger"
                            >
                              Click Here to Play
                            </button>
                        </div>
                        
                        <p>Your number:</p>
                        <p>Dealer number:</p>
                        <p>Play Result:</p>
                        
                    </div>
                    <div className="insideDiv3">
                        <p>Last Play:</p>
                        <p>Last 10 Numbers:</p>
                        <p>Active Numbers:</p>
                    </div>
                </div>
            );
        };
    };
    
    export default MlbMatchGame;