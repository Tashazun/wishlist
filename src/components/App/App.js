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
    <div className="app-wrapper">
      <header className="app-wrapper__header">
        <h1>Wishlist</h1>
        <button
          type="submit"
          className="app-wrapper__button"
          onClick={() => setModalOpen(true)}
          aria-label="submit new wishlist item"
        >
          <TiPlus />
        </button>
      </header>
      <main>
        {modalOpen === true && <Modal state={modalOpen} setModalOpen={setModalOpen}/>}
        <div>
        {storedValues && x.map((listItem, index) => (
            <div className="frame__thumbnail" key={index}>
                <p>{listItem}</p>
                <p>{y[index]}</p>
            </div>
        ))}
        </div>
      </main>
    </div>
  );
}

export default App;
