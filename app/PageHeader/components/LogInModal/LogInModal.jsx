import React from "react";
import styled from "styled-components";
import Modal, { CloseButton } from "../../../../components/Modal";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import FormItem from "../../../../components/FormItem";
import ErrorMessage from "../../../../components/ErrorMessage";
import withLogInForm from "../withLogInForm";

const Wrapper = styled.form``;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const LogInButton = styled(Button)`
  width: 100%;
`;

const LogInModal = ({
  // const { closeModal } = this.props in render when LogInModal was a class
  closeModal,
  onLogIn,
  data,
  error,
  handleIsFormSubmitChange,
  invalidForm,
  handleDataChange,
  handleFocusedChange,
  handleBlurredChange,
  showErrorMessage,
}) => (
  <Modal onClose={closeModal}>
    <Title>Log In</Title>
    <CloseButton onClick={closeModal} />
    <Wrapper
      onSubmit={(event) => {
        event.preventDefault();
        handleIsFormSubmitChange(true);
        if (invalidForm) {
          console.log("Form has error");
          return;
        }
        onLogIn({
          email: data.email.value, //user: newUser
        });
      }}
    >
      {[
        { key: "email", label: "Email", type: "text" },
        { key: "password", label: "Password", type: "password" },
      ].map(({ key, label, type }) => (
        <FormItem key={key} label={label} htmlFor={`log-in-modal-${key}`}>
          <Input
            name={key} //event.target.name. use name as a key to distinguish these 3 Input
            type={type}
            value={data[key].value} //initial value
            onChange={handleDataChange} //occurs when value(input) change
            onFocus={handleFocusedChange} //occurs when Input gets focus
            onBlur={handleBlurredChange} //occurs when Input loses focus
            error={showErrorMessage(error, key)} //Input border-color change when error occurs(error is not '') => props.error && css`...`
            id={`log-in-modal-${key}`}
          />
          <ErrorMessage>{showErrorMessage(error, key)}</ErrorMessage>
        </FormItem>
      ))}
      <LogInButton size="md" variant="success">
        Log In
      </LogInButton>
    </Wrapper>
  </Modal>
);

// Call function withForm, also pass names and validate.
// Then cal LogInModal
export default withLogInForm(LogInModal);
