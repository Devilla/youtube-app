const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

const app = require('express')();
//Read the query from the commandline arguments
// const query =  process.argv[2];

const ncSchema = require('../schema');
// const { graphql } = require('graphql');

const graphqlHTTP = require('express-graphql');


app.use('/graphql', graphqlHTTP({
  schema : ncSchema,
  graphiql :  true
}));

//Execute the query against the server schema
// graphql(ncSchema, query).then(result =>{
//    console.log("Results : ",result);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
  console.log(`server is listening on ${PORT}`);
})
