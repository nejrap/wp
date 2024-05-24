import React from 'react';
import image1 from '../Assets/reklama1.jpg';
import image2 from '../Assets/reklama2.jpg';
import image3 from '../Assets/reklama3.jpg';
import image4 from '../Assets/reklama4.jpg';
import './Ad.css';


const ImageRow = () => {
    return (
        <div className="image-row-container">
            <h1 className="image-row-title">Zavirite u našu galeriju...</h1>
            <div className="image-row">
                <img src={image1} alt="Slika 1" className="image" />
                <img src={image2} alt="Slika 2" className="image" />
                <img src={image3} alt="Slika 3" className="image" />
                <img src={image4} alt="Slika 4" className="image" />
            </div>
        </div>
    );
}

export default ImageRow;

