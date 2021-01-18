# iHeartMedia - Music Lab - Code Challenge

## Getting Started

### Back End

---

The back end was bootstrapped from the AWS SAM CLI Hello World Example. The original README has been left in in a nearly-unaltered state in case it can be useful.

- Make sure you have the AWS CLI installed and configured (I used version 2):

https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html

- Place `songData.json` in an AWS S3 bucket.

https://aws.amazon.com/s3/

- Install and configure the AWS SAM CLI:

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

- Replace the `bucket` and `key` variables with the appropriate values from S3.

- Navigate to the `back_end` folder in a terminal, and run the command `sam local start-api -p 8080`.

### Front End

---

- Navigate to the `front_end` folder in a terminal, and run the command `npm i`.

- Once all of the dependencies have installed, run the command `npm start`.

That's it! You should be able to navigate to the `/songs` page from the landing page, where you'll see the songs from `songData.json` displayed in a table. You can scroll vertically and horizontally, and sort the data either ascending or descending by column name.

### Final Result:

---

![Alt Text](songDatabase.gif)

### Attributions:

- Header Favicon:

https://icon-icons.com/icon/music-melody-musical-note-music-sheet/113840

- Loading Gif: 

https://www.pinterest.com/pin/766386061564859410/

- Sort Arrow:

https://www.flaticon.com/free-icon/arrow-down-sign-to-navigate_32195?related_id=32195