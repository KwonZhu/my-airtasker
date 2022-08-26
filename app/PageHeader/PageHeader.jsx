import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Modal, { CloseButton } from '../../components/Modal';
import SignUPModal from './components/SignUpModal';
import NakedButton from '../../components/NakedButton';
import LogInModal from '../LogInModal';
import withModal from '../../components/withModal';
import UserContext from '../UserContext';

const Wrapper = styled.div`
  margin-bottom: -60px; //overlap between background img and PageHeader
`;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  height: 60px;
  display: flex;
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
  padding: 12px 0;
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
  align-items: center; //Logo and Post a task alignment
`;

const Right = styled.div`
  display: flex;
  align-items: center; //Become a Tasker alignment
  margin-left: auto; //left will take all the space. separate Left and Right
`;

const PageHeader = ({ showModal, handleShowModalChange, closeModal }) => (
  // UserContext call Consumer to act as a consumer to get value, which was provided by Provider
  <UserContext.Consumer>
    {({ user, handleUserChange }) => (
      // continue when the callback function get Provider's value
      <Wrapper>
        <Container>
          <Left>
            <Logo>My Airtasker</Logo>
            <Button
              size="sm"
              onClick={() => handleShowModalChange('postATask')}
            >
              Post a task
            </Button>
            {showModal === 'postATask' && (
              <Modal onClose={closeModal}>
                <CloseButton onClick={closeModal} />
                Post a task
              </Modal>
            )}
            <MenuItem>Categories</MenuItem>
            <MenuItem as="a">Browse tasks</MenuItem>
            {/* render as a <a> tag instead of a <div> */}
            <MenuItem as="a">How it works</MenuItem>
          </Left>
          <Right>
            {user ? (
              <MenuItem>{user.email}</MenuItem>
            ) : (
              // <React.Fragment>or<> is used to fix missing parent element problem in Conditional Operator
              <React.Fragment>
                <MenuItem
                  as={NakedButton}
                  onClick={() => handleShowModalChange('signUp')}
                >
                  Sign up
                </MenuItem>
                {/* <=> <MenuItem onClick={this.handleSignUpOnClick}>Sign up</MenuItem> */}
                {showModal === 'signUp' && (
                  <SignUPModal closeModal={closeModal} />
                )}
                <MenuItem
                  as={NakedButton}
                  onClick={() => handleShowModalChange('logIn')}
                >
                  Log in
                </MenuItem>
                {showModal === 'logIn' && (
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
              </React.Fragment>
            )}
            <Button size="sm" variant="transparent">
              Become a Tasker
            </Button>
          </Right>
        </Container>
      </Wrapper>
    )}
  </UserContext.Consumer>
);

export default withModal(PageHeader);
