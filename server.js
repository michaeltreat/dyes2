'use strict'

const pg = require('pg') // postgres database
const request = require('superagent') // AJAX api
const express = require('express') // middleware connector
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const app = express()

const conString = process.env.DATABASE || 'postgres://'
const client = new pg.Client(conString)

client.connect()
client.on('error', function(err){
  console.error(err);
})

app.use(express.static('./public'))

app.get('', (req,res) => {
  request.get()
  .then()
  .end(function(err,res){
    res.send()
  })
})

app.post('', (req, res) => {

  request.post().then( () => {

  }).catch()
})

app.put('', (req, res) => {
  request.put().then( () => {

  }).catch()
})

app.delete('', (req, res) => {
  request.delete().then( () => {

  }).catch()
})
