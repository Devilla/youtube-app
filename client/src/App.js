import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {  ApolloProvider } from 'react-apollo';
// import BookList from './components/BookList.js';

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
      <h3>Update Video details</h3>
      <input type="text"
      placeholder="Enter unique video ID"/>
      <input type="text"
      placeholder="Enter title"/>
      <input type="text"
      placeholder="Enter description"/>
      <input type="text"
      placeholder="Enter video privacy"/>
      <input type="submit"/>
      <hr/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
