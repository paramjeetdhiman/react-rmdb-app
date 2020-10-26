import React from 'react';
import { Wrapper } from './Button.styles';
import PropTypes from 'prop-types';

const Button = ({ text, callback }) => {
  return (
    <Wrapper type="buttton" onClick={callback}>
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
