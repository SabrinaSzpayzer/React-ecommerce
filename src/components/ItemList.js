import React, { useEffect, useState } from 'react'
import Item from './Item'

function ItemList () {
    const mockProducts = [{
        id: 1,
        title: 'Vela Gardenia',
        price: 1500,
        stock: 5,
        image: 'vela1.jpg'
    },
    {
        id: 2,
        title: 'Vela Coco y Vainilla',
        price: 1500,
        stock: 8,
        image: 'vela2.jpg'
    },
    {
        id: 3,
        title: 'Vela Cítricos',
        price: 1500,
        stock: 9,
        image: 'vela3.jpg'
    },
    {
        id: 4,
        title: 'Vela y Difusor a elección',
        price: 3500,
        stock: 10,
        image: 'velaydifusor.jpg'
    }]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                return resolve(mockProducts)
            }, 2000);       
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