import React, { useState, useEffect } from 'react';

function Perfil({ user, setUser, notificationsEnabled, setNotificationsEnabled }) {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    username: user ? user.username : '',
    email: user ? user.email : '',
    password: ''
  });
  const [darkMode, setDarkMode] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
      document.body.classList.toggle('dark-mode', savedDarkMode);
    }
    const savedNotifications = JSON.parse(localStorage.getItem('notificationsEnabled'));
    if (savedNotifications !== null) {
      setNotificationsEnabled(savedNotifications);
    }
  }, [setNotificationsEnabled]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    setUser(userData);
    setEditMode(false);
    alert("Información actualizada");
  };

  const handlePasswordChange = () => {
    alert("Contraseña cambiada exitosamente");
    setShowPasswordChange(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    window.location.href = "/";
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const toggleNotifications = () => {
    const newNotificationsEnabled = !notificationsEnabled;
    setNotificationsEnabled(newNotificationsEnabled);
    localStorage.setItem('notificationsEnabled', JSON.stringify(newNotificationsEnabled));
  };

  return (
    <div className="perfil-container">
      <h2>Perfil de Usuario</h2>

      <div className="user-info">
        {editMode ? (
          <>
            <label>Nombre de usuario:</label>
            <input 
              type="text" 
              name="username" 
              value={userData.username} 
              onChange={handleInputChange} 
            />
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={userData.email} 
              onChange={handleInputChange} 
            />
          </>
        ) : (
          <>
            <p><strong>Usuario:</strong> {userData.username}</p>
            <p><strong>Email:</strong> {userData.email}</p>
          </>
        )}
        
        {editMode ? (
          <button onClick={handleSave}>Guardar Cambios</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Editar Información</button>
        )}
      </div>

      <div className="user-settings">
        <h3>Configuraciones</h3>
        <div className="config-item">
          <label>
            <input 
              type="button" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
            />
             {darkMode ? "Desactivar Modo Oscuro" : "Activar Modo Oscuro"}
          </label>
        </div>

        <div className="config-item">
          <label>
            <input 
              type="checkbox" 
              checked={notificationsEnabled} 
              onChange={toggleNotifications} 
            />
              {notificationsEnabled ? "Deshabilitar Notificaciones" : "Habilitar Notificaciones"}
          </label>
        </div>

        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>

      {showPasswordChange && (
        <div className="change-password">
          <label>Nueva contraseña:</label>
          <input 
            type="password" 
            name="password" 
            value={userData.password} 
            onChange={handleInputChange} 
          />
          <button onClick={handlePasswordChange}>Guardar Contraseña</button>
        </div>
      )}
    </div>
  );
}

export default Perfil;
