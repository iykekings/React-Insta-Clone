import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Storage from './localStorage';
import dummyData from './assets/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


export default class App extends Component{
  constructor() {
    super();
    this.state = {
      posts: [],
      serachResult: []
    }
    this.store = new Storage('posts');
  }

  componentDidMount() {
    const itemsInStore = this.store.getAllItems();
    if(itemsInStore.length < 1) {
      this.setState({posts: dummyData});
      console.log(this.state);
    } else {
      this.setState({posts: itemsInStore})
      console.log(itemsInStore);
    }
  }

  componentDidUpdate() {
    this.store.overrideWith(this.state.posts);
  }

  toggleLike = id => {
    const newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        post.liked = !post.liked;
      }
      return post;
    });
  this.setState({posts: [...newPosts]});
  };

  addComment = (e, id) => {
    e.preventDefault();
    let input = e.target.querySelector('input[type="text"]');
    const newPosts = this.state.posts.map(post => {
      if (post.id === id && !!input.value) {
        post.comments.push({ username: 'User', text: input.value });
      }
      return post;
    });
    this.setState({posts: [...newPosts]});
    input.value = '';
  };
  render() {
    return (
    <div className="App">
      <SearchBar />
      <section className="all-posts">
        {this.state.posts.map(post => (
          <PostContainer
            key={post.username}
            {...post}
            addComment={(e, id) => this.addComment(e, post.id)}
            toggleLike={() => this.toggleLike(post.id)}
          />
        ))}
      </section>
    </div>
  );
  }
}