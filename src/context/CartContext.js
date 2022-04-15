import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id == product.id)
        !exist && setCartProducts(cartProducts => [...cartProducts, product])
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== product.id))
    }
    
    const clear = () => {
        setCartProducts([])
    }

    const totalPrice = () => {
        let total = 0

        cartProducts.map ( (cartProduct)  => {
            total = cartProduct.price * cartProduct.quantity + total
        })

        return total
    }

    const totalQuantity = () => {
        let totalQ = 0

        cartProducts.map ( (cartProduct)  => {
            totalQ = cartProduct.quantity + totalQ
        })

        return totalQ
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