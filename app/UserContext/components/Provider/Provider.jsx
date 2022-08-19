import React from "react";
import UserContext from "../../UserContext";

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
    };

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(newUser) {
    this.setState({
      user: newUser,
    });
  }

  render() {
    const { children } = this.props; //children components
    const { user } = this.state;

    // value (shared user state and handler) can be accessed by children components
    const value = {
      user,
      handleUserChange: this.handleUserChange,
    };

    return (
      // UserContext 调用 Provider，传 value
      <UserContext.Provider value={value}>
        {/* Provider provide 数据(value)给  Provider 的 children components */}
        {children}
      </UserContext.Provider>
    );
  }
}

export default Provider;
