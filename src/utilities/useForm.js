import { useState } from 'react';

import validate from './validation';

const useForm = () => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    if (!Object.keys(values).length) {
      event.preventDefault();
    } 
    setErrors(validate(values));
    
    if(Object.keys(errors).length !== 0) {
      focusOnError();
    }

    if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      const arr = [new Date(), values.title];

      localStorage.setItem(values.name, JSON.stringify(arr));
    }

  };

  const focusOnError = () => {
    const el = document.getElementsByClassName("login__error-message");
    if ( el.length) {
      el[0].focus();
    }
  }

  const handleChange = event => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;