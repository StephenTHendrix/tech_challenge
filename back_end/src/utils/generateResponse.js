const generateResponse = (
  statusCode,
  body,
  headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    "Access-Control-Allow-Origin": "*",
  }
) => {
  return { statusCode, headers, body: JSON.stringify(body) };
};

exports.generateResponse = generateResponse;
