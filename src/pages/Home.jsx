import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../data/shoes';
import './Home.css';

function Home({ selectedBrand }) {  

  const filteredShoes = shoes.filter((shoe) => {
    return selectedBrand === '' || shoe.name.toLowerCase().includes(selectedBrand.toLowerCase());
  });

  return (
    <div className="home">
      <header className="App-header">
        <h1>DualMode Shoes</h1>
        <p>Encuentra los mejores estilos y precios</p>
      </header>

      <div className="shoe-list">
        {filteredShoes.map((shoe) => (
          <div key={shoe.id} className="shoe-item"
          style={{
            boxShadow:
              shoe.name === 'Nike'
                ? '0 4px 8px 10px rgba(0, 0, 255, 0.5)' 
                : shoe.name === 'Nike Air Max Motion 2'
                ? '0 4px 8px 10px rgba(0, 255, 0, 0.5)' 
                : shoe.name === 'Nike Air Zoom Pegasus'
                ? '0 4px 8px 10px rgba(255, 0, 0, 0.5)' 
                : shoe.name === 'Nike React Infinity Run'
                ? '0 4px 8px 10px Blue' 
                : shoe.name === 'Converse Chuck Taylor'
                ? '0 4px 8px 10px rgba(128, 0, 128, 0.5)' 
                : shoe.name === 'Adidas Ultraboost 21'
                ? '0 4px 8px 10px rgba(128, 128, 128, 0.5)' 
                : shoe.name === 'Vans Old Skool'
                ? '0 4px 8px 10px rgba(255, 255, 0, 0.5)' 
                : shoe.name === 'Puma RS-X'
                ? '0 4px 8px 10px rgba(255, 165, 0, 0.5)'
                : shoe.name === 'Nike Air jordan'
                ? '0 4px 8px 10px gray' 
                : '0 4px 8px rgba(0, 0, 0, 0.2)', 
                
          }}
          >
            <img src={shoe.image} alt={shoe.name} className='tnike' />
            <h2>{shoe.name}</h2>
            <p>{shoe.price}</p>
            <Link to={`/shoe/${shoe.id}`}>
              <button>Ver Detalles</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
