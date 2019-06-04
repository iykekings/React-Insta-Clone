import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './assets/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  const [posts, setPosts] = useState({posts: dummyData});
  return (
    <div className="App">
      <SearchBar />
      <section className="all-posts">
        {posts.map(post => (
          <PostContainer key={post.username} {...post} />
        ))}
      </section>
    </div>
  );
}

export default App;
