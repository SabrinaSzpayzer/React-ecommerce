import React from 'react'
import './css/HomePage.css'
import { Link } from 'react-router-dom'

function HomePage () {
    return (
        <div className='homePage container-fluid'>
            <h2>Bienvenido</h2>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to={`/productos`}>
                            <img src={`./todos.jpg`} className="d-block w-100" alt="Velas"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Todos los Productos</h5>
                                <p>Productos veganos con las más deliciosas esencias.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to={`/productos/velas`}>
                            <img src={`./dosvelas.jpg`} className="d-block w-100" alt="Velas"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Velas</h5>
                                <p>Velas veganas con las más deliciosas esencias.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to={`/productos/difusores`}>
                            <img src={`./dosdifusores.jpg`} className="d-block w-100" alt="Difusores"/>
                            <div className="carousel-caption d-none d-md-block">   
                                <h5>Difusores</h5>
                                <p>Difusores veganos con las más deliciosas esencias.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to={`/productos/promociones`}>
                            <img src={`./velaydifusor.jpg`} className="d-block w-100" alt="Promociones"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Promociones</h5>
                                <p>Combinando productos obtenes un precio especial.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage