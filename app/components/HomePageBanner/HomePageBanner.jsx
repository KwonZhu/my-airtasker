import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 120px);
  max-height: 650px;
  background: url('https://eu7cmie.cloudimg.io/v7/www.airtasker.com/static/assets/4a8888135ef14b2b.png');
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
      <Heading>
        Connect with experts to get the job done on Airtasker
      </Heading>
      <Sub>
        It's amazing what you can't do yourself
      </Sub>
    </Container>
  </Wrapper>
);
export default HomePageBanner;