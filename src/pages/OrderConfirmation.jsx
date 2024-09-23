import React from 'react';
import { useParams } from 'react-router-dom';

function OrderConfirmation() {
  const { orderId } = useParams(); 

  return (
    <div className="order-confirmation">
      <h1>Gracias por tu compra!!</h1>
      <p>Tu número de orden es: <strong>{orderId}</strong></p>
    </div>
  );
}

export default OrderConfirmation;
