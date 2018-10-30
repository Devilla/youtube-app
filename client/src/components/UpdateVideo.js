import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
const getBooksQuery = gql`
{
  book(id:"1")
  {
    name
  }
}
`

class UpdateVideo extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoID : "k12SKt794YU",
      videoTitle : "",
      videoDescription : "",
      videoPrivacy : ""
    };
  }
  render(){
    const { videoID , videoTitle, videoDescription,videoPrivacy } = this.state;
    console.log(this.props);
    return (
      <div>
      <h3>Update Video details</h3>
      <input type="text" placeholder="Enter unique video ID" value={videoID}/>
      <input type="text" placeholder="Enter title" value={videoTitle}/>
      <input type="text" placeholder="Enter description" value={videoDescription}/>
      <input type="text" placeholder="Enter video privacy public/private" value={videoPrivacy}/>
      <input type="submit"/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(UpdateVideo);
