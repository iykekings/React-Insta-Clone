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
  return (
    <div className="App">
      <SearchBar />
      <section className="all-posts">
        {posts.map(post => (
          <PostContainer
            key={post.username}
            {...post}
            toggleLike={() => toggleLike(post.id)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
