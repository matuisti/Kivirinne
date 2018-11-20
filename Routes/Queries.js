var express = require('express');
var api = express.Router();
var database = require('../Database/database');
var cors = require('cors')
var jwt = require('jsonwebtoken');
var token;

api.use(cors());

process.env.SECRET_KEY = "devesh";

api.use(function(req, res, next) {
    var token = req.body.token || req.headers['token'];
    var appData = {};
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, function(err) {
            if (err) {
                appData["error"] = 1;
                appData["data"] = "Token is invalid";
                res.status(500).json(appData);
            } else {
                next();
            }
        });
    } else {
        appData["error"] = 1;
        appData["data"] = "Please send a token";
        res.status(403).json(appData);
    }
});


api.get('/get/dht', function(req, res) {
  const { interval, intervalformat } = req.query;

  var appData = {};
  database.connection.getConnection(function(err, connection) {
      if (err) {
          appData["error"] = 1;
          appData["data"] = "Internal Server Error";
          res.status(500).json(appData);
      } else {
        var sql = 'SELECT id, device_id, DATE_FORMAT(time,\'%m-%d-%Y %H:%i\') as time, temperature, humidity, voltage, awake_time FROM raw_air_data WHERE time BETWEEN timestamp(DATE_SUB(NOW(), INTERVAL ' + interval + ' ' + intervalformat + ')) AND timestamp(NOW())';
        connection.query(sql, function(error, rows, fields) {
            if (!error) {
                appData["data"] = rows;
                res.status(200).json(appData);
            } else {
                appData["data"] = error;
                res.status(400).json(appData);
            }
        });
        connection.release();
      }
  });
});

module.exports = api;
