import React, { useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    if (registeredUsers.some(user => user.email === email)) {
      setErrorMessage("El correo ya está registrado");
      return;
    }

    const newUser = { username, email, password };
    registeredUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(registeredUsers));

    alert("Registro exitoso");
    window.location.href = '/login'; 
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">Registrarse</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </div>
  );
}

export default Register;
