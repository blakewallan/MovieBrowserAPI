var express = require("express");
var router = express.Router();
var request = require("request");
var seriesHelper = require('../helpers/seriesHelper');

//Search by show ID
router.get('/:tvid', function(req, res){
  seriesHelper.search(req.params.tvid, '', '', function(results){
    res.send(results);
  })
});

//Search by season number
router.get('/:tvid/season/:seasonNum', function(req, res){
  seriesHelper.search(req.params.tvid, req.params.seasonNum, '', function(results){
    res.send(results);
  })
});

//Search by episode
router.get('/:tvid/season/:seasonNum/episode/:epNum', function(req, res){
  seriesHelper.search(req.params.tvid, req.params.seasonNum, req.params.epNum, function(results){
    res.send(results);
  })
});

module.exports = router;
