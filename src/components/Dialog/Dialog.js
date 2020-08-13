import React from "react"

import "./Dialog.scss"

const Dialog = ({storageKey, setDialogOpen}) => {

  console.log(storageKey);

  const handleDeleteItem = key => {
    localStorage.removeItem(key);
    document.location.reload();
  }

  return (
    <div className="dialog">
      <div className="dialog__content">
        <h2 className="dialog__heading">Delete Job</h2>
        <p className="dialog__question">Are you sure you want to delete this job?</p>
        <div className="dialog__buttons">
          <button
            type="button"
            className="dialog__delete"
            aria-label="close modal"
            onClick={() => handleDeleteItem(storageKey[0])}
            >
            Delete
          </button>
          <button
            type="button"
            className="dialog__close"
            aria-label="close modal"
            onClick={() => setDialogOpen(false)}
            >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialog
