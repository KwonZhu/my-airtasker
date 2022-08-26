import withForm from '../../../../components/withForm';
import validate from './validate';

const withLogInForm = withForm({
  names: ['email', 'password'],
  validate,
});

export default withLogInForm;
