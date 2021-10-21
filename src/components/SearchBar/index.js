import { useState, useEffect, useRef } from 'react';

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => (
  <Wrapper>
    <Content>
      <img src={searchIcon} alt="search-icon" />
      <input type="text" placeholder="Search Movie" />
    </Content>
  </Wrapper>
);

export default SearchBar;
