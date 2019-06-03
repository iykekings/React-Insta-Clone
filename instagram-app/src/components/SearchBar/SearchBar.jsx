import React from 'react';
import './SearchBar.css';
import logo from '../../assets/logo.png';
import Icon from '../Icons/Icon';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="s-logo">
        <Icon icon="instagram" fill="#2a2a2a" />
        <div className="img-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="spacer" />
      <div className="s-input">
        <div className="input-bg">
          <Icon icon="search" fill="grey" />
          <span>Search</span>
        </div>
        <div className="input-main">
          <form>
            <input type="text" name="search" id="search" />
          </form>
        </div>
      </div>
      <div className="spacer" />
      <div className="s-icons">
        <Icon icon="compass" fill="#2a2a2a" />
        <Icon icon="heart" stroke="#2a2a2a" strokeWidth="15px" />
        <Icon icon="user" fill="#2a2a2a" />
      </div>
    </div>
  );
};

export default SearchBar;
