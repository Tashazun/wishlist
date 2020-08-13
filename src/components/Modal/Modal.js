import React from "react"
import { MdError } from "react-icons/md";
import { GrClose} from "react-icons/gr";

import './Modal.scss';
import useForm from '../../utilities/useForm';

const Modal = ({state, setModalOpen}) => {
  const { values, errors, handleChange, handleSubmit } = useForm();

  return (
    <div className="wishlist">
      <div className="wishlist__content">
        <button
          type="button"
          className="wishlist__close"
          aria-label="close modal"
          onClick={() => setModalOpen(false)}
          >
          <GrClose/>
        </button>
        <h2 className="wishlist__heading">Add A Job</h2>
        <form
          role="form"
          className="wishlist__form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="company-name" className="wishlist__label">Company Name</label>
          {errors.name && (
            <span
              id="error__1"
              className="wishlist__error-message"
              tabIndex="-1"
            >
              <MdError aria-hidden="true"/>
              {errors.name}
            </span>
          )}
          <input
            id="company-name"
            className={`wishlist__input ${errors.name && 'wishlist__input--invalid'}`}
            type="text"
            name="name"
            onChange={handleChange}
            // value takes username input or if none exist set the default to empty string. Prevents uncontrolled to controlled
            value={values.name || ""}
            aria-describedby={`${errors.name ? "error__1" : ""}`}
            aria-required="true"
          />

          <label htmlFor="job-title" className="wishlist__label">Job Title</label>
          {errors.title && (
            <span
              id="error__2"
              className="wishlist__error-message"
              tabIndex="-1"
            >
              <MdError aria-hidden="true"/>
              {errors.title}
            </span>
          )}
          <input
            id="job-title"
            className={`wishlist__input ${errors.title && 'wishlist__input--invalid'}`}
            type="text"
            name="title"
            onChange={handleChange}
            value={values.title || ""}
            aria-describedby={`${errors.title ? "error__2" : ""}`}
            aria-required="true"
          />

          <button
            className="wishlist__submit"
            type="submit"
            name="submit"
            >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal