import React from 'react'
import ItemCount from './ItemCount'
import './css/ItemDetail.css'

function ItemDetail ( {detailItem} ) {
    const { id, title, price, stock, image, description, category } = detailItem

    return (
        <div className="detail">
            <img className="imgDescrip" src={`/${image}`} alt={title}></img>
            <div className="detailText">
                <h3>{title}</h3>
                <p>Precio: $ {price}</p>
                <p>{description}</p>
                <ItemCount stock = {stock} initial = {1}/>
            </div>
        </div> 
    )
}

export default ItemDetail;