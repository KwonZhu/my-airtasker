import React from 'react';
import Modal, { CloseButton } from '../../../../components/Modal';

const SignUpModal = ({
  closeModal,
}) => (
  <Modal onClose={closeModal}>
    <CloseButton onClick={closeModal} />
    Sign up
    <p>Email</p>
    <p>Email</p>
    <p>Email</p>
    <p>Email</p>
    <p>Email</p>
  </Modal>
);

export default SignUpModal;