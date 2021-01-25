# iHeartMedia - Music Lab - Code Challenge

## Updates

### Back End

- Multiple lambda handlers

- GraphQL implemented for new song detail handler; get only as many details as you want

- Modular functions for retrieving data from S3 and handling errors

- Deployed on AWS

### Front End

- Updated styling

- New page that utilizes new handler input to get details about a song

- General refactoring; for example, song data is retrieved in `App.js`, which is passed through the application along with song keys

---

## Getting Started

### Back End

---

**These instructions are only to help you get started with your own project; they are not required to see the deployed demo.**

The back end was bootstrapped from the AWS SAM CLI Hello World Example. The original README has been left in in a nearly-unaltered state in case it can be useful.

- Make sure you have the AWS CLI installed and configured (I used version 2):

https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html

- Place `songData.json` in an AWS S3 bucket.

https://aws.amazon.com/s3/

- Install and configure the AWS SAM CLI:

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

- Replace the `bucket` and `key` variables with the appropriate values from S3.

- Navigate to the `back_end` folder in a terminal, and run the following commands:

`sam build`

 `sam local start-api -p 8080`

 If you want to deploy, run `sam deploy --guided`. You will also have to grant appropriate permissions in the AWS console.

### Front End

---

- Navigate to the `front_end` folder in a terminal, and run the command `npm i`.

- Once all of the dependencies have installed, run the command `npm start`.

That's it! You should be able to navigate to the `/songs` page from the landing page, where you'll see the songs from `songData.json` displayed in a table. You can scroll vertically and horizontally, and sort the data either ascending or descending by column name.

You can now navigate to the `/song` page, which will allow you to search for a song and find more information about it.

### Final Result:

---
<p align="center">
  <img src="AllSongs.gif" />
</p>
<p align="center">
  <img src="SongDetail.gif" />
</p>

### Attributions:

- Header Favicon:

https://icon-icons.com/icon/music-melody-musical-note-music-sheet/113840

- Loading Gif: 

https://www.pinterest.com/pin/766386061564859410/

- Sort Arrow:

https://www.flaticon.com/free-icon/arrow-down-sign-to-navigate_32195?related_id=32195

- Tutorials, examples, and docs:

https://dev.to/lambdastore/serverless-tutorial-serverless-graphql-api-28ip/

https://dev.to/lambdastore/serverless-tutorial-build-a-serverless-leaderboard-321a

https://www.apollographql.com/blog/4-simple-ways-to-call-a-graphql-api-a6807bcdb355/

https://graphql.org/graphql-js/
