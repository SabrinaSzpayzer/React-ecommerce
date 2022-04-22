import React from 'react'
import {Link} from 'react-router-dom'
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import db from '../utils/firebase'
import { addDoc, collection } from 'firebase/firestore'

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
                <p>El Carrito de Compras está vacío.</p>
                <Link to={'/productos'}><button type="button" className="btn btn-secondary">Ir a Comprar</button></Link>
            </div>   
        )
    } else {
        return (
            <div>
                <h2>Carrito de Compras</h2>
                <p>Total de Productos en el Carrito: {totalQuantity}</p>
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
                <p>Total: $ {totalPrice}</p>
                <button className="btn btn-secondary" onClick={() => clear()}>Vaciar Carrito</button>
                <div>
                    {successOrder ? (
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Finalizar Compra
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Completar Compra</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Se completó su orden de compra. Su número de pedido es {successOrder}.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => clear()}>Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </div>                        
                    ) : (
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Finalizar Compra
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Completar Compra</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form onSubmit={handleSubmit}>
                                                <input type="text" name='name' placeholder='Nombre' 
                                                    onChange={handleChange} 
                                                    value={formData.name}
                                                />
                                                <input type="number" name='phone' placeholder='Telefono' 
                                                    onChange={handleChange} 
                                                    value={formData.phone}
                                                />
                                                <input type="mail" name='email' placeholder='mail' 
                                                    onChange={handleChange} 
                                                    value={formData.email}
                                                />
                                                <button type="submit" class="btn btn-primary">Confirmar Compra</button>        
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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