const axios = require("axios");
const db = require("../models");

// Defining methods for the nytController

// findAll searches the API and gets all the game data
module.exports = {

  findAll: function(req, res) {
    axios
      .get("http://api.sportradar.us/mlb/trial/v6.5/en/games/7781256e-9af7-4c39-a5c9-5fed54e5cf1c/pbp.json?api_key=bspcbjz7p2vffqrdj5ps4ftm")
      .then(response => {
        // jersey number of 1st out of this game
        console.log(response.data.game.innings[1].halfs[0].events[1].at_bat.events[4].fielders[0].jersey_number)

        // api call every 10 secs and look at latest at_bat and latest event in that at_bat. if it contains a fielder array then 
        const games = {
          _id: response.data.game.id,
          putoutPlayerJerseyNumber: response.data.game.innings[1].halfs[0].events[1].at_bat.events[4].fielders[0].jersey_number
        };
        // response.data.game.innings[1](array of 10 inning objects, element 0 is that starting lineups).halfs[0](array of 2 half inning objects).events[1](an array of each at bat).at_bat.events[4].fielders[0].jersey_number
        var query = games,
        update = { expire: new Date() },
        options = { upsert: true, new: true, setDefaultsOnInsert: true };

        db.Games
        .findOneAndUpdate(query, update, options)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
      });
  }
};
