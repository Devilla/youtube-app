const { nodeEnv } = require('./util');
console.log("loda",process.argv[1]);
console.log(`Running in ${nodeEnv} mode...`);

//Read the query from the commandline arguments
const query =  process.argv[1];


const ncSchema = require('../schema');
const { graphql } = require('graphql');

//Execute the query against the server schema
graphql(ncSchema, query).then(result =>{
   console.log("Results : ",result);
});
