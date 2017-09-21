'use strict'

const leaderboard = {
  // All arrays will follow this pattern:
  // times.total = [ [name,scores.total], [etc] ]
  // times.yearly: [ [name,score.yearly], [etc] ]
  // etc
  times: {
    total: [],
    yearly: [],
    sixMonth: [],
    monthly: [],
    weekly: [],
  },
}


leaderboard.getDatabaseScores = function(callback){
  // Get all current scores from the database.
}

// scores is an object with properties that match the same patten of times.*
// scores.total, scores.yearly, etc.
leaderboard.checkLeaderboard = function(name, scores, callback){

  // Checks if the leaderboard already contains the user.
  // if true - leaderboard.updateScores(name, scores, callback)
  // else - leaderboard.addScores(name, scores, callback)
}

leaderboard.updateDatabaseScore = function(name, scores, callback){
  // Updates a user's scores.
}

leaderboard.addScores = function(name, scores, callback) {
  // Add a user and their scores to the leaderboard.
}

leaderboard.showleaderboard = function(timeRange, callback){
  // Show times.${timeRange} where timeRange === 'total', 'yearly', etc.
}

leaderboard.showAllLeaderboards = function(callback){
  // Shows all leaderboards.
}
