import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ primary, outline, plain, submit, children }) {
  const type = submit ? 'submit' : 'button';
  return <button type={type}>{children}</button>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  plain: PropTypes.bool,
  type: PropTypes.string
};
