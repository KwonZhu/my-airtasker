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

const Error = styled.div`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.25px;
  margin-top: 4px;
  color: rgb(231, 82, 69);

`;
class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      error: {},
    }

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleErrorChange = this.handleErrorChange.bind(this);
  }
  handleErrorChange(key, errorMsg) {
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        [key]: errorMsg,
      },
    }));
  }

  handleDataChange(event) {
    const { name, value } = event.target;
    
    this.handleErrorChange(name, 'Please enter a valid email');
    this.setState((prevState) => ({ 
      data: {
        ...prevState.data,
        [name]: value,
      },
    })); 
  }

  render() {
    const { closeModal } = this.props;
    const { data, error } = this.state;
    return (
      <Modal onClose={closeModal}>
        <Title>Join Us</Title>
        <CloseButton onClick={closeModal} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            console.log('state', this.state);
          }}
        >
          <FormItem label="Email" htmlFor="sign-up-modal-email">
            <Input 
              name="email" //event.target.name
              value={data.email} //initial value
              onChange={this.handleDataChange} //Triggered when value(input) change
              id="sign-up-modal-email" 
            />
            <Error>{error.email}</Error>
          </FormItem>
          <FormItem label="Password" htmlFor="sign-up-modal-password">
            <Input 
              name="password"
              value={data.password}
              onChange={this.handleDataChange}
              type="password" 
              id="sign-up-modal-password" 
            />
            {/* <Error>{error.password}</Error> */}
          </FormItem>
          <FormItem label="Confirm password" htmlFor="sign-up-modal-confirm-password">
            <Input 
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={this.handleDataChange}
              type="password" 
              id="sign-up-modal-confirm-password" 
            />
            {/* <Error>{error.confirmPassword}</Error> */}
          </FormItem>
          <SignUpButton size="md" variant="success">
            Join Airtasker
          </SignUpButton>
        </Form>
      </Modal>
    )
  }
}

export default SignUpModal;