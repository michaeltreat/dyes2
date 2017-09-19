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
  .end(function(err,response){
    res.send()
  })
})

app.post('', (req, res) => {
  .then( () => {

  }).catch()
})

app.put('', (req, res) => {
  .then( () => {

  }).catch()
})

app.delete('', (req, res) => {
  .then( () => {

  }).catch()
})
