import React from 'react';
import '../../ShoeList.css';

const shoes = [
  {
    id: 1,
    name: 'Deportivos Modernos',
    price: '$120',
    image: 'https://example.com/deportivos.jpg',
  },
  {
    id: 2,
    name: 'Casuales Elegantes',
    price: '$85',
    image: 'https://example.com/casuales.jpg',
  },
  {
    id: 3,
    name: 'Formales Clásicos',
    price: '$150',
    image: 'https://example.com/formales.jpg',
  },
];

function ShoeList() {
  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="shoe-item">
          <img src={shoe.image} alt={shoe.name} />
          <h2>{shoe.name}</h2>
          <p>{shoe.price}</p>
          <button>Comprar Ahora</button>
        </div>
      ))}
    </div>
  );
}

export default ShoeList;
