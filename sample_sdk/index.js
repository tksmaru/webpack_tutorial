var request = require('superagent');

module.exports = function(url, callback) {
  request.get(url)
  .end(function(err,response){
    //console.log(response);
    //console.log('Response ok:', response.ok);
    //console.log('Response text:', response.text);
    // callback
    callback(response.text);
  });
}
