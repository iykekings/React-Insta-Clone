import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Storage from './localStorage';
import dummyData from './assets/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchValue: '',
      searchResult: []
    };
    this.store = new Storage('posts');
  }

  componentDidMount() {
    const itemsInStore = this.store.getAllItems();
    if (itemsInStore.length < 1) {
      this.setState({ posts: dummyData });
    } else {
      this.setState({ posts: itemsInStore });
    }
  }

  componentDidUpdate() {
    this.store.overrideWith(this.state.posts);
  }

  toggleLike = id => {
    console.log('clicked');
    const newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        if (post.liked === true) {
          post.liked = false;
          --post.likes;
        } else {
          post.liked = true;
          ++post.likes;
        }
      }
      return post;
    });
    this.setState({ posts: [...newPosts] });
  };

  runSearch(e) {
    e.preventDefault();
    const result = this.state.posts.filter(post =>
      post.username.includes(this.state.searchValue)
    );
    this.setState({ searchResult: result });
  }

  handleSearchInput(val) {
    this.setState({searchValue: val});
    if(val === '') {
      this.setState({searchResult: []});
    }
  }

  addComment = (e, id) => {
    e.preventDefault();
    let input = e.target.querySelector('input[type="text"]');
    const newPosts = this.state.posts.map(post => {
      if (post.id === id && !!input.value) {
        post.comments.push({ username: 'User', text: input.value });
      }
      return post;
    });
    this.setState({ posts: [...newPosts] });
    input.value = '';
  };
  render() {
    return (
      <div className="App">
        <SearchBar
          runSearch={e => this.runSearch(e)}
          searchValue={this.state.searchValue}
          handleSearchInput={(val) => this.handleSearchInput(val)}
        />
        <section className="all-posts">
          {this.state.searchResult.length > 0 ? <h2 id="search-header">Search Results</h2> : ''}
          {this.state.searchResult.length > 0
            ? this.state.searchResult.map(post => (
                <PostContainer
                  key={post.username}
                  {...post}
                  addComment={e => this.addComment(e, post.id)}
                  toggleLike={() => this.toggleLike(post.id)}
                />
              ))
            : this.state.posts.map(post => (
                <PostContainer
                  key={post.username}
                  {...post}
                  addComment={e => this.addComment(e, post.id)}
                  toggleLike={() => this.toggleLike(post.id)}
                />
              ))}
        </section>
      </div>
    );
  }
}
