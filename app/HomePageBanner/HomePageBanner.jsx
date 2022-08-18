import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import LogInModal from "../LogInModal";
import withModal from "../../components/withModal";

const Wrapper = styled.div`
  height: calc(100vh - 120px);
  max-height: 650px;
  background: url("https://www.airtasker.com/images/open-graph/general.jpg");
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

const HomePageBanner = ({
  user,
  handleUserChange,
  showModal,
  handleShowModalChange,
  closeModal,
}) => (
  <Wrapper>
    <Container>
      <Heading>Connect with experts to get the job done on Airtasker</Heading>
      <Sub>It's amazing what you can't do yourself</Sub>
      <div>
        {/* Ternary Expression */}
        {user ? (
          <Button>Get started now</Button>
        ) : (
          <>
            <Button onClick={() => handleShowModalChange("logIn")}>
              Log in
            </Button>
            {showModal === "logIn" && (
              <LogInModal
                closeModal={closeModal}
                // onLogIn={(newUser) => this.handleUserChange(newUser)}
                // can be simplify to onLogIn={this.handleUserChange}
                onLogIn={(newUser) => {
                  handleUserChange(newUser);
                  closeModal(); // In here, '()' is necessary
                }}
              />
            )}
          </>
        )}
      </div>
    </Container>
  </Wrapper>
);
export default withModal(HomePageBanner);
