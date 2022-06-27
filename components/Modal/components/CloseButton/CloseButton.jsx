import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  position: absolute;
  padding 16px;
  top: 0;
  right: 0;
  font-size: 16px;
`;

const CloseButton = ({
  onClick,
}) => (
  <Button onClick={onClick}>X</Button>
)

export default CloseButton;