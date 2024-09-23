import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import shoes from '../data/shoes';
import './ShoeDetail.css';

function ShoeDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const shoe = shoes.find((shoe) => shoe.id === parseInt(id));

  
  const [quantity, setQuantity] = useState(1);

  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  
  const handleAddToCart = () => {
    addToCart(shoe, quantity);  
    navigate('/cart');          
  };

  if (!shoe) {
    return <h2>Zapato no encontrado</h2>;
  }

  return (
    <div className="shoe-detail">
      <img src={shoe.image} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <p>{shoe.price}</p>
      <h5>{shoe.description}</h5>
      <div className="quantity-controls">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
}

export default ShoeDetail;
