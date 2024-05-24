import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/crna.png';
import { Link } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png';
import Popular from '../Popular/Popular';

const Navbar = () => {
    const [menu, setMenu] = useState("pocetna");

    return (
        <div className="header">
            <div className="nav">
                <div>
                <img src={logo} height="100" width="100" alt="logo" style={{ marginleft: '10px' }} />

                </div>

                <div className="nav-links">
                    <ul>
                        <li onClick={() => { setMenu("pocetna") }}>
                            <Link to='/'>Početna</Link>{menu === "pocetna" ? <hr /> : <></>}
                        </li>
                        <li onClick={() => { setMenu("about") }}>
                            <Link to='/about'>O nama</Link> {menu === "about" ? <hr /> : <></>}
                        </li>
                        <li onClick={() => { setMenu("contact") }}>
                            <Link to='/contact'>Kontakt</Link>{menu === "contact" ? <hr /> : <></>}
                        </li>
                        <li onClick={() => { setMenu("shop") }}>
                            <Link to='/shop'>Shop</Link>{menu === "shop" ? <hr /> : <></>}
                        </li>
                    </ul>
                </div>
                <div className='login-cart'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
                    <div className='login-cart-count'>0</div>
                </div>
            </div>
            <div className="text-box">
                <h1>Art by Nejra</h1>
                <p className="animate__backInLeft">
                    Neki slikari sunce pretvaraju u žutu mrlju. Drugi žutu mrlju
                    pretvaraju u sunce.<br />
                    <br /> Pablo Picasso
                </p>
            </div>
            
          
        </div>
    );
}

export default Navbar;
