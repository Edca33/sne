import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../data/shoes';
import './Home.css';

function Home({ selectedBrand, user, darkMode }) {
  console.log('darkMode in Home:', darkMode);

  const filteredShoes = shoes.filter((shoe) => {
    return (
      selectedBrand === '' || shoe.name.toLowerCase().includes(selectedBrand.toLowerCase())
    );
  });



  return (
    <div className={`home ${darkMode ? 'dark-mode' : ''}`}>

      <div
        className="background"
        style={{
          backgroundImage: darkMode
            ? "url(https://i.gifer.com/4f0I.gif)"
            : "url(https://i.gifer.com/4KDr.gif)",
        }}
      >

      <div className="shoe-list">
        {filteredShoes.map((shoe) => (
          <div key={shoe.id} className="shoe-item">
            <img src={shoe.image} alt={shoe.name} className="tnike" />
            <h2>{shoe.name}</h2>
            <p>{shoe.price}</p>
            <Link to={`/shoe/${shoe.id}`}>
              <button>Ver Detalles</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
