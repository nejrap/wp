import React from 'react';
import ContactUs from '../Components/Contact/Contact';
import ShapeDivider from './ShapeDivider';
import Footer from '../Components/Footer/Footer';

function Contact(props) {
    return (
        <div>
            <ShapeDivider/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

export default Contact;