import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import About from './Pages/About';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import DetailPage from './Pages/DetailPage';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';


const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/details/:id" element={<DetailPage />} />
                    <Route path="/login" element={<LoginSignup />} />
                 
                </Routes>
                
            </div>
        </Router>
    );
};

export default App;
