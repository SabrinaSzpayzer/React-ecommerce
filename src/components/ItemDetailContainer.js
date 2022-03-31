import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
    const mockProductsDetail = [{
        id: 1,
        title: 'Vela Gardenia',
        price: 1500,
        stock: 5,
        image: 'vela1.jpg',
        description: 'Vela vegana con esencia de Gardenia.'
    },
    {
        id: 2,
        title: 'Vela Coco y Vainilla',
        price: 1500,
        stock: 8,
        image: 'vela2.jpg',
        description: 'Vela vegana con esencia de Coco y Vainilla.'
    },
    {
        id: 3,
        title: 'Vela Cítricos',
        price: 1500,
        stock: 9,
        image: 'vela3.jpg',
        description: 'Vela vegana con esencia de Cítricos.'
    },
    {
        id: 4,
        title: 'Vela y Difusor a elección',
        price: 3500,
        stock: 10,
        image: 'velaydifusor.jpg',
        description: 'Vela y difusor veganos. Esencias a elección a coordinar por mensaje privado.'
    }]

    const [productsDetail, setProductsDetail] = useState([])

    const getProductsDetail = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                return resolve(mockProductsDetail)
            }, 2000);       
        })
    }

    useEffect ( () => {
        getProductsDetail().then ( (productsDetail) => {
            setProductsDetail(productsDetail)
        })
    }, [])

    return(
        <div id="itemListDetail">
            <h2>Detalle de Productos</h2>
            {productsDetail.map( ( productDetail ) => {
                const {id} = productDetail

                return(
                    <ItemDetail detailItem={productDetail} key={id}/>
                )
            })}
        </div>
    ) 
}

export default ItemDetailContainer;