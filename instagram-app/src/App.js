import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}
