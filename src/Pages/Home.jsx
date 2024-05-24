import React from 'react';
import Popular from '../Components/Popular/Popular';
import Footer from '../Components/Footer/Footer';
import Ad from '../Components/Ad/Ad'
import ShapeDivider from './ShapeDivider';
import './CSS/Home.css'
import TestMotials from '../Components/TestMonials/TestMonials'


const Home = () => {
    return (
        <div>
            <ShapeDivider/>
            <Ad/>
            <TestMotials/>

            <Footer/>
        </div>
    );
}

export default Home;