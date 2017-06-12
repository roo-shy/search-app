import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let users = [];

fetch(endpoint)
 .then(blob => blob.json())
 .then(data => users.push(...data))
 
 function findMatches(wordToMatch, users) {
   return users.filter(place => {
     const regex = new RegExp(wordToMatch, 'gi');
     return place.city.match(regex) || place.state.match(regex)
   });
 }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input> {findMatches()}</input>
        </p>
      </div>
    );
  }
}

export default App;
