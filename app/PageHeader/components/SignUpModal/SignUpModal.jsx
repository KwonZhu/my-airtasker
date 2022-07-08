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

const validate = (key, value) => { //put it outside of class because it does not need 'this'
  switch (key) {
    case 'email': {
      if (!value) {
        return 'Please input your email';
      }
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/;
      if (!EMAIL_REGEXP.test(value)) {
        return 'Please enter a valid email';
      }
      return '';
    };
    case 'password': {
      if (!value) {
        return 'Please input your password';
      }
      if (value.length < 8 || value.length > 16) {
        return 'Please enter an 8 to 16 characters password';
      }
      return '';
    };
    case 'confirmPassword': {
      if (!value) {
        return 'Please input your confirm password';
      }
      return '';
    }
    default: 
      return '';
  }
}
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
  handleErrorChange(key, errorMsg) { //errorMsg comes from validate()
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        [key]: errorMsg,
      },
    }));
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    const errorMsg = validate(name, value);
    
    this.handleErrorChange(name, errorMsg);
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
              error={error.email} //Input border-color change when error occurs(/not '') => props.error && css`...`
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
              error={error.password}
              id="sign-up-modal-password" 
            />
            <Error>{error.password}</Error>
          </FormItem>
          <FormItem label="Confirm password" htmlFor="sign-up-modal-confirm-password">
            <Input 
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={this.handleDataChange}
              type="password"
              error={error.confirmPassword}
              id="sign-up-modal-confirm-password" 
            />
            <Error>{error.confirmPassword}</Error>
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