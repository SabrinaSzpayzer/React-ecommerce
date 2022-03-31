import React from 'react'
import './css/ItemDetail.css'

function ItemDetail ( {detailItem} ) {
    const { id, title, price, stock, image, description } = detailItem

    return (
        <div className="detail">
            <img className="imgDescrip" src={`./${image}`} alt={title}></img>
            <div>
                <h3>{title}</h3>
                <p>Precio: $ {price}</p>
                <p>{description}</p>
            </div>
        </div> 
    )
}

export default ItemDetail;