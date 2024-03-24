import React from 'react';
import { useState } from 'react';
// |-------------| //
// | Estilos CSS | //
// |-------------| //
import '../../styles/NavBar.css'
// |-------------| //
// | Componentes | //
// |-------------| //
import CartWidget from '../CartWidget/CartWidget';
import SubMenu from '../SubMenu/SubMenu';

function NavBar() {
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a onClick={toggleSubmenu} className={submenuOpen ? 'active' : ''}>CATEGORIAS {submenuOpen}&nbsp;▼</a></li>
                    <li><a href="/">MIS PEDIDOS</a></li>
                    <li><a href="/"><CartWidget /></a></li>
                </ul>
            </nav>
            {submenuOpen && <SubMenu />}
        </>
    );
}

export default NavBar;
