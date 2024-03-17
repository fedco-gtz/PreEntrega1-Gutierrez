import React from 'react';
import cart from '../../images/cart.png';

function CartWidget() {
    return (
        <div className='cartWidget'>
            <img src={cart} alt="Carrito" />
            4
        </div>
    );
}

export default CartWidget;