'use strict'

const pg = require('pg') // postgres database
const request = require('superagent') // AJAX api
const express = require('express') // middleware connector
const app = express()
const PORT = 3000

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

// Routing for server

app.use(express.static('./public'))
app.listen(PORT,function(){
  console.log('Server started on: ', PORT);

})

app.get('/getSteamID', (req,res) => {
  if(req.headers.vanityUrl){
    request.get(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.KEYs}&vanityurl=${req.headers.vanityUrl}`)
    .end( function(err, response){
      if(err) {
        console.log('There was an error while trying to get the SteamID.\n\nerr.message:\n    ', err.status, err.message)
        res.send(err.status, err.message)
      }else{
        console.log(`This is the response.body: ${response.body}`)
        res.steamid = response.body.response.steamid
        res.send(res.status, res.steamid)
      }
    })
  }else{
    res.status('400').send('400 Bad Request - The vanityUrl was not attached to the headers on your request.')
    console.log('400 bad request- There is noting assigned to req.headers.vanityUrl.')
  }
})
// Route to get a user's SteamData.

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

app.delete('/delete', (req, res) => {
  request.delete().then( () => {

  }).catch()
})

app.get('/*', function(req, res) {
  res.sendFile('public/view/index.html', {root: '.'}, function(err){
    if(err){
      console.log('error in sending file', err)
    }else{
      console.log('Sent: index.html')
    }
  })
})
