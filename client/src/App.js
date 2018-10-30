import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {  ApolloProvider } from 'react-apollo';
import BookList from './components/BookList.js';

const client = new  ApolloClient({
  uri:'http://localhost:4000/graphql'
});

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
      <div id="main">
      <h1>MY App</h1>
      </div>
      <BookList/>
      </ApolloProvider>
    );
  }
}

export default App;
