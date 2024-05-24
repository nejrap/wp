import React from 'react';
import './CSS/LoginSignup.css'

function LoginSignup(props) {
    return (
        <div className='loginsignup'>
            <div className='container-login'>
                <h1>Registruj se</h1>
                <div className='fields'>
                    <input type='text' placeholder='Ime i prezime'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>

                </div>
                <button>Registruj se</button>
                <p className='loginsignup-login'>Imaš account? <span> Prijavi se</span></p>

            </div>
            
        </div>
    );
}

export default LoginSignup;