import React from 'react';
import Modal, { CloseButton } from '../../../../components/Modal';
import Button from '../../../../components/Button';

const SignUpModal = ({
  closeModal,
  onSignUp, //(user) => this.handleUserChange(user)
}) => (
  <Modal onClose={closeModal}>
    <CloseButton onClick={closeModal} />
    <Button
      onClick={() => {
        //...
        const user = { email: 'test@example.com' };
        onSignUp(user);
        closeModal();
      }}
    >
      Sign up
    </Button>
  </Modal>
);

export default SignUpModal;