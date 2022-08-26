// import React from 'react';
// no need react any more, since change function component Button to styled component Button
import styled, { css } from 'styled-components'; //{css} is a css handler for css block in 'return css``'
import NakedButton from '../NakedButton';

const Button = styled(NakedButton)`
  font-weight: bold;
  border-radius: 160px;

  ${({ size }) => {
    //destructuring, prefer without destructuring
    return {
      sm: css`
        font-size: 14px;
        padding: 4px 16px;
      `,
      md: css`
        font-size: 16px;
        padding: 8px 18px;
      `,
      lg: css`
        font-size: 18px;
        padding: 16px 24px;
      `,
      //low maintenance  in the future
      xl: css``,
      xxl: css``,
    }[size || 'md'];
  }}

  ${(props) =>
    ({
      //without destructuring
      primary: css`
        background-color: rgb(224, 68, 109);
        color: white;
        border: 2px solid rgb(224, 68, 109);
      `,
      success: css`
        background-color: rgb(125, 179, 67);
        color: white;
        border: 2px solid rgb(125, 179, 67);
      `,
      transparent: css`
        background-color: transparent;
        color: white;
        border: 2px solid white;
      `,
    }[props.variant || 'primary'])}
`;

export default Button;
