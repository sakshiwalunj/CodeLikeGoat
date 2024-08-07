import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import Navbar from './components/Navbar';
import './App.css';
import Lottie from 'lottie-react';
import fish from './Lottifiles/fish.json';

import Home from './components/Home';
import About from './components/About';
import PracticeDsa from './components/PracticeDsa';
import PracticeDev from './components/PracticeDev';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <>
        {isLoading ? (
          <div className="loader-container">
            <BounceLoader color="#00BFFF" size={80} />
            <p>Loading your data, please wait...</p>
          </div>
        ) : (
          <div>
            <Lottie className="bg" animationData={fish} loop={true} />
            <Lottie className="bgtwo" animationData={fish} loop={true} />
            <Lottie className="bgtemp" animationData={fish} loop={true} />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice-dsa" element={<PracticeDsa />} />
              <Route path="/practice-dav" element={<PracticeDev />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        )}
      </>
    </Router>
  );
}

export default App;

