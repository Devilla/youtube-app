const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = graphql;

//Dummy data
var books = [
  {name:'The legend of bhagat singh', genre:'patriotic', id:'1'},
  {name: 'Harry Porter', genre:'Magic,action', id:'2'},
  {name: 'The Hound of BaskerVille', genre:'Mystery, Detective Fiction', id:'3'}
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args:{ id: {type: GraphQLString}},
      resolve(parent, args){
        // code to get data from api sources
      return _.find(books, {id:args.id});
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});
