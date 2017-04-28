var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

connection.config.queryFormat = function (query, values) {
  if (!values) return query;
  return query.replace(/\:(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }
    return txt;
  }.bind(this));
};

var getAllAlbums = function(cb) {
  connection.query('SELECT * FROM kanyes', function(err, results, fields) {
    if(err) {
      cb(err, null);
    }
    console.log('cb', cb);
    cb(null, results);
  });
}

var insertNewAlbum = function(album, cb) {
  connection.query('INSERT INTO kanyes (era, year, description, imageUrl) VALUES (:era, :year, :description, :imageUrl)', { era: album.name, year: album.year, description: album.description, imageUrl: album.coverArtUrl }, function(err, results, fields) {
    console.log('done the thing');
    if(err) {
      cb(err, false);
    } else {
      cb(null, true);
    }
  });
}

module.exports.getAllAlbums = getAllAlbums;
module.exports.insertNewAlbum = insertNewAlbum;
