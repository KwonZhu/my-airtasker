import React from 'react';
import styled from 'styled-components';
import Modal, { CloseButton } from '../../../../components/Modal';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import FormItem from '../../../../components/FormItem';
import validate from './validate';
import ErrorMessage from '../../../../components/ErrorMessage';

const Wrapper = styled.form``;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const SignUpButton = styled(Button)`
  width: 100%;
`;

const initialData = { 
  value: '',
  touched: false,
  blurred: false,
  focused: false,
};
class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: initialData,
        password: initialData,
        confirmPassword: initialData,
      },
      isFormSubmit: false,
    }
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.handleFocusedChange = this.handleFocusedChange.bind(this);
  }

  setData(name, newData) {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          ...newData,
        },
      },
    }));
  }

  handleFocusedChange(event) { //similar to handleBlurredChange
    const { name } = event.target; // onFocus dose not need value

    this.setData(name, {
      focused: true,
    });
  }

  handleBlurredChange(event) {
    const { name } = event.target; // onBlur dose not need value

    this.setData(name, {
      blurred: true,
      focused: false, //the opposite of the onFocus event
    });
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    this.setData(name, {
      value,
      touched: true,
    });  
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  // Derived state: date -> error
  getError() {
    const {data} = this.state;
    const error = {};

    //validate every data.name, once fail get errorMsg -> error[key] = errorMsg;
    
    //Object.keys() returns an array of a given object's own enumerable property names
    Object.keys(data).forEach((name) =>{ // for each name in name array
      const errorOfName = validate(name, data); // validate.js

      if(!errorOfName) {
        return;
      };
      error[name] = errorOfName;
    });

    return error;
  }

  // optimize the duplicate code {(blurred.xxx || isFormSubmit) && error.xxx}
  showErrorMessage(error, name) {
    const { data, isFormSubmit } = this.state;
    const showInputError = data[name].blurred && ! data[name].focused;
    return (showInputError || isFormSubmit) && error[name];
  }

  render() {
    const { closeModal } = this.props;
    const { data } = this.state;
    const error = this.getError();

    // derived: data -> error -> invalidateForm
    const invalidForm = Object.keys(error).length > 0;
    return (
      <Modal onClose={closeModal}>
        <Title>Join Us</Title>
        <CloseButton onClick={closeModal} />
        <Wrapper
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
          {[
            {key: 'email', label: 'Email'},
            {key: 'password', label: 'Password'},
            {key: 'confirmPassword', label: 'Confirm password'},
          ].map(({ key, label }) => (
            <FormItem key={key} label={label} htmlFor={`sign-up-modal-${key}`}>
              <Input 
                name={key} //event.target.name. use name as a key to distinguish these 3 Input
                value={data[key].value} //initial value
                onChange={this.handleDataChange} //occurs when value(input) change
                onFocus={this.handleFocusedChange} //occurs when Input gets focus
                onBlur={this.handleBlurredChange} //occurs when Input loses focus
                error={this.showErrorMessage(error, key)} //Input border-color change when error occurs(error is not '') => props.error && css`...`
                id={`sign-up-modal-${key}`} 
              />
              <ErrorMessage>{this.showErrorMessage(error, key)}</ErrorMessage>
            </FormItem>
          ))}
          <SignUpButton size="md" variant="success">
            Join Airtasker
          </SignUpButton>
        </Wrapper>
      </Modal>
    )
  }
}

export default SignUpModal;