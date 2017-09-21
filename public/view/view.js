'use strict'

// Anon-Form functionality.
// On submit sends to anonUser.getSteamData() .
let anonForm = document.getElementById('public-form')

anonForm.addEventListener('submit', function(e){
  e.preventDefault()
  e.stopPropagation()

  anonUser.query = anonForm.getElementsByTagName('input')[0].value
  anonUser.getSteamData(anonUser.query)
}, false)

// Sign-in functionality.
// On submit starts Passport process.
let passportForm = document.getElementById('passport-form')

passportForm.addEventListener('submit', function(e){
  e.preventDefault()
  e.stopPropagation()

  // TODO: Fill in the rest of this with passport functionality
  // Eventually call passportUser.getSteamData(steamID)

}, false)


// Submit Score functionality

/*
TODO: Submit Score- after the passport signup has been completed.

let submitScore = document.getElementById('submit-score')

submitScore.addEventListener('submit', function(e){
  e.preventDefault()
  e.stopPropagation()
  passportUser.submitToLeaderboard(passportUser.name, passportUser.leaderboardScores)

}, false)
*/
