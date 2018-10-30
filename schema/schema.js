const graphql = require('graphql');
const _ = require('lodash');
const Video = require('../models/video');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = graphql;


const VideoType = new GraphQLObjectType({
  name: 'Video',
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    privacy: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    videos: {
      type: VideoType,
      args:{ id: {type: GraphQLString}},
      resolve(parent,args){
        return Video.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name:'Mutation',
  fields: {
    addVideo:{
      type: VideoType,
      args:{
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        privacy: {type: GraphQLString}
      },
      resolve(parent, args){
        let video = new Video({
          id: args.videoId,
          title: args.title,
          description: args.description,
          privacy: args.privacy
        });
        return video.save();
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
