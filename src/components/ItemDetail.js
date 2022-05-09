import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import './css/ItemDetail.css'
import CartContext from '../context/CartContext'

function ItemDetail ( {detailItem} ) {
    const { id, title, price, stock, image, description, category } = detailItem

    const { addProductToCart } = useContext(CartContext)

    const onAdd = (e, count) => {
        addProductToCart({...detailItem, quantity: count})
    }

    return (
        <div className="detail">
            <img className="imgDescrip" src={`/${image}`} alt={title}></img>
            <div className="detailText">
                <h3>{title}</h3>
                <p>Precio: $ {price}</p>
                <p>{description}</p>
                <ItemCount stock = {stock} initial = {1} addToCart={onAdd}/>
            </div>
        </div> 
    )
}

export default ItemDetail;