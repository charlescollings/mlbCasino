const axios = require("axios");
const db = require("../models");

module.exports = {
  getGameInfo: function(req, res) {
    // console.log(req.params.id)
    const gameURL = "http://api.sportradar.us/mlb/trial/v6.5/en/games/" + req.params.id + "/pbp.json?api_key=bspcbjz7p2vffqrdj5ps4ftm";
    axios
      .get(gameURL)
      .then(result => {
        res.json(result.data);

        const chosenGamePutoutData = {
          _id: response.data.game.id,
          putoutPlayerJerseyNumber: response.data.game.innings[1].halfs[0].events[1].at_bat.events[4].fielders[0].jersey_number
        };
        // response.data.game.innings[1](array of 10 inning objects, element 0 is that starting lineups).halfs[0](array of 2 half inning objects).events[1](an array of each at bat).at_bat.events[4].fielders[0].jersey_number
        var query = chosenGamePutoutData,
        update = { expire: new Date() },
        options = { upsert: true, new: true, setDefaultsOnInsert: true };

        db.ChosenGamePutoutData
        .findOneAndUpdate(query, update, options)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));

      })
      .catch(err => res.status(422).json(err));
  }
}