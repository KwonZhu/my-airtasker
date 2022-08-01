const validate = (name, data) => { // put it outside of LogInModal class because it does not need 'this'
                                   // put it outside of LogInModal.jsx to simplify LogInModal.jsx
  const { value } = data[name];
  switch (name) {
    case 'email': {
      if (!value) {
        return 'Please input your email';
      }
      return '';
    };
    case 'password': {
      if (!value) {
        return 'Please input your password';
      }
    };
    default: 
      return '';
  }
}
export default validate;