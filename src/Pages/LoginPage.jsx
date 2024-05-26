import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

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
                    <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                    <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Login</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
