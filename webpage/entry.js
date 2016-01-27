var request = require('sample_sdk');

var url = 'https://api.github.com/repos/visionmedia/superagent';
request(url, function(text) {
  document.write(text);
});
