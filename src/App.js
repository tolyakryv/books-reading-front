import React from 'react';

import { Routes, Route } from 'react-router-dom';
// import { Header } from "./components/Header/Header.jsx";
import { LibraryPage } from './pages/Library/LibraryPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LibraryPage />} />
      </Routes>
    </>
  );
}

export default App;
