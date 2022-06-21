import React from 'react';
import styled, { css } from 'styled-components'; //{css} is a css handler for css block in 'return css``'

const StyleButton = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  color: white;
  background-color: rgb(224, 68, 109);
  font-weight: bold;
  border-radius: 160px;

  ${({size}) => {
    return {
      sm: css`
        font-size: 14px;
        padding: 4px 16px;
      `,
      md: css`
        font-size: 18px;
        padding: 16px 24px;
      `,
      //low maintenance  in the future
      lg: css``,
      xl: css``,
    }[size || 'md'];
  }}
`;

const Button = ({ children, size }) => ( //get props
  <StyleButton size={size}>{children}</StyleButton> //pass size to StyleButton
);

export default Button;