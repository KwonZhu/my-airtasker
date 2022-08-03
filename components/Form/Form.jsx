import React from 'react';

const initialData = { 
  value: '',
  touched: false,
  blurred: false,
  focused: false,
};
// 1个 React.Component 却没有 render
class Form extends React.Component {
  constructor({
    names, //fields <=> names
    validate, // no need to import validate.js
  }, props) {
    super(props);

    const data = {};

    names.forEach((name) => {
      data[name] = initialData;
    });

    this.validate = validate;

    this.state = {
      data,
      isFormSubmit: false,
    }
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.handleFocusedChange = this.handleFocusedChange.bind(this);
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

  handleFocusedChange(event) { //similar to handleBlurredChange
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
    const {data} = this.state;
    const error = {};

    //validate every data.name, once fail get errorMsg -> error[key] = errorMsg;
    
    //Object.keys() returns an array of a given object's own enumerable property names
    Object.keys(data).forEach((name) =>{ // for each name in name array
      const errorOfName = this.validate(name, data); // validate.js

      if(!errorOfName) {
        return;
      };
      error[name] = errorOfName;
    });

    return error;
  }

  // optimize the duplicate code {(blurred.xxx || isFormSubmit) && error.xxx}
  showErrorMessage(error, name) {
    const { data, isFormSubmit } = this.state;
    const showInputError = data[name].blurred && ! data[name].focused;
    return (showInputError || isFormSubmit) && error[name];
  }
}

export default Form;