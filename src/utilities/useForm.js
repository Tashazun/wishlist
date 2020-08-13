import { useState } from 'react';

import validate from './validation';

const useForm = () => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    if (!Object.keys(values).length || Object.keys(values).length <= 1 || values.name === '' || values.title === '') {
      event.preventDefault();
    } 
    setErrors(validate(values));
    
    if(Object.keys(errors).length !== 0) {
      focusOnError();
    }

    if(Object.keys(values).length >= 2 && values.name !== '' && values.title !== '') {
      const arr = [new Date(), values.title];

      localStorage.setItem(values.name, JSON.stringify(arr));
    }

  };

  const focusOnError = () => {
    const el = document.getElementsByClassName("wishlist__error-message");
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