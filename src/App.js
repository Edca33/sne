import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoeDetail from './pages/ShoeDetail';
import Cart from './pages/Cart';
import Checkout from './pages/checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');  

  const addToCart = (shoe, quantity) => {
    const existingItem = cart.find(item => item.id === shoe.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    const item = cart.find(item => item.id === id); 

    if (item) {
      const confirmRemoval = window.confirm(`¿Está seguro que quiere eliminar ${item.name}?`);
      
      if (confirmRemoval) {
        setCart(cart.filter(item => item.id !== id));
      }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Navbar cartItemCount={cartItemCount} setSelectedBrand={setSelectedBrand} />
      
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Home selectedBrand={selectedBrand} />} />
          <Route path="/shoe/:id" element={<ShoeDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
