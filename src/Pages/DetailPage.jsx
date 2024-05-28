import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CSS/DetailPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from 'react-modal';
import { useShopContext } from '../Components/Context/ShopContext'; // Ensure correct path

const DetailPage = () => {
  const { id } = useParams();
  const { data, addToCart } = useShopContext(); // Destructure addToCart and data from context
  const item = data.find(product => product.id === parseInt(id));
  const [selectedSection, setSelectedSection] = useState('opis');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Log ID and item on component mount for debugging
  useEffect(() => {
    console.log('Item ID:', id);
    console.log('Item:', item);
  }, [id, item]);

  if (!item) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log('Adding item to cart:', item.id); // Log item ID before adding to cart
    addToCart(item.id);
  };

  return (
    <div className="detail-page">
      <div className="detail-image">
        <img src={item.image} alt={item.naziv_umjetnika} onClick={() => setModalIsOpen(true)} />
      </div>
      <div className="detail-info">
        <h1>{item.naziv_umjetnika}</h1>
        <div className="detail-menu">
          <button className={`detail-menu-item ${selectedSection === 'opis' ? 'active' : ''}`} onClick={() => setSelectedSection('opis')}>Opis</button>
          <button className={`detail-menu-item ${selectedSection === 'cijena' ? 'active' : ''}`} onClick={() => setSelectedSection('cijena')}>Cijena</button>
          <button className={`detail-menu-item ${selectedSection === 'dostava' ? 'active' : ''}`} onClick={() => setSelectedSection('dostava')}>Dostava</button>
        </div>
        {selectedSection === 'opis' && (
          <div className="detail-section">
            <h2>Opis</h2>
            <p> Prije kupovine sliku možete pogledati u prostoru naše galerije.<br />
              - Molimo vas da nas kontaktirate prije eventualnog dolaska kako bi provjerili da li se tražena slika nalazi u prostoru galerije i da li je opremljena.
            </p>
          </div>
        )}
        {selectedSection === 'cijena' && (
          <div className="detail-section">
            <h2>Cijena</h2>
            <p>{item.cijena} BAM</p>
          </div>
        )}
        {selectedSection === 'dostava' && (
          <div className="detail-section">
            <h2>Dostava</h2>
            <p>- Troškovi dostave nisu uključeni u iskazanu cijenu.<br />
              - Na području grada Sarajeva dostava je besplatna.<br />
              - Za ostale dijelove BIH dostava prema uvjetima i cjenovniku Pošte BIH.<br />
              - Troškove dostave plaća kupac prilikom preuzimanja paketa.
            </p>
          </div>
        )}
        <button className='button' onClick={handleAddToCart}>Dodaj u košaricu</button> {/* Use handleAddToCart */}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <img src={item.image} alt={item.naziv_umjetnika} />
      </Modal>
    </div>
  );
};

export default DetailPage;
