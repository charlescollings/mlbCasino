import axios from "axios";

export default {
  getDailyGameSchedule: function() {
    console.log("in API")
    return axios.get("/api/dailyGameSchedule");
  },


  // Gets articles from the API
  // getGameInfo: function(id) {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = "http://api.sportradar.us/mlb/trial/v6.5/en/games/" + id + "/pbp.json?api_key=bspcbjz7p2vffqrdj5ps4ftm";
    // return axios
      // .get(proxyurl + url)
  // },
}
