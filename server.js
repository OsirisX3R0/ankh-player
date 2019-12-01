const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const folders = require('./api/build.js');

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/build', folders)

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`));