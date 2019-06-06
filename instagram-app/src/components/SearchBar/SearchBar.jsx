import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import logo from '../../assets/logo.png';
import Icon from '../Icons/Icon';

const SearchBar = ({runSearch, searchValue, handleSearchInput}) => {
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
          <form onSubmit={(e) => runSearch(e)}>
            <input type="text" name="search" onChange={(e) => handleSearchInput(e.target.value)} id="search" value={searchValue}/>
          </form>
        </div>
      </div>
      <div className="spacer" />
      <div className="s-icons">
        <Icon icon="compass" fill="#2a2a2a" />
        <Icon icon="heart" fill="#2a2a2a" />
        <Icon icon="user" fill="#2a2a2a" />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  runSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  handleSearchInput: PropTypes.func.isRequired
}
export default SearchBar;
