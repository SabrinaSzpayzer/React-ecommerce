import React from 'react'
import {Link} from 'react-router-dom' 
import './css/Error404.css'

function Error404 () {
    return (
        <div>
            <h2>Error 404 - Página no encontrada</h2>
            <Link to={'/'}><button type="button" className="btn btn-secondary btnError">Ir al Inicio</button></Link>
        </div>
    )
}

export default Error404