import { useState, useEffect } from 'react';

import validate from './validation';
// Callback is the function passed into the hook from component
// Validate is the conditional function that form input is run against
const useForm = () => {

  // keeping track of form values, input errors, and when form is submitting
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // on submit reload is prevented, isSubmitting is set to true, and input values are run through validation 
  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  // if validation fails focus is put on first error message of page
  const focusOnError = () => {
    const el = document.getElementsByClassName("login__error-message");
    if ( el.length) {
      el[0].focus();
    }
  }
  // setting input values to state with spread operator to turn object into separate arguments
  const handleChange = event => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  // calling function passed into useForm as an argument if there are no errors and it's not the initial page load
  useEffect(() => {
    function login() {
      console.log('No errors, submit callback called!');
    }
    if (Object.keys(errors).length === 0 && isSubmitting) {
      login();
    }
    focusOnError();
  }, [isSubmitting, errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;