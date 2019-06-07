import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import Icon from '../Icons/Icon';
import styled from 'styled-components';

const SearchInput = styled.div`
  position: relative;
  height: 2.2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5vw;
  margin: 0 2rem;
  border-bottom: 1px lightgray solid;
  margin-bottom: 4rem;
  & > * {
    display: flex;
    align-items: center;
  }
`;
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

const InputBg = styled.div`
  position: absolute;
  display: flex;
  opacity: 1;
  align-items: center;
  color: grey;
  width: 100%;
  justify-content: center;
  z-index: -1;
  span {
  font-weight: 500;
}
`;

const InputMain = styled.div`
  height: 100%;
    form {
      height: 100%;
      input {
      height: 100%;
      background: transparent;
      font-size: 1rem;
      padding: 0 0.5rem;
      font-weight: bold;
      outline: none;
      color: #2a2a2a;
      border: 2px solid lightgray;
      }
    }
    &:focus-within + div {
      opacity: 0.1;
    }
`;
const iconStyles = {
    fill: "#2a2a2a",
    margin: "0 1.2rem 0 0",
    padding: "0.7rem"
  }
const SearchBar = ({ runSearch, searchValue, handleSearchInput }) => {
  return (
    <Header>
      <div className="s-logo">
        <Icon icon="instagram" fill="#2a2a2a" width="40%" padding="0.7rem" />
        <ImgDiv>
          <img src={logo} alt="logo" />
        </ImgDiv>
      </div>
      <Spacer />
      <SearchInput>
        <InputMain>
          <form onSubmit={e => runSearch(e)}>
            <input
              type="text"
              name="search"
              onChange={e => handleSearchInput(e.target.value)}
              id="search"
              value={searchValue}
            />
          </form>
        </InputMain>
        <InputBg>
          <Icon
            icon="search"
            fill="grey"
            width="11px"
            padding="0"
            margin="0 4px 0 0" />
          <span>Search</span>
        </InputBg>
      </SearchInput>
      <Spacer />
      <div className="s-icons">
        <Icon
          icon="compass"
          {...iconStyles}
        />
        <Icon
          icon="heart"
          {...iconStyles}
        />
        <Icon
          icon="user"
          {...iconStyles}
        />
      </div>
    </Header>
  );
};

SearchBar.propTypes = {
  runSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  handleSearchInput: PropTypes.func.isRequired
};
export default SearchBar;
