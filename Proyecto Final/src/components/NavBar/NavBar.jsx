import React from 'react';
// |-------------| //
// | Estilos CSS | //
// |-------------| //
import '../../styles/NavBar.css'
// |-------------| //
// | Componentes | //
// |-------------| //
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href="/">PROMOCIONES</a></li>
                <li><a href="/">MIS COMPRAS</a></li>
                <li><a href="/"><CartWidget /></a></li>
            </ul>
        </nav>
    );
}

export default NavBar;