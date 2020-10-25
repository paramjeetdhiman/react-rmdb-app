import React, { useState, useEffect, useRef } from 'react';
import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true); /// it wont trigger rerender remember

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <>
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="search"
            placeholder="Search Movie"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </Content>
      </Wrapper>
    </>
  );
};

export default SearchBar;
