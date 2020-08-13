import React, { useState, useEffect } from 'react';

import './App.scss';
import Modal from '../Modal/Modal';
import { TiPlus } from 'react-icons/ti';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [storedValues, setStoredValues] = useState([]);
  console.log('stored', storedValues);

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
            <div className="app__item" key={index}>
                <h2 className="app__company">{listItem}</h2>
                <p className="app__title">{y[index]}</p>
            </div>
        ))}
      </main>
    </div>
  );
}

export default App;
