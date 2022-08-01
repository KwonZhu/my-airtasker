const validate = (name, data) => { // put it outside of SignUpModal class because it does not need 'this'
                                   // put it outside of SignUpModal.jsx to simplify SignUpModal.jsx
  const { value } = data[name];
  switch (name) {
    case 'email': {
      if (!value) {
        return 'Please input your email';
      }
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/;
      if (!EMAIL_REGEXP.test(value)) {
        return 'Please enter a valid email';
      }
      return '';
    };
    case 'password': {
      if (!value) {
        return 'Please input your password';
      }
      if (value.toString().length < 8 || value.toString().length > 16) {
        return 'Please enter an 8 to 16 characters password';
      }
    };
    case 'confirmPassword': {
      if (!value) {
        return 'Please input your confirm password';
      }
      if (value !== data.password) {
        return 'Confirm password dose not match to password';
      }
      return '';
    };
    default: 
      return '';
  }
}
export default validate;