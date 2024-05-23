/* eslint-disable react/jsx-no-undef */

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

import Shop from './Pages/Shop';

import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
      
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>


     
      </Routes>
      <Footer/>

  </BrowserRouter>
    </div>
  );
}

export default App;
