import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

// Firebase konfiguracija
const firebaseConfig = {
    apiKey: "AIzaSyCx7jcStpesC7xbMSvTMcLyQg7Lp7SgRQE",
    authDomain: "artbynejra.firebaseapp.com",
    projectId: "artbynejra",
    storageBucket: "artbynejra.appspot.com",
    messagingSenderId: "105368280556",
    appId: "1:105368280556:web:2fd00fc3e1d2223d9234c9",
    measurementId: "G-TPH4TKH38L"
};

// Inicijalizacija Firebase-a
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log('Login success:', user);
                // Ovdje možete dodati logiku za obradu uspješnog prijavljivanja putem Google-a
            })
            .catch((error) => {
                console.log('Login failed:', error);
                // Ovdje možete dodati logiku za obradu neuspješnog prijavljivanja putem Google-a
            });
    };

    const handleGithubLogin = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log('Login success:', user);
                // Ovdje možete dodati logiku za obradu uspješnog prijavljivanja putem GitHub-a
            })
            .catch((error) => {
                console.log('Login failed:', error);
                // Ovdje možete dodati logiku za obradu neuspješnog prijavljivanja putem GitHub-a
            });
    };

    const handleLogin = () => {
        axios.get('https://localhost:7123/api/Login/getKorisnika', {
            params: {
                username: username,
                password: password
            }
        })
        .then(response => {
            setMessage('Uspješno ste se prijavili!');
            console.log(response.data);
            setTimeout(() => {
                navigate('/'); // Navigacija na /home nakon odgode
            }, 2000); // Odlaganje od 2 sekunde
        })
        .catch(error => {
            if (error.response && error.response.status === 404) {
                setMessage('Korisnik nije pronađen!');
            } else {
                setMessage('Došlo je do greške!');
            }
        });
    };

    return (
        <div className='loginsignup'>
            <div className='container-login'>
                <h1>Login</h1>
                <div className='fields'>
                    <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                    <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Login</button><br></br>
                <button onClick={handleGoogleLogin}>Login with Google</button>
                <button onClick={handleGithubLogin}>Login with GitHub</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
