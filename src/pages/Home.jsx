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
        <p>Marca selecionada: {selectedBrand}</p>
        <Link to="/login" style={{fontSize: "20px"}}>Inicia sesion</Link>
      </header>

      <div className="shoe-list">
        {filteredShoes.map((shoe) => (
          <div key={shoe.id} className="shoe-item">
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
