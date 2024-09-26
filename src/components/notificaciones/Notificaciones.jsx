import React, { useEffect, useState } from 'react';
import '../../pages/Notification.css'; 

const Notification = ({ message, type, removeNotification }) => {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      
      setShow(true);
  
      
      const timeout = setTimeout(() => {
        setShow(false); 
        setTimeout(removeNotification, 500); 
      }, 3000);
  
      return () => clearTimeout(timeout); 
    }, [removeNotification]);
  
    return (
      <div className={`notification ${type} ${show ? 'show' : ''}`}>
        <p>{message}</p>
        <button onClick={() => setShow(false)}>X</button>
      </div>
    );
  };
  
  export default Notification;