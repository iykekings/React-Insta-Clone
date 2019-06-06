import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import logo from '../../assets/logo.png';
import Icon from '../Icons/Icon';
import styled from 'styled-components';

const ImgDiv = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
  img {
    width: 80%;
  }
  &:before {
    content: '';
    background: #b7b6b6;
    height: 40px;
    width: 1px;
    margin-right: 12px;
    margin-left: 12px;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const SearchBar = ({ runSearch, searchValue, handleSearchInput }) => {
  return (
    <div className="search-bar">
      <div className="s-logo">
        <Icon icon="instagram" fill="#2a2a2a" width="40%" padding="0.7rem" />
        <ImgDiv>
          <img src={logo} alt="logo" />
        </ImgDiv>
      </div>
      <Spacer />
      <div className="s-input">
        <div className="input-bg">
          <Icon icon="search" fill="grey" />
          <span>Search</span>
        </div>
        <div className="input-main">
          <form onSubmit={e => runSearch(e)}>
            <input
              type="text"
              name="search"
              onChange={e => handleSearchInput(e.target.value)}
              id="search"
              value={searchValue}
            />
          </form>
        </div>
      </div>
      <Spacer />
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
};
export default SearchBar;
