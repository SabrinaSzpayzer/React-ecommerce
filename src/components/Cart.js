import React from 'react'
import {Link} from 'react-router-dom'
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import db from '../utils/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './css/Cart.css'

function Cart () {
    const { cartProducts, deleteProduct, clear, totalPrice, totalQuantity } = useContext(CartContext)
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map( (cartProduct) => {
                return{
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price,
                    quantity: cartProduct.quantity
                }
            }),
            total: totalPrice
        }
    )

    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
    }

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    if (cartProducts.length == 0) {
        return (
            <div>
                <p className='vacio'>El Carrito de Compras está vacío.</p>
                <Link to={'/productos'}><button type="button" className="btn btn-secondary btnCart">Ir a Comprar</button></Link>
            </div>   
        )
    } else {
        return (
            <div>
                <h2>Carrito de Compras</h2>
                <p>Total de Productos en el Carrito: {totalQuantity}</p>
                <ul className='ulCart'>
                    {cartProducts.map ( (cartProduct) => {
                        return (
                            <li key={cartProduct.id}>
                                <div className='cartCard'>
                                    <img className="imgCart" src={`/${cartProduct.image}`} alt={cartProduct.title}></img>
                                    <p>{cartProduct.title}</p>
                                    <p>Precio: ${cartProduct.price}</p>
                                    <p>Cantidad: {cartProduct.quantity}</p>
                                    <button className="btn btn-light btnCart" onClick={() => deleteProduct(cartProduct)}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </li> 
                        )
                    })}    
                </ul>
                <p className='totalPrice'>Total: $ {totalPrice}</p>
                <button className="btn btn-secondary btnCart" onClick={() => clear()}>Vaciar Carrito</button>
                <div>
                    {successOrder ? (
                        <div>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Finalizar Compra
                            </button>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Completar Compra</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Se completó la orden de compra. El número de pedido es {successOrder}. Nos comunicaremos a la brevedad para coordinar la entrega.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => clear()}>Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </div>                        
                    ) : (
                        <div>
                            <button type="button" className="btn btn-primary btnCart" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Comprar
                            </button>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Completar Compra</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={handleSubmit} className="formCompra">
                                                <input type="text" name='name' placeholder='Nombre' className='inputCompra'
                                                    onChange={handleChange} 
                                                    value={formData.name}
                                                    required
                                                />
                                                <input type="number" name='phone' placeholder='Telefono' className='inputCompra'
                                                    onChange={handleChange} 
                                                    value={formData.phone}
                                                    required
                                                />
                                                <input type="mail" name='email' placeholder='Mail' className='inputCompra'
                                                    onChange={handleChange} 
                                                    value={formData.email}
                                                    required
                                                />
                                                <button type="submit" className="btn btn-primary">Confirmar Compra</button>        
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Cart