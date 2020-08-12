export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Company name is required';
  }

  if (!values.title) {
    errors.title = 'Password is required';
  }

  return errors;
};