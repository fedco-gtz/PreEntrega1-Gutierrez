import React from 'react';
import logo from '../../images/logo.png';

function Header() {
    return (
        <header>
            <section className='header'>
            <img className='logo' src={logo} alt="Logo ZapaTienda" />
            <h3 className='caption'>QUE EL CALZADO NO SEA UN PROBLEMA</h3>
            </section>
            <div className='text'>
                <p>Envío rápido a domicilio gratis con tu compra de 2 o más pares. Tu pedido despachado en 24hs.</p>
            </div>
        </header>
    );
}

export default Header;