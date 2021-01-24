const { getSongsFromS3 } = require("../utils/getSongsFromS3");
const { generateResponse } = require("../utils/generateResponse");

exports.handler = async (event, context) => {
  try {
    const data = await getSongsFromS3();
    let parsedData = JSON.parse(data.Body.toString());
    return generateResponse(200, parsedData);
  } catch (err) {
    return generateResponse(401, "Failed to retrieve data");
  }
};
