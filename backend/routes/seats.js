const router = require('express').Router();
const aws = require('aws-sdk');
aws.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});
let docClient = new aws.DynamoDB.DocumentClient();

router.route('/:roomid').get((req, res) => {
  let id = req.params.roomid;
  let params = {
    TableName: 'Seats',
    IndexName: "roomid_index"
  };
  params.KeyConditionExpression = '#r = :id';
  params.ExpressionAttributeNames = {
    '#r': 'roomID'
  };
  params.ExpressionAttributeValues = {
    ':id': String(id)
  };
  docClient.query(params, (err, data) => {
    res.send(data);
  });
});

module.exports = router;
