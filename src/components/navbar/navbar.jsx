import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../navbar.css';
import { GiRunningShoe } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function Navbar({ cartItemCount, setSelectedBrand, user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <button className="dropbtn" onClick={toggleDropdown}>
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
        <li><Link to="/cart"><GiRunningShoe className='zapato'/>{cartItemCount > 0 && <span>({cartItemCount})</span>}</Link></li>
        {!user ? (
          <>
            <center><li><Link to="/register">Registrarse</Link></li></center>
          </>
        ) : (
          <>
            <Link to={"/perfil"} style={{color: "white"}}>Bienvenido, {user.username} <FaUser/></Link> 
            
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
