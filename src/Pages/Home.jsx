import React from 'react';
import Popular from '../Components/Popular/Popular';
import Footer from '../Components/Footer/Footer';
import Ad from '../Components/Ad/Ad';
import ShapeDivider from './ShapeDivider';
import './CSS/Home.css';
import TestMotials from '../Components/TestMonials/TestMonials';

const Home = () => {
    const userId = 1; // Pretpostavljamo da imate način da dobijete trenutnog korisnika

    return (
        <div>
            <ShapeDivider />
            <Ad />
            
            <TestMotials />
            <Footer />
        </div>
    );
}

export default Home;
