import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button'

const Wrapper = styled.div`
  margin-bottom: -60px; //overlap between background img and PageHeader
`;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-right: 32px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding: 16px 0;
  margin: 0 16px;
  cursor: pointer;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  &:hover {
    color: rgb(255, 255, 255, 0.8);
    //When only use border-top: 2px solid white, MenuItem and border-top will move down 2px
    //So, have to create a transparent border first, once hover, turn border color to white 
    //by using border-top: 2px solid transparent; + border-top-color: white;
    border-top-color: white;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center; //for Logo alignment
`;

const Right = styled.div`
  display: flex;
  margin-left: auto; //separate Left and Right
`;

const PageHeader = () => (
  <Wrapper>
    <Container>
      <Left>
        <Logo>My Airtasker</Logo>
        <Button size='sm'>Post a task</Button>
        <MenuItem>Categories</MenuItem>
        <MenuItem>Browse tasks</MenuItem>
        <MenuItem>How it works</MenuItem>
      </Left>
      <Right>
        <MenuItem>Sign up</MenuItem>
        <MenuItem>Log in</MenuItem>
      </Right>
    </Container>
  </Wrapper>
);

export default PageHeader;