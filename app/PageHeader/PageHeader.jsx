import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button'

const Wrapper = styled.div`
  margin-bottom: -60px;
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

const PageHeader = () => (
  <Wrapper>
    <Container>
      <Logo>My Airtasker</Logo>
      <Button size='sm'>Post a task</Button>
    </Container>
  </Wrapper>
);

export default PageHeader;