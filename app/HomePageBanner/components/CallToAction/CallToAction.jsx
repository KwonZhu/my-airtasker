import React from "react";
import Button from "../../../../components/Button";
import LogInModal from "../../../LogInModal";
import withModal from "../../../../components/withModal";
import UserContext from "../../../UserContext";
import withContext from "../../../../components/withContext";

const CallToAction = ({
  user, // user + handleUserChange as props were given by withContext(UserContext)
  handleUserChange, //  export default withContext(UserContext)(withModal(CallToAction))
  showModal,
  handleShowModalChange,
  closeModal,
}) => (
  <div>
    {/* Ternary Expression */}
    {user ? (
      <Button>Get started now</Button>
    ) : (
      <>
        <Button onClick={() => handleShowModalChange("logIn")}>Log in</Button>
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
);

const CallToActionWithModal = withModal(CallToAction);
const CallToActionWithUserContext = withContext(UserContext)(
  CallToActionWithModal
); // 传UserContext，传Component
// withContext(XXXContext)能实现下面这几行代码的复用
// <XXXContext.Consumer>
//  {()=>()}
// </XXXContext.Consumer>
export default CallToActionWithUserContext;
