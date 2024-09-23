import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkout.css';

function Checkout({ cart, clearCart }) {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [orderId, setOrderId] = useState(null); 
    const navigate = useNavigate();

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    
    const generateOrderId = () => {
        return Math.floor(Math.random() * 1000000);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        
        const newOrderId = generateOrderId();
        setOrderId(newOrderId);

        
        clearCart();

        
        navigate(`/order-confirmation/${newOrderId}`);
    };

    if (cart.length === 0) {
        return <p>No hay productos en el carrito. Agrega algo antes de continuar con el checkout.</p>;
    }

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className='input-blur'
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input className='input-blur2'
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    );
}

export default Checkout;
