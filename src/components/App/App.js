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
        const value = JSON.parse(localStorage[key]);
        setStoredValues(x => [...x, {[key] : value[1]}, {'date' : value[0]}]);
      }
  },[]);

  const x = storedValues.flatMap(a => {
    const key = Object.keys(a).filter(data => data !== 'date');
    return key;
  })

  const y = storedValues.flatMap(a => {
    const title = Object.values(a).filter(data => !data.includes('2020'));
    return title;
  })

  const datesArr = storedValues.flatMap(a => {
    const b = Object.values(a).filter(data => data.includes('2020'));
    return b;
  })

  const diffTime = datesArr.map (a => {
    const c = (new Date() - new Date(a));
    const diffMins = Math.round(((c % 86400000) % 3600000) / 60000);
    return diffMins;
  })

  function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
  };

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
              <div className="app__item-features">
                <button
                  className="app__delete"
                  onClick={() => setDialogOpen(true)}
                >
                  <FiTrash2/>
                </button>
                <p className="app__time">added {diffTime[index]} minutes ago</p>
              </div>
            </div>
        ))}
      </main>
    </div>
  );
}

export default App;
