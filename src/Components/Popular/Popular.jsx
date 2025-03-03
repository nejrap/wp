import React from 'react';
import gallery_product from '../Assets/data';
import Item from '../Item/Item';
import './Popular.css';

const Popular = () => {
    return (
        <div className="galerija">
            <div className="instagram-post">
                {gallery_product.slice(0, 12).map((item, i) => {
                    return (
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.naziv_umjetnika}
                            naslov_djela={item.naslov_djela}
                            image={item.image} 
                            cijena={item.cijena} 
                            tehnika={item.tehnika} 
                            dimenzija={item.dimenzije}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Popular;
