import React, { useEffect, useState } from 'react'
import Item from './Item'
import {useParams} from 'react-router-dom'
import {collection, getDocs} from 'firebase/firestore'
import db from '../utils/firebase'

function ItemListCategory () {
    const { category } = useParams()
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
    
    useEffect( () => {
        setProducts([])
        getProducts().then ( (products) => {
            filterProductByCat(products, category)
        })
    }, [category])

    const filterProductByCat = (array , category) => {
        return array.map( (product) => {
            if(product.category == category) {
                return setProducts(products => [...products, product]);
            }
        })
    }

    return(
        <div id="itemListCat">
            <h2>{category.toUpperCase()}</h2>
            {products.map( ( product ) => {
                const {id} = product

                return(
                    <Item dataItem={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default ItemListCategory;