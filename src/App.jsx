import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SubscribePage from './pages/SubscribePage';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<SubscribePage />} /> */}

        </Routes>
        <SubscribePage />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
