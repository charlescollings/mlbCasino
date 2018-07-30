import axios from "axios";

export default {
  getDailyGameSchedule: function() {
    return axios.get("/api/dailyGameSchedule");
  },

  getGameInfo: function(id) {
    return axios.get("/api/getGameInfo/" + id);
  }
}
