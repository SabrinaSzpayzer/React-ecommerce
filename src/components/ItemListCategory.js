import React, { useEffect, useState } from 'react'
import Item from './Item'
import mockProducts from '../utils/mockProducts'
import {useParams} from 'react-router-dom'

function ItemListCategory () {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect( () => {
        filterProductByCat(mockProducts, category)
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