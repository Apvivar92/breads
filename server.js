// DEPENDENCIES
const express = require('express')
const { append } = require('express/lib/response')

// CONFIGURATIONS
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
});

// BREADS
const breadsController = require('./controllers/bread_controller.js')
  app.use('/breads', breadsController)

//Wild card 404 page
app.get('*', (req,res) => {
  res.send('404 error: page does not exist');
});

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
});