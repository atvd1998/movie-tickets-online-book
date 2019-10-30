const router = require('express').Router();
const aws = require('aws-sdk');
aws.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});
let docClient = new aws.DynamoDB.DocumentClient();
router.route('/').get((req, res) => {
  let params = {
    TableName: 'Movies'
  };

  docClient.scan(params, (err, data) => {
    res.send(data);
    res.end();
  });
});
router.route('/:id').get((req, res) => {
  let id = req.params.id;
  let params = {
    TableName: 'Movies'
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
router.route('/add').post((req, res) => {
  let params = {
    TableName: 'Movies',
    ConditionExpression: 'attribute_not_exists(movieID)',
    Item: {
      movieID: String(req.body.movieID),
      movieName: String(req.body.movieName),
      director: String(req.body.director),
      casters: String(req.body.casters),
      durable: Number(req.body.durable),
      style: String(req.body.style),
      ages: Number(req.body.ages),
      img: String('assets/images/addams.jpg'),
      state: String('available'),
      detail: String(req.body.detail)
    }
    
  };
  docClient.put(params, (err, data) => {
    if (err) {
      res.send('Không thể thêm phim vì trùng mã');
    } else {
      res.send('Thêm phim thành công');
    }
  });
});
router.route('/:movieid').delete((req, res) => {
  let params = {
    TableName: 'Movies',
    Key: {
      movieID: String(req.params.movieid)
    }
  };
  docClient.delete(params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Xóa phim thành công');
    }
  });
});

module.exports = router;
