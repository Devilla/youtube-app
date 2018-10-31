import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
let id = "5bd8ee8dce53da3cf2eece76";
let title;
let description;
let privacy;
let getQuery = gql`
mutation{
  addVideo(id: "5bd8ee8dce53da3cf2eece76", title:"Good Morning", description: "NOthing", privacy: "public")
  {
    title
    description
    privacy
    id
  }
}
`

class UpdateVideo extends Component {

  render(){
    console.log(this.props);
    return (
      <div>
      <h3>Update Video details</h3>
      <input type="text" placeholder="Enter unique video ID" onChange={(e)=>{id=e.target.value}}/>
      <input type="text" placeholder="Enter title"  onChange={(e)=>{title=e.target.value}}/>
      <input type="text" placeholder="Description" onChange={(e)=>{description=e.target.value}}/>
      <input type="text" placeholder="Video privacy (public/private)" onChange={(e)=>{privacy=e.target.value}}/>
      <input type="submit"/>
      </div>
    );
  }
}

export default graphql(getQuery)(UpdateVideo);
