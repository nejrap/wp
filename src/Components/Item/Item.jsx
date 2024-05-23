
import React from "react"
import './Item.css'

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt=""/>
            <p>{props.cijena}BAM</p>
           
        </div>
    )
}
export default Item;