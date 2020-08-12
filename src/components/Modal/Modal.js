import React from "react"
import { MdError } from "react-icons/md";

import useForm from '../../utilities/useForm';

const Modal = () => {
  const { values, errors, handleChange, handleSubmit } = useForm();
 
  return (
      <form
        role="form"
        className="login"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" className="login__label">Username</label>
        {errors.username && (
          <span
            id="error__1"
            className="login__error-message"
            tabIndex="-1"
          >
            <MdError aria-hidden="true"/>
            {errors.username}
          </span>
        )}
        <input
          id="username"
          className={`login__input ${errors.username && 'login__input--invalid'}`}
          type="text"
          name="username"
          onChange={handleChange}
          // value takes username input or if none exist set the default to empty string. Prevents uncontrolled to controlled
          value={values.username || ""}
          aria-describedby={`${errors.username ? "error__1" : ""}`}
          aria-required="true"
        />

        <label htmlFor="password" className="login__label">Password</label>
        {errors.password && (
          <span
            id="error__2"
            className="login__error-message"
            tabIndex="-1"
          >
            <MdError aria-hidden="true"/>
            {errors.password}
          </span>
        )}
        <input
          id="password"
          className={`login__input ${errors.password && 'login__input--invalid'}`}
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          aria-describedby={`${errors.password ? "error__2" : ""}`}
          aria-required="true"
        />

        <button
          className="login__button"
          type="submit"
          name="submit"
          >Submit</button>
      </form>
  )
}

export default Modal