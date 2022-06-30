import React from 'react';
import styled from 'styled-components';
import Modal, { CloseButton } from '../../../../components/Modal';
import Button from '../../../../components/Button';

const Form = styled.form`
  
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const Item = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block; //individual line
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: block; //individual line
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(187, 194, 220);
  border-radius: 4px;
  padding: 12px;
`;

const SignUpModal = ({
  closeModal,
  onSignUp, //(user) => this.handleUserChange(user)
}) => (
  <Modal onClose={closeModal}>
    <Title>Join Us</Title>
    <CloseButton onClick={closeModal} />
    <Form>
      <Item>
        <Label htmlFor="sign-up-modal-email">Email</Label>
        <Input id="sign-up-modal-email" />
      </Item>
      <Item>
        <Label htmlFor="sign-up-modal-password">Password</Label>
        <Input type="password" id="sign-up-modal-password" />
      </Item>
      <Item>
        <Label htmlFor="sign-up-modal-confirm-password">Confirm password</Label>
        <Input type="password" id="sign-up-modal-confirm-password" />
      </Item>
    </Form>
    <Button>
      Join Airtasker
    </Button>
  </Modal>
);

export default SignUpModal;