import React from 'react';
import { useParams } from 'react-router-dom';
import gallery_product from '../Components/Assets/data';
import './CSS/DetailPage.css'

const DetailPage = () => {
    const { id } = useParams();
    console.log("ID from URL:", id); // Dodano za ispis ID-a iz URL-a
    const item = gallery_product.find(product => product.id === parseInt(id));
    console.log("Found product:", item); // Dodano za ispis pronađenog proizvoda

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div className="detail-page">
            <img src={item.image} alt={item.naziv_umjetnika} />
            <h1>{item.naziv_umjetnika}</h1>
            <p>Tehnika: {item.tehnika}</p>
            <p>Dimenzije: {item.dimenzije}</p>
            <p>Cijena: {item.cijena} BAM</p>
        </div>
    );
}

export default DetailPage;
