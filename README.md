# youtube-channel-manager
Nodejs server &amp; client react application to interact with your youtube channel


## Commands:
#### 1. npm install - To install dependencies.
#### 2. npm start - To run project and upload video.
#### 3. npm run update - To Update Video Fields such as title, description and video privacy settings.

## Application Specs:
It allows uploading a video to youtube channel (https://developers.google.com/youtube/v3/docs/videos/insert).

It allows updating/modifying an existing video on youtube channel. Fields such as title, description and video privacy settings can be updated. Video to update should be identified using youtube video unique id.

(https://developers.google.com/youtube/v3/docs/videos#properties)


## Technical Specs:
React client side code doesn't access youtube apis directly. It only access nodejs application apis which can access youtube apis. This is required for security purposes.
Any user of the system should ideally be able to change the credentials of the YouTube API by using a config file.


## API Specs:
API's between React Client and Node server uses GraphQL.

API's between Node server and YouTube data API use REST.

Link:https://developers.google.com/youtube/v3/quickstart/nodejs
