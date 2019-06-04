import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './assets/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  const [posts, setPosts] = useState([...dummyData]);

  const toggleLike = id => {
    const newPosts = posts.map(post => {
      if (post.id === id) {
        post.liked = !post.liked;
      }
      return post;
    });
    setPosts([...newPosts]);
  };

  const addComment = (e, id) => {
    e.preventDefault();
    let input = e.target.querySelector('input[type="text"]');
    const newPosts = posts.map(post => {
      if (post.id === id && !!input.value) {
        post.comments.push({ username: 'User', text: input.value });
      }
      return post;
    });
    setPosts([...newPosts]);
    input.value = '';
  };

  return (
    <div className="App">
      <SearchBar />
      <section className="all-posts">
        {posts.map(post => (
          <PostContainer
            key={post.username}
            {...post}
            addComment={(e, id) => addComment(e, post.id)}
            toggleLike={() => toggleLike(post.id)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
