import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount'
import './css/ItemDetail.css'

function ItemDetail ( {detailItem} ) {
    const { id, title, price, stock, image, description, category } = detailItem

    const [cartQuantity, setCartQuantity] = useState (0)

    const [hideItemCount, setHideItemCount] = useState(true)

    const onAdd = (e, count) => {
        setCartQuantity (cartQuantity + count)
        setHideItemCount(false)
    }

    const endPurchase = () => {
        console.log("Se añadieron", cartQuantity, "productos al carrito.")
    }

    return (
        <div className="detail">
            <img className="imgDescrip" src={`/${image}`} alt={title}></img>
            <div className="detailText">
                <h3>{title}</h3>
                <p>Precio: $ {price}</p>
                <p>{description}</p>
                <ItemCount stock = {stock} initial = {1} addToCart={onAdd} hide={hideItemCount}/>
                <Link to={'/cart'}><button type="button" className="btn btn-light" onClick={endPurchase}>Finalizar Compra</button></Link>
            </div>
        </div> 
    )
}

export default ItemDetail;