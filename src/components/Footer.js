import React from 'react'
import {Link} from 'react-router-dom'
import './css/Footer.css'

function Footer () {
    return (
        <div>
            <div className="b-example-divider"></div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted pFooter">© 2022 Aromas Luna</p>
                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-muted">Home</Link></li>
                        <li className="nav-item"><Link to={'/productos'} className="nav-link px-2 text-muted">Productos</Link></li>
                        <li className="nav-item"><Link to={'/contacto'} className="nav-link px-2 text-muted">Contacto</Link></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer