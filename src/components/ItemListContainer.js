import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer (props) {
    return (
        <div>
            <h2>Hola {props.nombre}!</h2>
            <h2>Productos</h2>
            <ItemCount />
        </div>   
    )
}

export default ItemListContainer;