import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <spna>{movieTitle}</spna>
    </Content>
  </Wrapper>
);

export default BreadCrumb;