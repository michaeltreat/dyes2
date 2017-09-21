'use strict'

const passportUser = {
  steamID: '',
  data: {},
  name: '',
  games: [],
  leaderboardScores:{
    total: 0,
    yearly: 0,
    monthly: 0,
    weekly: 0,
  },
}
passportUser.getSteamData = function(steamID, callback){
  // Makes an API call to get the user's steamData.
}
passportUser.parseData = function(data, callback){
  // Parse out all the data and assign's values as needed.
}

passportUser.submitToLeaderboard = function(name, leaderboardScores, callback){
  // Submit name and scores to leaderboard
  // leaderboard.checkLeaderboard(name, leaderboardScores, callback)
}
