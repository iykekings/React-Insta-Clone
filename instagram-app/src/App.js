import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthentication from './authentication/withAuthentication';

const HigherOrderComponent = withAuthentication(PostsPage)(LoginPage);
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <HigherOrderComponent />
      </div>
    );
  }
}
