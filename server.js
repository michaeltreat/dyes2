'use strict'

const pg = require('pg') // postgres database
const request = require('superagent') // AJAX api
const express = require('express') // middleware connector
const app = express()
const PORT = process.env.PORT || 3000

const conString = process.env.DATABASE || 'postgres://@localhost:5432/dyes'
const client = new pg.Client(conString)


client.connect() // Connects to postgres database

// PSQL database Event Listeners
client.on('connect', function(){
  console.log('Connected to the psql database successfully!')
})

client.on('error', function(err){
  console.error('Something went wrong involving the database' , err);
})

// If there's no Leaderboard Table then make one.
function createLeaderboardTable(){
  client.query(`
    CREATE TABLE IF NOT EXISTS leaderboard (
      leaderboard_id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      time VARCHAR(255)
    )`)
    .catch(function(err){
      console.log('Something went wrong with checking/creating the leaderboard tables.',err);
    });
}
createLeaderboardTable()

app.use(express.static('./public'))

app.listen( () =>{
  console.log('connected on port', PORT)
})

app.get('/getSteamData', (req,res) => {
  // Route to get a user's SteamData.
})

app.get('/checkLeaderboard', (req, res) => {
  // Route to check if someone is already on the leaderboard.
})

app.post('/addToLeaderboard', (req, res) => {
  // Route to add someone to the leaderboard for the first time.
})

app.put('/updateLeaderboard', (req, res) => {
  // Route to update a score for a user currently on the leaderboard.
})

app.delete('/removeFromLeaderboard', (req, res) => {
  // Removes a user from the leaderboard.
})

app.delete('', (req, res) => {
  request.delete().then( () => {

  }).catch()
})
