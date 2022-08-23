import React from "react";

const withModal = (Component) => {
  //accept a Component as parameter
  class Modal extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showModal: undefined,
      };
      this.handleShowModalChange = this.handleShowModalChange.bind(this);
      // handleShowModalChange <=> handleSignUpOnClick
      // this.handleSignUpOnClick = this.handleSignUpOnClick.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    handleShowModalChange(newShowModal) {
      this.setState({
        showModal: newShowModal,
      });
    }

    // handleSignUpOnClick() {
    //   this.setState({
    //     showModal: true,
    //   });
    // }

    closeModal() {
      this.handleShowModalChange();
    }

    render() {
      const { showModal } = this.state;

      return (
        <Component
          // spread all to Component
          {...this.props}
          showModal={showModal}
          handleShowModalChange={this.handleShowModalChange}
          closeModal={this.closeModal}
        />
      );
    }
  }
  return Modal;
};

export default withModal;
