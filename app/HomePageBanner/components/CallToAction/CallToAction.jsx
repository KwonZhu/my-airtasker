import React from "react";
import Button from "../../../../components/Button";
import LogInModal from "../../../LogInModal";
import withModal from "../../../../components/withModal";
import UserContext from "../../../UserContext";
import withContext from "../../../../components/withContext";

const CallToAction = ({
  user, // user + handleUserChange as props were given by withContext(UserContext)
  handleUserChange,
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
// HOC，即withContext(XXXContext)(Component)能实现下面这几行代码的复用
// <XXXContext.Consumer>
//  {()=>()}
// </XXXContext.Consumer>
export default CallToActionWithUserContext;

// // 从 const xxx 到 导出 CallToActionWithUserContext <=>
// export default withContext(UserContext)(withModal(CallToAction));
// // CallToAction先withModal得到showModal, handleShowModalChange, closeModal
// //             再withContext(UserContext)得到user, handleUserChange

// // 47行(withContext(UserContext)(withModal(CallToAction)))可读性差
// // => 数学中的复合函数g(f(x))，f(x)的值域是g(x)的定义域，内函数的输出就是外函数的输入
// const compose = (fns) => (Component) => {
//   let result = Component;

//   fns.forEach((fn) => {
//     result = fn(result);
//   });

//   return result;
// };

// export default compose([
//   withModal,
//   withContext(UserContext)
// ])(CallToAction);
// // [withModal,withContext(UserContext),] 这个 array 当作 function fns
// // CallToAction 当作 Component

// // 解析：
// // 第1次时
// const compose = (withModal) => (CallToAction) => {
//   let result = CallToAction;
//    fns.forEach((fn) =>{
//      result = withModal(CallToAction);
//    })
//    return withModal(CallToAction);
// };

// // 第2次时
// const compose = (withContext(UserContext)) => (withModal(CallToAction)) => {
//   let result = withModal(CallToAction);
//    fns.forEach((fn) =>{
//      result = withContext(UserContext)(withModal(CallToAction));
//    })
//    return withContext(UserContext)(withModal(CallToAction));
// };
