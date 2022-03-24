import React from 'react'
import ItemCount from './ItemCount'
import './css/ItemListContainer.css'

function ItemListContainer () {
    let dataItem = {
        title: 'Vela Gardenia',
        price: 1500,
        stock: 5
    }

    return (
        <div>
            <h2 className="productosTitulo">Productos</h2>
            <div className="card">
                <img src={require('./images/vela1.jpg')} alt="Vela Gardenia"></img>
                <div className="card-body">
                    <h3 className="card-title">{dataItem.title}</h3>
                    <p className="card-text">Precio: $ {dataItem.price}</p>
                    <ItemCount stock = {dataItem.stock} initial = {1}/>
                </div>
            </div>
        </div>   
    )
}

export default ItemListContainer;