import React from "react";
import Button from "../../../../components/Button";
import LogInModal from "../../../LogInModal";
import withModal from "../../../../components/withModal";
import UserContext from "../../../UserContext";

const CallToAction = ({ showModal, handleShowModalChange, closeModal }) => (
  <UserContext.Consumer>
    {({ user, handleUserChange }) => (
      <div>
        {/* Ternary Expression */}
        {user ? (
          <Button>Get started now</Button>
        ) : (
          <>
            <Button onClick={() => handleShowModalChange("logIn")}>
              Log in
            </Button>
            {showModal === "logIn" && (
              <LogInModal
                closeModal={closeModal}
                // onLogIn={(newUser) => this.handleUserChange(newUser)}
                // can be simplify to onLogIn={this.handleUserChange}
                onLogIn={(newUser) => {
                  handleUserChange(newUser);
                  closeModal(); // In here, '()' is necessary
                }}
              />
            )}
          </>
        )}
      </div>
    )}
  </UserContext.Consumer>
);

export default withModal(CallToAction);
