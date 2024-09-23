import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)), 0);

  return (
    <div className="cart">
      <h2>Tu Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div>
          <p>Tu carrito está vacío.</p>
          <Link to="/">
            <button className="go-shopping-btn">Ir a Comprar</button>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <Link to="/checkout">
            <button>Proceder al Checkout</button>
          </Link>
          <Link to="/">
          <center><button>Seguir comprando</button></center>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
