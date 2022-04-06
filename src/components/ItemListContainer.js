import React from 'react'
import ItemList from './ItemList'
import './css/ItemListContainer.css'
import { Link } from 'react-router-dom'

function ItemListContainer () {
    return (
        <div>
            <h2 className="productosTitulo">Categorías</h2>
            <Link to={`/productos/velas`}><button  className="btn btn-light btnCat">Velas</button></Link>
            <Link to={`/productos/combos`}><button  className="btn btn-light btnCat">Combos</button></Link>
            <h2 className="productosTitulo">Todos los Productos</h2>
            <ItemList className="itemFlex" />
        </div>   
    )
}

export default ItemListContainer;