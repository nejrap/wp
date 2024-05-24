import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/details/${props.id}`}>
                <img src={props.image} alt={props.name} />
                <p>{props.cijena} BAM</p>
            </Link>
        </div>
    );
}

export default Item;
