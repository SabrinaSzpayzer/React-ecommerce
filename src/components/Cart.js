import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

function Cart () {
    const { cartProducts, deleteProduct, clear, totalPrice, totalQuantity } = useContext(CartContext)

    if (cartProducts.length == 0) {
        return (
            <div>
                <p>El Carrito de Compras está vacío.</p>
                <Link to={'/productos'}><button type="button" className="btn btn-secondary">Ir a Comprar</button></Link>
            </div>   
        )
    } else {
        return (
            <div>
                <h2>Carrito de Compras</h2>
                <p>Total de Productos en el Carrito: {totalQuantity()}</p>
                <div>
                    {cartProducts.map ( (cartProduct) => {
                        return (
                            <li key={cartProduct.id}>
                                <div>
                                    <img className="imgCart" src={`/${cartProduct.image}`} alt={cartProduct.title}></img>
                                    <p>{cartProduct.title}</p>
                                    <p>Precio: $ {cartProduct.price}</p>
                                    <p>Cantidad: {cartProduct.quantity}</p>
                                    <button className="btn btn-light" onClick={() => deleteProduct(cartProduct)}>Eliminar</button>
                                </div>
                            </li> 
                        )
                    })}    
                </div>
                <p>Total: $ {totalPrice()}</p>
                <button className="btn btn-secondary" onClick={() => clear()}>Vaciar Carrito</button>
            </div>
        )
    }
}

export default Cart