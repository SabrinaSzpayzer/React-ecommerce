import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import './css/Item.css'

function Item ( {dataItem} ) {
    const { id, title, price, stock, image, category } = dataItem

    return (
        <div className="card">
            <img src={`/${image}`} alt={title}></img>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Precio: $ {price}</p>
                <ItemCount stock = {stock} initial = {1}/>
                <Link to={`/productos/${category}/${id}`}><button  className="btn btn-light btnVer">Ver</button></Link>
            </div>
        </div> 
    )
}

export default Item;