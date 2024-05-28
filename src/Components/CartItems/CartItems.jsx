import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';
import './CartItems.css';

const CartItems = () => {
    const { data, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <h1>..završi kupovinu </h1>
            <div className='cartitems-format-main'>
                <p>Slika</p>
                <p>Naziv slike</p>
                <p>Cijena</p>
                <p>Količina</p>
                <p>Ukupno</p>
                <p>Ukloni</p>
            </div>
            <hr />
            {data.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className="cartitems-format">
                            <img src={e.image} alt={e.name} className="cartion-product" />
                            <p>{e.naslov_djela}</p>
                            <p>BAM {e.cijena}</p>
                            <p>{cartItems[e.id]}</p>
                            <p>BAM {e.cijena * cartItems[e.id]}</p>
                            <img 
                                src={remove_icon} 
                                onClick={() => removeFromCart(e.id)} 
                                alt="Remove" 
                                className="remove-icon"
                            />
                        </div>
                    );
                }
                return null; // Ensure we return null if the item is not in the cart
            })}
        </div>
    );
};

export default CartItems;
