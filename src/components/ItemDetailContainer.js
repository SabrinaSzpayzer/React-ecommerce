import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'
import db from '../utils/firebase'

function ItemDetailContainer () {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = async () => {
        const docRef = doc(db, "products", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
        } else {
            console.log("No such document!")
        }
    }

    useEffect( () => {
        getProduct()
    }, [id])

    return(
        <div id="itemListDetail">
            <ItemDetail detailItem={product}/>
        </div>
    ) 
}

export default ItemDetailContainer;