import React from "react";
import HomePageBanner from "./app/HomePageBanner";
import PageHeader from "./app/PageHeader";

class App extends React.Component {
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
    const { user } = this.state;
    return (
      <div>
        <PageHeader user={user} handleUserChange={this.handleUserChange} />
        <HomePageBanner user={user} />
      </div>
    );
  }
}

export default App;
