const axios = require("axios");
const db = require("../models");

module.exports = {

  getDailyGames: function(req, res) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {dd = '0'+dd} 
    if(mm<10) {mm = '0'+mm} 
    today = yyyy + '/' + mm + '/' + dd ;

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://api.sportradar.us/mlb/trial/v6.5/en/games/" + today + "/schedule.json?api_key=bspcbjz7p2vffqrdj5ps4ftm";
    axios
      .get(url)
      .then(res => {
            console.log(res.data.games)
      })
      .catch(err => res.status(422).json(err))
  }
}


      // axios
      //   .get("http://api.sportradar.us/mlb/trial/v6.5/en/games/2018/07/21/schedule.json?api_key=bspcbjz7p2vffqrdj5ps4ftm")
      //   .then(response => {
// 
      //     const gamesSchedule = {
      //       _id: response.data.games[0].id,
      //       homeTeam: response.data.games[0].home.abbr,
      //       awayTeam: response.data.games[0].away.abbr,
      //       startTime: response.data.games[0].scheduled
      //     };
// 
      //     var query = gamesSchedule,
      //       update = { expire: new Date() },
      //       options = { upsert: true, new: true, setDefaultsOnInsert: true };
// 
      //     db.GamesSchedule
      //     .findOneAndUpdate(query, update, options)
      //     .then(dbArticle => res.json(dbArticle))
      //     .catch(err => res.status(422).json(err));     
      //   });

  