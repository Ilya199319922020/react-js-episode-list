import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/react-js-episode-list' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
