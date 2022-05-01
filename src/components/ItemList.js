import React, { useEffect, useState } from 'react'
import Item from './Item'
import {collection, getDocs} from 'firebase/firestore'
import db from '../utils/firebase'
import './css/ItemList.css'

function ItemList () {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const itemsCollection = collection(db, 'products')
        const productsSnapshot = await getDocs(itemsCollection)
        const productList = productsSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect ( () => {
        getProducts().then ( (products) => {
            setProducts(products)
        })
    }, [])

    return(
        <div className="byCard">
            {products.map( ( product ) => {
                const {id} = product

                return(
                    <Item dataItem={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default ItemList;