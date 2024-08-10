import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FeedPage from './features/FeedPage';
import LoginPage from './features/LoginPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/feed' element={<FeedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
