// DEPENDENCIES
const express = require('express')
const { append } = require('express/lib/response')

// CONFIGURATIONS
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
});

// BREADS
const breadsController = require(
  './controllers/bread_controller.js'
  )
  app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
});