import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g3c6yvr', 'template_kjkapze', form.current, {
        publicKey: 'arKjNMEKCQAK3vq2y',
      })
      .then(
        (result) => {
          console.log(result.text);
          window.alert("MESSAGE SENT");
        },
        (error) => {
          window.alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact">
        
      <h1>Kontaktirajte nas</h1>
      <form ref={form} onSubmit={sendEmail}>
        <br />
        <input id="ime" type="text" placeholder="Ime i prezime" name="user_name" />
        <br />
        <input placeholder="Email" id="email" type="email" name="user_email" />
        <br />
        <textarea placeholder="Upiši poruku/pitanje za mene" name="message" />
        <button type="submit" value="Send">Pošalji</button>
      </form>
      <div className="balloons">
        <div className="balloon balloon1"></div>
        <div className="balloon balloon2"></div>
        <div className="balloon balloon3"></div>
      </div>
    </div>
  );
};

export default ContactUs;
