// Modal 是一个动态渲染的东西 -> state
// Modal 是 React 哲学中的 第三步：确定 UI state 的最小(且完整)表示
// 最小(且完整) -> 越小越好 -> state 从最近的地方写起
// 1. PageHeader 写state
// 2. Modal需要什么
  // 2.1 Overlay覆盖 -> 黑色半透明的dimmer变暗整个页面
  // 2.2 Container -> 白色的框, styles, width
  // 2.3 Close Button -> font awesome icon
  // 2.4 Modal content
    // 2.4.1 Email input 
    // 2.4.2 Password input 
    // 2.4.3 Submit Button
    // 2.4.4 Oauth 登录 (先不做) 
    // 2.4.5 T&C (内容先不做)
    // 2.4.6 Footer to Login (功能先不做，现在连Login的Modal都还没有)
    // 2.4.1-3 -> Form -> validation(errorMessage)? value? (先不做) 
    // SOLID -> Single responsibility -> Modal, Form(可能还Call Api), Oauth都是大功能
    // Call Api, T&C都是大功能



import React from 'react';
import styled from 'styled-components';

//darken the background
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.75);

  //Center Modal horizontally and vertically
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: white;
  width: 350px;
  border-radius: 5px;

  padding: 16px;
  position: relative; //for all absolute content in Modal
`;

const Modal = ({
  children,
  onClose,
}) => (
  <Wrapper onClick={onClose}> {/* Not only CloseButton, but also Wrapper can close the Modal */}
                              {/* when pass props, key can be any name, like onClick, arg... */}
    {/* to stop propagate onClose in Container, otherwise any click inside the Container will close Modal */}
    <Container onClick={(event) => event.stopPropagation()}>
      {children}
    </Container>
  </Wrapper>
);

export default Modal;