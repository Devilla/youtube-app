import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
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
mutation($id: String!, $title: String!, $description: String!, $privacy: String!) {
 addVideo(id: $id, title: $title, description: $description, privacy: $privacy)
 {
   title
   description
   privacy
   id
 }
}
`

class UpdateVideo extends Component {

constructor(props){
  super(props);
  this.state = {
    id: "",
    title: "",
    description: "",
    privacy: ""
  };
}

  handlechange = (e) =>{
    this.props.addMutationQuery({
      variables: {
        id: this.state.id,
        title: this.state.title,
        description: this.state.description,
        privacy: this.state.privacy
      }
    });
  }

  render(){
    console.log(this.props);
    return (
      <div>
      <h3>Update Video details</h3>
      <input id="id" type="text" placeholder="Enter unique video ID" onChange={(e)=>{this.setState({id: e.target.value})}}/>
      <input id="title" type="text" placeholder="Enter title"  onChange={(e)=>{this.setState({title: e.target.value})}}/>
      <input id="description" type="text" placeholder="Description" onChange={(e)=>{this.setState({description: e.target.value})}}/>
      <input id="privacy" type="text" placeholder="Video privacy (public/private)" onChange={(e)=>{this.setState({privacy: e.target.value})}}/>
      <input type="submit" onClick={this.handlechange}/>
      </div>
    );
  }
}

export default compose(
  graphql(getQuery, {name: "getQuery"}),
  graphql(addMutationQuery, {name: "addMutationQuery"})
)(UpdateVideo);
