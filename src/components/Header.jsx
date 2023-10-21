import { useState } from 'react'
import Logo from '../img/logovet.png'

export const Header = ({setFiltroTexto}) => {
    
    const handleFiltroTexto = (texto) => {
        setFiltroTexto(texto);
    }

    return (
        <header className="header contenedor">
            <div className="contenido__header">
                <div className="header__contenedor__logo">
                    <img className="header__logo" src={Logo} alt="imagen logo" />
                </div>
                <div className="header__contenedor__busqueda">
                    <i className="fas fa-search header__busqueda__imagen"></i>
                    <input className="header__busqueda" type="text" placeholder="Buscar mascota"
                        onChange={e => handleFiltroTexto(e.target.value)} />
                </div>
            </div>
        </header>
    )
}
