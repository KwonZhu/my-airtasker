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

const validate = (name, data) => { //put it outside of class because it does not need 'this'
  const value = data[name];
  switch (name) {
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
      if (value !== data.password) {
        return 'Confirm password dose not match to password';
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
      touched: {
        email: false,
        password: false,
        confirmPassword: false,
      },
      // 思考要创建一个什么样的state
      // 1. 叫什么 2. 什么时候被设置 3. 怎么被使用
      // 但凡回答出1个，就能知道要创建一个什么样的state
      isFormSubmit: false,
    }
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    this.setState((prevState) => ({ 
      data: {
        ...prevState.data,
        [name]: value,
      },
      touched: { //once data is changed, mark it as touched
        ...prevState.touched,
        [name]: true,
       },
    }));  
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  // Derived state
  validate() {
    const {data} = this.state;
    const error = {};

    //validate every data.name, once fail get errorMsg -> error[key] = errorMsg;
    
    //Object.keys() returns an array of a given object's own enumerable property names
    Object.keys(data).forEach((name) =>{ // for each name in name array
      const errorOfName = validate(name, data);

      if(!errorOfName) {
        return;
      };
      error[name] = errorOfName;
    });

    return error;
  }

  render() {
    const { closeModal } = this.props;
    const { data, touched, isFormSubmit } = this.state;
    const error = this.validate(data);

    // derived: data -> error -> invalidateForm
    const invalidForm = Object.keys(error).length > 0;
    return (
      <Modal onClose={closeModal}>
        <Title>Join Us</Title>
        <CloseButton onClick={closeModal} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            this.handleIsFormSubmitChange(true);
            if (invalidForm) {
              console.log('Form has error');
              return;
            }
            console.log('state', this.state);
          }}
        >
          <FormItem label="Email" htmlFor="sign-up-modal-email">
            <Input 
              name="email" //event.target.name. use name as a key to distinguish these 3 Input
              value={data.email} //initial value
              onChange={this.handleDataChange} //Triggered when value(input) change
              error={(touched.email|| isFormSubmit) && error.email} //Input border-color change when error occurs(error is not '') => props.error && css`...`
              id="sign-up-modal-email" 
            />
            <Error>{(touched.email || isFormSubmit) && error.email}</Error>
          </FormItem>
          <FormItem label="Password" htmlFor="sign-up-modal-password">
            <Input 
              name="password"
              value={data.password}
              onChange={this.handleDataChange}
              type="password" 
              error={(touched.password || isFormSubmit) && error.password}
              id="sign-up-modal-password" 
            />
            <Error>{(touched.password || isFormSubmit) && error.password}</Error>
          </FormItem>
          <FormItem label="Confirm password" htmlFor="sign-up-modal-confirm-password">
            <Input 
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={this.handleDataChange}
              type="password"
              error={(touched.confirmPassword || isFormSubmit) && error.confirmPassword}
              id="sign-up-modal-confirm-password" 
            />
            <Error>{(touched.confirmPassword || isFormSubmit) && error.confirmPassword}</Error>
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