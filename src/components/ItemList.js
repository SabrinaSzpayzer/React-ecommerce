import React, { useEffect, useState } from 'react'
import Item from './Item'
import mockProducts from '../utils/mockProducts'

function ItemList () {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            resolve(mockProducts)      
        })
    }

    useEffect ( () => {
        getProducts().then ( (products) => {
            setProducts(products)
        })
    }, [])

    return(
        <div id="itemList">
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