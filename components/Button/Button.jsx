// import React from 'react';
// no need react any more, since change function component Button to styled component Button
import styled, { css } from 'styled-components'; //{css} is a css handler for css block in 'return css``'

const Button = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  font-weight: bold;
  border-radius: 160px;

  ${({size}) => { //destructuring
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

  ${(props) => ({ //without destructuring
    primary: css`
      background-color: rgb(224, 68, 109);
      color: white;
      border: 2px solid rgb(224, 68, 109);
    `,
    transparent: css`
      background-color: transparent;
      color: white;
      border: 2px solid white;
    `
  }[props.variant || 'primary'])}
`;

export default Button;