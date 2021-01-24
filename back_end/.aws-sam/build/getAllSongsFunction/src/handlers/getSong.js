const {
  graphql,
  buildSchema
} = require("graphql");

let response;
const aws = require("aws-sdk");
var s3 = new aws.S3({ httpOptions: { timeout: 2000 } });
//replace these with your values
const bucket = process.env.SONG_BUCKET;
const key = process.env.SONG_KEY;
var params = { Bucket: bucket, Key: key };

const getSongInfo = async (song) => {
  const data = await s3.getObject(params).promise();
  const parsedData = JSON.parse(data.Body.toString());
  const foundSong = parsedData.find((songObject) => songObject.song === song);
  return foundSong;
  // if (foundSong) {
  //   const map = {};
  //   const infoToInclude = Object.keys(args);
  //   infoToInclude.map((arg) => (map[arg] = foundSong[arg]));
  //   return JSON.stringify(map);
  // } else {
  //   throw new Error("nah");
  // }
};

var schema = buildSchema(`
  type SongInfo {
    song: String,
    artist: String,
    songReleaseDate: String,
    playCount: Int,
    metricA: Int,
    metricB: Int,
    metricC: Int,
    metricD: Int,
    metricE: Int,
    metricF: Int,
    metricG: Int,
    metricH: Int,
    metricI: Int,
    metricJ: Int,
    metricK: Int,
    metricL: Int,
    metricM: Int,
    metricN: Int,
    metricO: Int,
    metricP: Int
  }
 
  type Query {
    getSongInfo(song: String): SongInfo
  }
`);
 
var root = {
  getSongInfo: async ({song}) => {
    const songObject = await getSongInfo(song)
    let map = {};
    Object.keys(songObject).map(key => map[key] = () => songObject[key])
    return map;
  }
}


exports.handler = async (event, context) => {
  try {
    const result = await graphql(schema, event.body, root);
    response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(result),
    };
  } catch (err) {
    // console.log(err);
    response = {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Origin": "*",
      },
      body: "nah bro",
    };
  }
  return response;
};
