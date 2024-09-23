import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../navbar.css';
import { GiRunningShoe } from "react-icons/gi";

function Navbar({ cartItemCount, setSelectedBrand }) {
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
          </div>
        </li>
        <li><Link to="/cart"><GiRunningShoe className='zapato'/>{cartItemCount > 0 && <span>({cartItemCount})</span>}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
