import React, { Component } from 'react';
import './App.css';
import withAuthentication from './authentication/withAuthentication';

const HOC = withAuthentication;
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <HOC />
      </div>
    );
  }
}
