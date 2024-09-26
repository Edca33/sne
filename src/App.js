import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoeDetail from './pages/ShoeDetail';
import Cart from './pages/Cart';
import Checkout from './pages/checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Login from './pages/Login';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import Navbar from './components/navbar/navbar';
import Notification from './components/notificaciones/Notificaciones'; 
import LoadingSpinner from './components/loader/loader'; 
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    setTimeout(() => {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser);
      }

      const savedCart = JSON.parse(localStorage.getItem('cart'));
      if (savedCart) {
        setCart(savedCart);
      }
      
      setIsLoading(false); 
    }, 2000); 
  }, []);

  const addToCart = (shoe, quantity) => {
    const existingItem = cart.find(item => item.id === shoe.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity }]);
    }

    setNotification({ message: `${shoe.name} agregado al carrito`, type: 'success' });
  };

  const removeFromCart = (id) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      const confirmRemoval = window.confirm(`¿Está seguro que quiere eliminar ${item.name}?`);
      
      if (confirmRemoval) {
        setCart(cart.filter(item => item.id !== id));
        setNotification({ message: `${item.name} eliminado del carrito`, type: 'warning' });
      }
    }
  };

  const clearCart = () => {
    setCart([]);
    setNotification({ message: 'Carrito vaciado', type: 'error' });
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const removeNotification = () => {
    setNotification(null);
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItemCount} user={user} setSelectedBrand={setSelectedBrand} />

      <div className="App-content">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            <Route path="/" element={<Home selectedBrand={selectedBrand} />} />
            <Route path="/shoe/:id" element={<ShoeDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/perfil" element={<Perfil user={user} setUser={setUser} />} />
          </Routes>
        )}
      </div>

      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          removeNotification={removeNotification} 
        />
      )}
    </Router>
  );
}

export default App;
