import React from 'react';
import styled from 'styled-components';
import Modal, { CloseButton } from '../../../../components/Modal';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import FormItem from '../../../../components/FormItem';
import validate from './validate';
import ErrorMessage from '../../../../components/ErrorMessage';
import Form from '../../../../components/Form';

const Wrapper = styled.form``;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const LogInButton = styled(Button)`
  width: 100%;
`;

class LogInModal extends Form {
  constructor(props) {
    super({
      names: ['email', 'password'],
      validate, //import validate.js
    }, props);
  }

  render() {
    const { closeModal } = this.props;
    const { data } = this.state;
    const error = this.getError();

    // derived: data -> error -> invalidateForm
    const invalidForm = Object.keys(error).length > 0;
    return (
      <Modal onClose={closeModal}>
        <Title>Log In</Title>
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
          ].map(({ key, label }) => (
            <FormItem key={key} label={label} htmlFor={`log-in-modal-${key}`}>
              <Input 
                name={key} //event.target.name. use name as a key to distinguish these 3 Input
                value={data[key].value} //initial value
                onChange={this.handleDataChange} //occurs when value(input) change
                onFocus={this.handleFocusedChange} //occurs when Input gets focus
                onBlur={this.handleBlurredChange} //occurs when Input loses focus
                error={this.showErrorMessage(error, key)} //Input border-color change when error occurs(error is not '') => props.error && css`...`
                id={`log-in-modal-${key}`} 
              />
              <ErrorMessage>{this.showErrorMessage(error, key)}</ErrorMessage>
            </FormItem>
          ))}
          <LogInButton size="md" variant="success">
            Log In
          </LogInButton>
        </Wrapper>
      </Modal>
    )
  }
}

export default LogInModal;