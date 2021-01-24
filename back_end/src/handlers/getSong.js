const { graphql, buildSchema } = require("graphql");

const { generateResponse } = require("../utils/generateResponse");
const { getSongsFromS3 } = require("../utils/getSongsFromS3");

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

const root = {
  getSongInfo: async ({ song }) => {
    const data = await getSongsFromS3();
    const parsedData = JSON.parse(data.Body.toString());
    const foundSong = parsedData.find((songObject) => songObject.song === song);
    let map = {};
    Object.keys(foundSong).map((key) => (map[key] = () => foundSong[key]));
    return map;
  },
};

exports.handler = async (event, context) => {
  const result = await graphql(schema, event.body, root);

  // if (result.errors) {
  //   return generateResponse(401, "Invalid argument");
  // }

  // The check above works to customize the error response, but graphQL seems to be great at handling errors with specificity; I've left it out for now.

  return generateResponse(200, result);
};
