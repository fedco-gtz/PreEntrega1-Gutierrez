import React from 'react';

function ItemListContainer({ greeting }) {
    const catalogo = [
        { id: 1, informacion: 'Colección Jordan', nombre: 'Air Jordan 1 Retro High OG', descripcion: 'Zapatillas Jordan Unisex', precio: 349.999 },
        { id: 2, informacion: 'Colección Jordan', nombre: 'Air Jordan 1 Low OG', descripcion: 'Zapatillas Jordan para Mujer', precio: 259.999 },
        { id: 3, informacion: 'Colección Jordan', nombre: 'Jordan Play', descripcion: 'Sandalias Jordan para Hombre', precio: 77.999 },
    ];

    return (
        <>
            <h1 className='tittleCatalogue'> {greeting} </h1>
            <ul className='list'>
                {catalogo.map(producto => (
                    <li className='product' key={producto.id}>
                        <li>{producto.informacion}</li>
                        <li>{producto.nombre}</li>
                        <li>{producto.descripcion}</li>
                        <li>${producto.precio}</li>
                    </li>
                    ))}
            </ul>
        </>
    );
}

export default ItemListContainer;