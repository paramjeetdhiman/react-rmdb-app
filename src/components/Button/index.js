import React from 'react';
import { Wrapper } from './Button.styles';

const Button = ({ text, callback }) => {
  return (
    <Wrapper type="buttton" onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default Button;
