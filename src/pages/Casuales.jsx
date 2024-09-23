import React from 'react';
import shoes from '../data/shoes';
function Casuales() {

    return (
        <div>
            <h2>Zapatos Casuales</h2>
            <div className="shoe-list">
                {shoes.map((shoe) => (
                    <div key={shoe.id} className="shoe-item">
                        <img src={shoe.image} alt={shoe.name} />
                        <h3>{shoe.name}</h3>
                        <p>{shoe.price}</p>
                        
                        <button>Ver Detalles</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Casuales;
