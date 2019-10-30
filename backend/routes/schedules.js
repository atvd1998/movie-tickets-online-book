const router = require('express').Router();
const aws = require('aws-sdk');
const uuid = require('uuid/v1');
aws.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});
let docClient = new aws.DynamoDB.DocumentClient();

router.route('/:id').get((req, res) => {
  let id = req.params.id;
  let params = {
    TableName: 'Schedules'
  };
  params.KeyConditionExpression = '#n = :id';
  params.ExpressionAttributeNames = {
    '#n': 'movieID'
  };
  params.ExpressionAttributeValues = {
    ':id': String(id)
  };
  docClient.query(params, (err, data) => {
    res.send(data);
  });
});

router.route('/:movieID/:scheduleID').get((req, res) => {
  let movieID = req.params.movieID;
  let scheduleID = req.params.scheduleID;
  let params = {
    TableName: 'Schedules'
  };
  params.KeyConditionExpression = '#m = :movieid and #s = :scheduleid';
  params.ExpressionAttributeNames = {
    '#m': 'movieID',
    '#s': 'scheduleID'
  };
  params.ExpressionAttributeValues = {
    ':movieid': String(movieID),
    ':scheduleid': String(scheduleID)
  };
  docClient.query(params, (err, data) => {
    res.send(data);
  });
});

router.route('/add/:movieid/:scheduleid').get((req, res) => {
  let movieID = req.params.movieid;
  let scheduleID = req.params.scheduleid;
  let ticketDetailID = req.query.ticketDetailID;
  let seatID = req.query.seatID;
  let params = {
    TableName: 'Schedules',
    Key: {
      movieID: String(movieID),
      scheduleID: String(scheduleID)
    },
    UpdateExpression: 'SET ticketDetail = list_append(ticketDetail, :obj)',
    ExpressionAttributeValues: {
      ':obj': [
        {
          ticketDetailID: String(ticketDetailID),
          seatID: String(seatID)
        }
      ]
    }
  };
  docClient.update(params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Thành công');
    }
  });
});

router.route('/add').post((req, res) => {
  let params = {
    TableName: 'Schedules',
    Item: {
      movieID: String(req.body.movieID),
      scheduleID: uuid(),
      month: Number(req.body.month),
      date: Number(req.body.date),
      day: String(req.body.day),
      hour: String(req.body.hour),
      roomID: String(req.body.roomID),
      ticketDetail: []
    }
  };
  docClient.put(params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Thêm thành công lịch chiếu');
    }
  });
});
router.route('/:movieid/:scheduleid').delete((req, res) => {
  let params = {
    TableName: 'Schedules',
    Key: {
      movieID: String(req.params.movieid),
      scheduleID: String(req.params.scheduleid)
    }
  };
  docClient.delete(params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Xóa lịch chiếu thành công');
    }
  });
});
module.exports = router;
