
import React from 'react';
import './CSS/LoginSignup.css'
import { useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function Signup(props) {
    let navigate = useNavigate('');
    var ime = useRef('');
    var prezime = useRef('');
    var email = useRef('');
    var username = useRef('');
    var password = useRef('');
    async function registrujSe() {
        if(ime.current.value === "") return alert("Ime nije upisano.");
    if(prezime.current.value === "") return alert("Prezime nije upisano.");
    if(email.current.value === "") return alert("Email nije upisano.");
    if(username.current.value === "") return alert("Username nije upisano.");
    if(password.current.value === "") return alert("Password nije upisano.");
 
    const noviKorisnik = {
        
        FirstName: ime.current.value,
        LastName: prezime.current.value,
        Email: email.current.value,
        PasswordHash: password.current.value,
        Username: username.current.value
    };
   
    await fetch(`https://localhost:7123/api/Login/dodajKorisnika`, {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json',

        },

         body: JSON.stringify(noviKorisnik),

    });
 
    ime.current.value = "";

    prezime.current.value = "";

    email.current.value = "";

    username.current.value = "";

    password.current.value = "";
 
    navigate(`/login`);


    }

    
    return (
        <div className='loginsignup'>
            <div className='container-login'>
                <h1>Registruj se</h1>
                <div className='fields'>
                    <input type='text' placeholder='Ime' ref={ime}/>
                    <input type='text' placeholder='Prezime' ref={prezime}/>
                    <input type='email' placeholder='Email' ref={email}/>
                    <input type='text' placeholder='username' ref={username}/>
                    <input type='password' placeholder='Password' ref={password}/>

                </div>
                <button onClick={() => {registrujSe()}}>Registruj se</button>
                <p className='loginsignup-login'>
                Imaš account? <span onClick={() => navigate('/login')}>Prijavi se</span>
                </p>

            </div>
            
        </div>
    );
}

export default Signup;