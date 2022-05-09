import React from 'react'
import ItemList from './ItemList'
import './css/ItemListContainer.css'

function ItemListContainer () {
    return (
        <div>
            <h2 className="productosTitulo">Todos los Productos</h2>
            <ItemList className="itemFlex" />
        </div>   
    )
}

export default ItemListContainer;