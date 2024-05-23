
import React from "react"
import './Item.css'

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt=""/>
            <p>{props.naziv_umjetnika}</p>
           
        </div>
    )
}
export default Item;