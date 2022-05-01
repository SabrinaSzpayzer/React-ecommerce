import React, { useEffect, useState } from 'react'
import Item from './Item'
import {useParams} from 'react-router-dom'
import {collection, getDocs} from 'firebase/firestore'
import db from '../utils/firebase'
import './css/ItemListCategory.css'

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
        <div>
            <h2>{category.charAt(0).toUpperCase()}{category.slice(1)}</h2>
            <div className="byCard">
                {products.map( ( product ) => {
                    const {id} = product

                    return(
                        <Item dataItem={product} key={id}/>
                    )
                })}
            </div>
        </div>
    ) 
}

export default ItemListCategory;