<template>
    <aside class="sidebar">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">🏠 Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/perfil" class="nav-link">👤 Perfil</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/configuracion" class="nav-link">⚙ Configuración</router-link>
        </li>
      </ul>
    </aside>
  </template>
  
  <style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #000; /* Negro */
    color: white;
    position: fixed;
    top: 60px; /* Debajo del navbar */
    left: 0;
    padding-top: 20px;
  }
  
  .nav-link {
    color: white;
    font-size: 18px;
    padding: 10px;
    display: block;
    text-decoration: none;
  }
  
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
  </style>