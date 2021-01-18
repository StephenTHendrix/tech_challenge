let response;
const aws = require("aws-sdk");
var s3 = new aws.S3({ httpOptions: { timeout: 2000 } });
//replace these with your values
const bucket = 'Your Bucket Here';
const key = 'Your Bucket Key Here';
var params = { Bucket: bucket, Key: key };

exports.getSongsLambdaHandler = async (event, context) => {
  try {
    const data = await s3.getObject(params).promise();
    let parsedData = JSON.parse(data.Body.toString());

    response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(parsedData),
    };
  } catch (err) {
    console.log(err);
    return err;
  }
  return response;
};
