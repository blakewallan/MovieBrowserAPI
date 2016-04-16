var express = require("express");
var router = express.Router();
var searchHelper = require('../helpers/searchHelper');

//Search
router.get('/:searchType/:term', function(req, res){
  searchHelper.search(req.params.searchType, req.params.term, function(results){
    res.send(results)
  })
});

module.exports = router;
