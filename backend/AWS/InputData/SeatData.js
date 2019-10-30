var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com'
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing movies into DynamoDB. Please wait.');

var allMovies = JSON.parse(fs.readFileSync('Seat.json', 'utf8'));
allMovies.forEach(function(seat) {
  var params = {
    TableName: 'Seats',
    Item: {
      seatID: seat.seatID,
      price: seat.price,
      roomID: seat.roomID
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error(
        'Unable to add movie',
        seat.seatID,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('PutItem succeeded:', seat.seatID);
    }
  });
});
