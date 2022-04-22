import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addProductToCart = (product) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id == product.id)
        if(!exist) { 
            setCartProducts(cartProducts => [...cartProducts, product])
            setTotalPrice(totalPrice + product.price * product.quantity)
            setTotalQuantity(totalQuantity + product.quantity)
        }
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== product.id))
        setTotalPrice(totalPrice - product.price * product.quantity)
        setTotalQuantity(totalQuantity - product.quantity)
    }
    
    const clear = () => {
        setCartProducts([])
        setTotalPrice(0)
        setTotalQuantity(0)
    }

    const data = {
        cartProducts,
        addProductToCart,
        deleteProduct,
        clear,
        totalPrice,
        totalQuantity
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext