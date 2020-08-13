import React, { useState, useEffect } from 'react';

import './App.scss';
import Modal from '../Modal/Modal';
import Dialog from '../Dialog/Dialog';

import { TiPlus } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [storedValues, setStoredValues] = useState([]);

  useEffect(() => {

      if(localStorage.length === 0) return;

      for(let i=0, len=localStorage.length; i<len; i++) {
        const key = localStorage.key(i);
        const value = localStorage[key];
        setStoredValues(x => [...x, {[key] : value}]);
      }
  },[]);

  const x = storedValues.map((a, i) => {
    const key = Object.keys(a);
    return key;
  })
  const y = storedValues.map((a, i) => {
    const title = Object.values(a);
    return title;
  })

  function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
  };
  console.log(randomColor);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__heading">Wishlist</h1>
        <p className="app__count">{localStorage.length} jobs</p>
        <button
          type="submit"
          className="app__button"
          onClick={() => setModalOpen(true)}
          aria-label="submit new wishlist item"
        >
          <TiPlus />
        </button>
      </header>
      <main className="app__content">
        {modalOpen === true && <Modal state={modalOpen} setModalOpen={setModalOpen}/>}
        {storedValues && x.map((listItem, index) => (
          <div className="app__item" key={index} style={{background : `#${randomColor()}`}}>
               {dialogOpen && <Dialog storageKey={listItem} setDialogOpen={setDialogOpen}/>}
              <div>
                <h2 className="app__company">{listItem}</h2>
                <p className="app__title">{y[index]}</p>
              </div>
              <button
                className="app__delete"
                onClick={() => setDialogOpen(true)}
              >
                <FiTrash2/>
              </button>
            </div>
        ))}
      </main>
    </div>
  );
}

export default App;
