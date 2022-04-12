import React, {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import './css/Item.css'
import CartContext from '../context/CartContext'

function Item ( {dataItem} ) {
    const { id, title, price, stock, image, description, category } = dataItem

    const { addProductToCart } = useContext(CartContext)
    
    const onAdd = (e, count) => {
        addProductToCart({...dataItem, quantity: count})
    }

    return (
        <div className="card">
            <img src={`/${image}`} alt={title}></img>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Precio: $ {price}</p>
                <ItemCount stock = {stock} initial = {1} addToCart={onAdd}/>
                <Link to={`/productos/${category}/${id}`}><button  className="btn btn-light btnVer">Ver</button></Link>
            </div>
        </div> 
    )
}

export default Item;