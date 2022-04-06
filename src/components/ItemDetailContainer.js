import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import mockProducts from '../utils/mockProducts'
import {useParams} from 'react-router-dom'

function ItemDetailContainer () {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(mockProducts, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                setProduct(product)
            }
        })
    }

    return(
        <div id="itemListDetail">
            <ItemDetail detailItem={product}/>
        </div>
    ) 
}

export default ItemDetailContainer;