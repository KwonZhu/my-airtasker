import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  color: white;
  background-color: rgb(224, 68, 109);
  font-size: 18px;
  font-weight: bold;
  border-radius: 160px;
  padding: 16px 24px;
`;

const Button = ({ children }) => (
  <StyleButton>{children}</StyleButton>
);

export default Button;