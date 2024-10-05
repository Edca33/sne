import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../navbar.css';
import { GiRunningShoe } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function Navbar({ cartItemCount, setSelectedBrand, user }) {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>DualMode Shoes</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li className="dropdown">
          <button className="dropbtn" style={{}} onClick={toggleDropdown}>
            Categorías
          </button>
          <div className={`dropdown-content ${dropdownOpen ? 'open' : ''}`}>
            <Link onClick={() => setSelectedBrand('Nike')}>Nike</Link>
            <Link onClick={() => setSelectedBrand('Converse')}>Converse</Link>
            <Link onClick={() => setSelectedBrand('Adidas')}>Adidas</Link>
            <Link onClick={() => setSelectedBrand('Vans')}>Vans</Link>
            <Link onClick={() => setSelectedBrand('Puma')}>Puma</Link>
          </div>
        </li>
        {!user ? (
          <>
            <center><li><Link to="/register">Registrarse</Link></li></center>
          </>
        ) : (
          <>
            <Link to={"/perfil"} style={{ color: "white" }}>Bienvenido, {user.username} <FaUser /></Link>

          </>
        )}
        <div className="user-settings">
          <div className="config-item">
            <label style={{ color: 'white' }}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              {darkMode ? "Desactivar Modo Oscuro" : "Activar Modo Oscuro"}
            </label>
          </div>
        </div>
        <li><Link to="/cart"><GiRunningShoe className='zapato' />{cartItemCount > 0 && <span>({cartItemCount})</span>}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
