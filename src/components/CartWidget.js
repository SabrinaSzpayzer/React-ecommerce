import React from 'react'
import {Link} from 'react-router-dom'
import './css/CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

function CartWidget () {
    const { cartProducts, deleteProduct, clear, totalQuantity } = useContext(CartContext)

    const endPurchase = () => {
        console.log("Se añadieron productos al carrito.")
    }

    if (cartProducts.length == 0) {
        return (
            <></>
        )
    } else {
        return (
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle btnCart" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faCartShopping} /> ({totalQuantity})
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end cartWidget">Carrito de Compras
                        {cartProducts.map ( (cartProduct) => {
                            return (
                                <li key={cartProduct.id}>
                                    <div className='cartWidgetCard'>
                                        <img className="imgCart" src={`/${cartProduct.image}`} alt={cartProduct.title}></img>
                                        <p>{cartProduct.title}</p>
                                        <p>Precio: $ {cartProduct.price}</p>
                                        <p>Cantidad: {cartProduct.quantity}</p>
                                        <button className="btn btn-light btnCartWidget" onClick={() => deleteProduct(cartProduct)}>Eliminar</button>
                                    </div>
                                </li> 
                            )
                        })}
                        <li><button className="btn btn-secondary btnCartWidget" onClick={() => clear()}>Vaciar Carrito</button></li>
                        <li><Link to={'/cart'}><button type="button" className="btn btn-secondary btnCartWidget" onClick={endPurchase}>Finalizar Compra</button></Link></li>
                    </ul>
                </div>  
            </div>   
        )
    }
}

export default CartWidget;