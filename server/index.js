var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('../database-mysql');

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/albums', function (req, res) {
  db.getAllAlbums((err, data) => {
    if(err) {
      res.send(501, err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/albums', function(req, res) {
  db.insertNewAlbum(req.body, function(err, completed) {
    if(err && !completed) {
      console.log('whooops', err);
      res.send(501, err);
    } else {
      res.send(true);
    }
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

