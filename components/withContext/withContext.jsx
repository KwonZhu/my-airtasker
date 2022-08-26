import React from 'react';

// 原理与withForm一样
// 接收一个Context，获得的是return的HOC，即(Component) => {}
// 获得HOC后再拿Component去再调用一次，返回一个function component //withForm返回的是class component即Form class
// 这里直接把function component展开写了，即(props) => ()
const withContext = (Context) => (Component) => (props) =>
  (
    <Context.Consumer>
      {/* UserContext call Consumer (<=>UserContext.Consumer) to */}
      {/* act as a consumer to get value(user, handleUserChange), which was provided by Provider */}
      {/* continue when the callback function get Provider's value */}
      {(value) => (
        // here is similar to withForm
        <Component
          // spread all to Component
          {...props}
          {...value}
        />
      )}
    </Context.Consumer>
  );

export default withContext;
