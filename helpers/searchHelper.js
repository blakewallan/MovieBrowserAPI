var request = require("request");

var base = 'http://api.themoviedb.org/3/search/';
var key = '&api_key=';

module.exports = {

  search : function(searchType, term, callback) {
    //Exclude adult titles
    var adult = '';
    if (searchType === "multi"){
      adult = '&include_adult=false'
    }
    //Request and callback on complete
    request(base + searchType + '?query=' + term + key + adult, function(err, response, body){
      callback(JSON.parse(response.body));
    });
  }

};
