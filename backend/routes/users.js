const router = require('express').Router();
const aws = require('aws-sdk');
aws.config.update({
  region: 'local',
  endpoint: 'http://localhost:8000'
});
let docClient = new aws.DynamoDB.DocumentClient();
router.route('/add').post((req, res) => {
  let params = {
    TableName: 'Users',
    ConditionExpression: 'attribute_not_exists(email)',
    Item: {
      email: String(req.body.email),
      password: String(req.body.password),
      name: String(req.body.fullname),
      phone: String(req.body.sdt),
      ticketDetail: []
    }
  };
  docClient.put(params, (err, data) => {
    if (err) {
      res.send('Không thể tạo tài khoản do tài khoản đã có sẵn trong hệ thống');
    } else {
      res.send('Tạo tài khoản thành công');
    }
  });
});

router.route('/:email').get((req, res) => {
  let email = req.params.email;
  let params = {
    TableName: 'Users'
  };
  params.KeyConditionExpression = '#e = :email';
  params.ExpressionAttributeNames = {
    '#e': 'email'
  };
  params.ExpressionAttributeValues = {
    ':email': String(email)
  };
  docClient.query(params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
module.exports = router;
