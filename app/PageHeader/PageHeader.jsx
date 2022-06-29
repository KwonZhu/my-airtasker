import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button'
import Modal, { CloseButton } from '../../components/Modal';
import SignUPModal from '../PageHeader/components/SignUpModal'

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
  margin-left: auto; //separate Left and Right
`;

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: undefined,
      user: undefined,
    }
    this.handleShowModalChange = this.handleShowModalChange.bind(this);
    // this.handleSignUpOnClick = this.handleSignUpOnClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleShowModalChange(newShowModal) {
    this.setState({
      showModal: newShowModal,
    });
  }

  // handleSignUpOnClick() {
  //   this.setState({
  //     showModal: true,
  //   });
  // }

  closeModal() {
    this.handleShowModalChange();
  }

  handleUserChange(newUser) {
    this.setState({
      user: newUser,
    }); 
  }

  render() {
    const { showModal, user } = this.state;

    return (
      <Wrapper>
        <Container>
          <Left>
            <Logo>My Airtasker</Logo>
            <Button size="sm" onClick={() => this.handleShowModalChange('postATask')}>Post a task</Button>
            {showModal === 'postATask'&& (
              <Modal onClose={this.closeModal}>
                <CloseButton onClick={this.closeModal} />
                Post a task
              </Modal>
            )}
            <MenuItem>Categories</MenuItem>
            <MenuItem>Browse tasks</MenuItem>
            <MenuItem>How it works</MenuItem>
          </Left>
          <Right>
            {JSON.stringify(user)}
            <MenuItem onClick={() => this.handleShowModalChange('signUp')}>Sign up</MenuItem>
            {/* <=> <MenuItem onClick={this.handleSignUpOnClick}>Sign up</MenuItem> */}
            {showModal === 'signUp' && (
              <SignUPModal 
                closeModal={this.closeModal}
                onSignUp={(data) => this.handleUserChange(data)} 
              />
            )}
            <MenuItem onClick={() => this.handleShowModalChange('logIn')}>Log in</MenuItem>
             {showModal === 'logIn' && (
              <Modal onClose={this.closeModal}>
                <CloseButton onClick={this.closeModal} />
                Log in
              </Modal>
            )}
            <Button size="sm" variant="transparent">Become a Tasker</Button>
          </Right>
        </Container>
      </Wrapper>
    )
  }
}

export default PageHeader;