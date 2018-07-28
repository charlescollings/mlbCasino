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
  }
}
