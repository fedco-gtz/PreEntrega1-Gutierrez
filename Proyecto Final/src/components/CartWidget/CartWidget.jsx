import React from 'react';
import cart from '../../images/cart.png';

function CartWidget() {
    return (
        <div className='cartWidget'>
            <img src={cart} alt="Carrito" />
            <span className='cardNumber'>0</span>
        </div>
    );
}

export default CartWidget;