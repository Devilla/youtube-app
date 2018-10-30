import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {  ApolloProvider } from 'react-apollo';
import UpdateVideo from './components/UpdateVideo.js';

const client = new  ApolloClient({
  uri:'http://localhost:4000/graphql'
});

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
      <div id="main">
      <h1>Youtube Channel Maneger</h1>
      <h3>Upload Video</h3>
      <input type="file"/>
      <input type="submit"/>
      <br/>
      <hr/>
      <br/>
      <UpdateVideo/>
      <hr/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
