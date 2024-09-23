import React from 'react';
import shoes from '../data/shoes';
import { Link } from 'react-router-dom';

function Formales() {

    return (
        <div>
            <h2>Zapatos Formales</h2>
            <div className="shoe-list">
                {shoes.map((shoe) => (
                    <div key={shoe.id} className="shoe-item">
                        <img src={shoe.image} alt={shoe.name} />
                        <h3>{shoe.name}</h3>
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

export default Formales;
