var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var opn = require('opn');
var connection = require('./connection');

// Initialize app
const app = express();

// Add support for FormData requests
const upload = multer();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));

// Import Routes
require('./routes')(app);

// Boot app on PORT: 3000
connection().then(async () => {
  app.listen(3000, () => {
    opn('http://localhost:3000');
    console.log('App is running at http://localhost:3000');
  });
});
