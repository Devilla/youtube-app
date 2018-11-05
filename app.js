const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const app = express();
const mongoose =  require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://devilla:dev123@ds147003.mlab.com:47003/gql');
mongoose.connection.once('open', () => {
  console.log('connected to database!');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
schema,
query: {
  videos(id = "5bd8e92a1198b038fae308a8")
  {
    title
    description
    privacy
    id
  }
}
}));
app.use(bodyParser.text({ type: 'application/graphql' }));
app.listen(4000, () => {
  console.log('App listening on port 4000');
});
