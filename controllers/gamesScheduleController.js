const axios = require("axios");
const db = require("../models");

module.exports = {

    findAll: function(req, res) {
      axios
        .get("http://api.sportradar.us/mlb/trial/v6.5/en/games/2018/07/21/schedule.json?api_key=bspcbjz7p2vffqrdj5ps4ftm")
        .then(response => {

          const gamesSchedule = {
            _id: response.data.games[0].id,
            homeTeam: response.data.games[0].home.abbr,
            awayTeam: response.data.games[0].away.abbr,
            startTime: response.data.games[0].scheduled
          };

          var query = gamesSchedule,
            update = { expire: new Date() },
            options = { upsert: true, new: true, setDefaultsOnInsert: true };

          db.GamesSchedule
          .findOneAndUpdate(query, update, options)
          .then(dbArticle => res.json(dbArticle))
          .catch(err => res.status(422).json(err));     
        });
    }
  };