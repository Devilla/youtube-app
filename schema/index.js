//Import TYpe helpers from graphql-js
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const MeType =  require('./types/me');

//The root query type is where in the data graphql
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    me : {
      type : MeType,
      description: 'The current user identified by an api key',
      args : {
        key: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: () => {
        //Read userinfo from Postgres database
        return {
          id: 42,
          email: 'dev.koold@gmail.com'
        };
      }
    }
  }
});

const ncSchema = new GraphQLSchema({
  query : RootQueryType
});

module.exports =  ncSchema;
