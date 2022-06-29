import React from 'react';
import styled from 'styled-components';
import NakedButton from '../../../NakedButton';

const Button = styled(NakedButton)`
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