import React from 'react';
import styled from 'styled-components';
import CallToAction from './components/CallToAction';

const Wrapper = styled.div`
  height: calc(100vh - 120px);
  max-height: 650px;
  background: url('https://www.airtasker.com/images/open-graph/general.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 20%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 880px;
  margin: auto;
`;

const Heading = styled.h1`
  color: white;
  font-size: 48px;
  line-height: 52px;
`;

const Sub = styled.p`
  color: white;
  font-size: 34px;
  line-height: 40px;
`;

const HomePageBanner = () => (
  <Wrapper>
    <Container>
      <Heading>Connect with experts to get the job done on Airtasker</Heading>
      <Sub>It's amazing what you can't do yourself</Sub>
      {/* CallToAction includes Log in Button and UserContext using */}
      {/* Demonstrate Consumer consume Provider in the 3rd layer  */}
      <CallToAction />
    </Container>
  </Wrapper>
);
export default HomePageBanner;
