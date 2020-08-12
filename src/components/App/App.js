import React, { useState } from 'react';

import './App.scss';
import Modal from '../Modal/Modal';
import { TiPlus } from 'react-icons/ti';

function App() {

  const [modalOpen, setModalOpen] = useState(false);

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
        {modalOpen === true && <Modal />}
        <div>

        </div>
      </main>
    </div>
  );
}

export default App;
