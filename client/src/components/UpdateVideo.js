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
  render(){
    console.log(this.props);
    return (
      <div>
      <h3>Update Video details</h3>
      <input type="text" placeholder="Enter unique video ID"/>
      <input type="text" placeholder="Enter title"/>
      <input type="text" placeholder="Enter description"/>
      <input type="text" placeholder="Enter video privacy"/>
      <input type="submit"/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(UpdateVideo);
