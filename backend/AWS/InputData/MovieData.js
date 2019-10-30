var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing movies into DynamoDB. Please wait.');

var allMovies = JSON.parse(fs.readFileSync('Movie.json', 'utf8'));
allMovies.forEach(function(movie) {
  var params = {
    TableName: 'Movies',
    Item: {
      movieID: movie.movieID,
      movieName: movie.movieName,
      director: movie.director,
      casters: movie.casters,
      durable: movie.durable,
      style: movie.style,
      ages: movie.ages,
      state: movie.state,
      img: movie.img,
      detail: movie.detail
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error(
        'Unable to add movie',
        movie.title,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('PutItem succeeded:', movie.movieName);
    }
  });
});
