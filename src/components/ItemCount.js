import React, {useState} from "react"
import './css/ItemCount.css'

function ItemCount ({stock, initial}) {
    const [ count, setCount ] = useState(initial)
    const addItem = () => {
        if (stock > count) {
        setCount(count + 1) 
        }
    }
    const removeItem = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const onAdd = () => { 
        alert(`Agregaste ${count} productos al carrito.`)
    }

    return (
        <div>
            <div className="itemCount">
                <button type="button" className="btn btn-light" onClick={removeItem}>-</button>
                <p className="pCount">{count}</p>
                <button type="button" className="btn btn-light" onClick={addItem}>+</button>
            </div>
            <button type="button" className="btn btn-light btnOnAdd" onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;