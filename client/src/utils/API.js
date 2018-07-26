import axios from "axios";

export default {
  // Gets articles from the API
  getGameInfo: function(id) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://api.sportradar.us/mlb/trial/v6.5/en/games/" + id + "/pbp.json?api_key=bspcbjz7p2vffqrdj5ps4ftm";
    return axios
      .get(proxyurl + url)
  },

  getDailyGameSchedule: function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    } 
    today = yyyy + '/' + mm + '/' + dd ;

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://api.sportradar.us/mlb/trial/v6.5/en/games/" + today + "/schedule.json?api_key=bspcbjz7p2vffqrdj5ps4ftm";
    return axios
      .get(proxyurl + url)

      // jersey number of 1st out of this game

      // api call every 10 secs and look at latest at_bat and latest event in that at_bat. if it contains a fielder array then 
      // const games = {
      //   _id: response.data.game.id,
      //   putoutPlayerJerseyNumber: response.data.game.innings[1].halfs[0].events[1].at_bat.events[4].fielders[0].jersey_number
      // };
      // // response.data.game.innings[1](array of 10 inning objects, element 0 is that starting lineups).halfs[0](array of 2 half inning objects).events[1](an array of each at bat).at_bat.events[4].fielders[0].jersey_number
      // var query = games,
      // update = { expire: new Date() },
      // options = { upsert: true, new: true, setDefaultsOnInsert: true };
 
      // db.Games
      // .findOneAndUpdate(query, update, options)
      // .then(dbArticle => res.json(dbArticle))
      // .catch(err => res.status(422).json(err));
  }
}
