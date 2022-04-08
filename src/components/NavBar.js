import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'
import './css/NavBar.css'

function NavBar () {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>Luna | Aromas y Velas</Link>                                       
                    <div className="menuCart">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={'/productos'}>Productos</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to={'/productos/velas'}>Velas</Link></li>
                                        <li><Link className="dropdown-item" to={'/productos/combos'}>Combos</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/contacto'}>Contacto</Link>
                                </li>
                            </ul>                        
                        </div>
                        <CartWidget /> 
                    </div>
                </div>               
            </nav>
        </header>
    )
}

export default NavBar;