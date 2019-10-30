var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
  region: 'local',
  endpoint: 'http://localhost:8000'
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing movies into DynamoDB. Please wait.');

var allMovies = JSON.parse(fs.readFileSync('Schedule.json', 'utf8'));
allMovies.forEach(function(schedule) {
  var params = {
    TableName: 'Schedules',
    Item: {
      movieID: schedule.movieID,
      scheduleID: schedule.scheduleID,
      month: schedule.month,
      date: schedule.date,
      day: schedule.day,
      hour: schedule.hour,
      ticketDetail: schedule.ticketDetail,
      roomID: schedule.roomID
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error(
        'Unable to add movie',
        schedule.movieID,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('PutItem succeeded:', schedule.movieID);
    }
  });
});
