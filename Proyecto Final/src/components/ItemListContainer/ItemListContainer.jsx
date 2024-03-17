import React from 'react';

function ItemListContainer({ greeting }) {
    const catalogo = [
        { id: 1, nombre: 'Producto 1', precio: 10 },
        { id: 2, nombre: 'Producto 2', precio: 20 },
        { id: 3, nombre: 'Producto 3', precio: 30 },
    ];

    return (
        <div>
            <h1> {greeting} </h1>
            <h2>Catálogo de la tienda:</h2>
            <ul>
                {catalogo.map(producto => (
                    <li key={producto.id}>
                        <span>{producto.nombre}</span> - <span>${producto.precio}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;