import styled, { css } from 'styled-components';

const Input = styled.input`
  display: block; //individual line
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(187, 194, 220);
  border-radius: 4px;
  padding: 12px;

  ${(props) => props.error && css`
    border-color: rgb(231, 82, 69);
  `}
`;

export default Input;