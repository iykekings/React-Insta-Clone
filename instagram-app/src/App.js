import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthentication from './authentication/withAuthentication';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const HigherOrderComponent = withAuthentication(PostsPage)(LoginPage);
    return (
      <div className="App">
        <HigherOrderComponent />
      </div>
    );
  }
}
