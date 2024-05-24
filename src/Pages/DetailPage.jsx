import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import gallery_product from '../Components/Assets/data';
import './CSS/DetailPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Dodajte ovo za font-awesome
import Modal from 'react-modal'; // Dodajemo import za react-modal

const DetailPage = () => {
    const { id } = useParams();
    const item = gallery_product.find(product => product.id === parseInt(id));
    const [selectedSection, setSelectedSection] = useState('description');
    const [modalIsOpen, setModalIsOpen] = useState(false); // Dodajemo stanje za modalni prozor

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div className="detail-page">
            <div className="detail-image">
                {/* Dodajemo onClick handler za otvaranje modalnog prozora */}
                <img src={item.image} alt={item.naziv_umjetnika} onClick={() => setModalIsOpen(true)} />
            </div>
            <div className="detail-info">
                <h1>{item.naziv_umjetnika}</h1>
                
                <div className="detail-menu">
                    <button className={`detail-menu-item ${selectedSection === 'description' ? 'active' : ''}`} onClick={() => setSelectedSection('description')}>Opis</button>
                    <button className={`detail-menu-item ${selectedSection === 'price' ? 'active' : ''}`} onClick={() => setSelectedSection('price')}>Cijena</button>
                    <button className={`detail-menu-item ${selectedSection === 'delivery' ? 'active' : ''}`} onClick={() => setSelectedSection('delivery')}>Dostava</button>
                </div>
                {selectedSection === 'description' && (
                    <div className="detail-section">
                        <h2>Opis</h2>
                        <p> Prije kupovine sliku možete pogledati u prostoru naše galerije.<br></br>
- Molimo vas da nas kontaktirate prije eventualnog dolaska kako bi provjerili da li se tražena slika nalazi u prostoru galerije i da li je opremljena.</p>
                    </div>
                )}
                {selectedSection === 'price' && (
                    <div className="detail-section">
                        <h2>Cijena</h2>
                        <p>{item.cijena} BAM</p>
                    </div>
                )}
                {selectedSection === 'delivery' && (
                    <div className="detail-section">
                        <h2>Dostava</h2>
                        <p>- Troškovi dostave nisu uključeni u iskazanu cijenu.<br></br>
                    - Na području grada Sarajeva dostava je besplatna.<br></br>
                    - Za ostale dijelove BIH dostava prema uvjetima i cjenovniku Pošte BIH.<br></br>
                    - Troškove dostave plaća kupac prilikom preuzimanja paketa.</p>
                    </div>
                )}
                <button className='button'>Dodaj u košaricu</button>
            </div>

            {/* Modal za prikaz slike */}
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <img src={item.image} alt={item.naziv_umjetnika} />
            </Modal>
        </div>
    );
}

export default DetailPage;
