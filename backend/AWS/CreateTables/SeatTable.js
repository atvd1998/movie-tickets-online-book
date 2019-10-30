var AWS = require('aws-sdk');

AWS.config.update({
  region: 'local',
  endpoint: 'http://localhost:8000'
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: 'Seats',
  KeySchema: [
    { AttributeName: 'seatID', KeyType: 'HASH' },
    { AttributeName: 'roomID', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'seatID', AttributeType: 'S' },
    { AttributeName: 'roomID', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  },
  GlobalSecondaryIndexes: [
    {
        IndexName: 'roomid_index',
        KeySchema: [
            { AttributeName: "roomID", KeyType: "HASH"}
        ],
        Projection: {
            ProjectionType: 'ALL'
        },
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    }
]
};

dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.error(
      'Unable to create table. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      'Created table. Table description JSON:',
      JSON.stringify(data, null, 2)
    );
  }
});
