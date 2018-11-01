import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
let id = "asdasdsd";
let title="No title";
let description = "NO Description";
let privacy = "private";
const getQuery = gql`
{
  videos(id: "5bd8e92a1198b038fae308a8")
  {
    title
    description
    privacy
    id
  }
}
`

const addMutationQuery = gql`
mutation {
 addVideo(id: "",title:"", description:"", privacy:"")
 {
   title
   description
   privacy
   id
 }
}
`

class UpdateVideo extends Component {

  handlechange = (e) =>{
    e.target.id = e.target.value;
    console.log(id,title,description,privacy);
    this.props.addMutationQuery();
  }

  render(){
    console.log(this.props);
    return (
      <div>
      <h3>Update Video details</h3>
      <input id="id" type="text" placeholder="Enter unique video ID" onChange={this.handlechange}/>
      <input id="title" type="text" placeholder="Enter title"  onChange={(e)=>{title=e.target.value}}/>
      <input id="description" type="text" placeholder="Description" onChange={(e)=>{description=e.target.value}}/>
      <input id="privacy" type="text" placeholder="Video privacy (public/private)" onChange={(e)=>{privacy=e.target.value}}/>
      <input type="submit"/>
      </div>
    );
  }
}

export default compose(
  graphql(getQuery, {name: "getQuery"}),
  graphql(addMutationQuery, {name: "addMutationQuery"})
)(UpdateVideo);
