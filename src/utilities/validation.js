export default function validate(values) {
  let errors = {};
  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username !== "level") {
    errors.username = 'Username is incorrect';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password !== "Access123") {
    errors.password = 'Password is incorrect';
  }
  return errors;
};