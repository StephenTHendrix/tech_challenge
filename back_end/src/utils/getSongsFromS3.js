const aws = require("aws-sdk");

const getSongsFromS3 = async () => {
  const s3 = new aws.S3({ httpOptions: { timeout: 2000 } });
  const bucket = process.env.SONG_BUCKET;
  const key = process.env.SONG_KEY;
  const params = { Bucket: bucket, Key: key };
  const songs = await s3.getObject(params).promise();
  return songs;
};

exports.getSongsFromS3 = getSongsFromS3;
