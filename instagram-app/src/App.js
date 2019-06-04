import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './assets/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <section className="all-posts">
        {dummyData.map(data => (
          <PostContainer key={data.username} {...data} />
        ))}
      </section>
    </div>
  );
}

export default App;
