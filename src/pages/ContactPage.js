import React from 'react'
import './css/ContactPage.css'

function ContactPage () {
    return (
        <div>
            <h2>Formulario de Contacto</h2>
            <form className="row g-3 formContacto">
                <div className="col-md-6">
                    <label htmlFor="validationDefault01" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control formInput" id="validationDefault01" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationDefault02" className="form-label">Mail</label>
                    <input type="text" className="form-control formInput" id="validationDefault02" required/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationDefault03" className="form-label">Mensaje</label>
                    <input type="text" className="form-control formInput" id="validationDefault03" required/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary btnFormContacto" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ContactPage