import React from "react";

const initialData = {
  value: "",
  touched: false,
  blurred: false,
  focused: false,
};

const withForm =  //先调用withForm且传configuration(names, validate)
  ({ names, validate }) =>
  //获得的是return的HOC，即(Component) => {}
  (Component) => {
    //获得HOC后再拿Component去再调用一次，即(LogInModal) => {}
    //最后return set up好了的Form class，即<LogInModal
    //                                      {...this.props}
    //                                      data={data}
    //                                      ...
    //                                    >
    class Form extends React.Component {
      constructor(props) {
        super(props);

        const data = {};

        names.forEach((name) => {
          data[name] = initialData;
        });

        this.validate = validate;

        this.state = {
          data,
          isFormSubmit: false,
        };
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleIsFormSubmitChange =
          this.handleIsFormSubmitChange.bind(this);
        this.handleBlurredChange = this.handleBlurredChange.bind(this);
        this.handleFocusedChange = this.handleFocusedChange.bind(this);
        this.showErrorMessage = this.showErrorMessage.bind(this);
      }

      setData(name, newData) {
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            [name]: {
              ...prevState.data[name],
              ...newData,
            },
          },
        }));
      }

      handleFocusedChange(event) {
        //similar to handleBlurredChange
        const { name } = event.target; // onFocus dose not need value

        this.setData(name, {
          focused: true,
        });
      }

      handleBlurredChange(event) {
        const { name } = event.target; // onBlur dose not need value

        this.setData(name, {
          blurred: true,
          focused: false, //the opposite of the onFocus event
        });
      }

      handleDataChange(event) {
        const { name, value } = event.target;

        this.setData(name, {
          value,
          touched: true,
        });
      }

      handleIsFormSubmitChange(newIsFormSubmit) {
        this.setState({
          isFormSubmit: newIsFormSubmit,
        });
      }

      // Derived state: date -> error
      getError() {
        const { data } = this.state;
        const error = {};

        //validate every data.name, once fail get errorMsg -> error[key] = errorMsg;

        //Object.keys() returns an array of a given object's own enumerable property names
        Object.keys(data).forEach((name) => {
          // for each name in name array
          const errorOfName = this.validate(name, data); // validate.js

          if (!errorOfName) {
            return;
          }
          error[name] = errorOfName;
        });

        return error;
      }

      // optimize the duplicate code {(blurred.xxx || isFormSubmit) && error.xxx}
      showErrorMessage(error, name) {
        const { data, isFormSubmit } = this.state;
        const showInputError = data[name].blurred && !data[name].focused;
        return (showInputError || isFormSubmit) && error[name];
      }
      render() {
        const { data, isFormSubmit } = this.state;

        const error = this.getError();
        // derived: data -> error -> invalidateForm
        const invalidForm = Object.keys(error).length > 0;
        return (
          <Component
            // spread all to Component
            {...this.props} // closeModal was given by PageHeader.jsx
            data={data}
            isFormSubmit={isFormSubmit}
            error={error}
            handleIsFormSubmitChange={this.handleIsFormSubmitChange}
            invalidForm={invalidForm}
            handleDataChange={this.handleDataChange}
            handleFocusedChange={this.handleFocusedChange}
            handleBlurredChange={this.handleBlurredChange}
            showErrorMessage={this.showErrorMessage}
          />
        );
      }
    }
    return Form;
  };

export default withForm;
