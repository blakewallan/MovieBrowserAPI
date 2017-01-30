var request = require("request");

var base = 'http://api.themoviedb.org/3/tv/';
var key = '?api_key=';

module.exports = {

  search : function(showId, seasonNum, episodeNum, callback) {
    if(seasonNum !== ''){
      seasonNum = '/season/' + seasonNum;
    }
    if(episodeNum !== ''){
      seasonNum += '/';
      episodeNum = 'episode/' + episodeNum;
    }
    request(base + showId + seasonNum + episodeNum + key, function(err, response, body){
      callback(JSON.parse(response.body));
    });
  }

};
