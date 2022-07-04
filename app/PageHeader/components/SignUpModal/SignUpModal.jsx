import React from 'react';
import styled from 'styled-components';
import Modal, { CloseButton } from '../../../../components/Modal';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import FormItem from '../../../../components/FormItem';

const Form = styled.form``;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const SignUpButton = styled(Button)`
  width: 100%;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }

    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(newData) {
    this.setState({ 
      data: newData,
    }); 
  }

  render() {
    const { closeModal } = this.props;
    const { data } = this.state;
    return (
      <Modal onClose={closeModal}>
        <Title>Join Us</Title>
        <CloseButton onClick={closeModal} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();

            console.log(data);
          }}
        >
          <FormItem label="Email" htmlFor="sign-up-modal-email">
            <Input 
              value={data} //initial value
              onChange={(event) => this.handleDataChange(event.target.value)} //Triggered when value change
              id="sign-up-modal-email" 
            />
          </FormItem>
          <FormItem label="Password" htmlFor="sign-up-modal-password">
            <Input type="password" id="sign-up-modal-password" />
          </FormItem>
          <FormItem label="Confirm password" htmlFor="sign-up-modal-confirm-password">
            <Input type="password" id="sign-up-modal-confirm-password" />
          </FormItem>
        </Form>
        <SignUpButton size="md" variant="success">
          Join Airtasker
        </SignUpButton>
      </Modal>
    )
  }
}

export default SignUpModal;