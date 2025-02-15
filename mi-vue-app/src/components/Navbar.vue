<template>
    <nav class="navbar">
      <div class="navbar-container">
        <img src="../assets/logo.svg" alt="Logo" class="logo" />
        <button class="logout-btn" @click="logout">Cerrar Sesión</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem("user");
        this.$router.push("/login");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del Navbar */
  .navbar {
    width: 100%;
    height: 60px;
    background-color: #002F6C; /* ✅ Azul Jumex */
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Contenedor interno del Navbar */
  .navbar-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  /* Estilos del Logo */
  .logo {
    height: 40px;
  }
  
  /* Botón de Logout alineado a la derecha */
  .logout-btn {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-left: auto; /* ✅ Lo empuja completamente a la derecha */
  }
  
  .logout-btn:hover {
    background-color: white;
    color: #002F6C;
  }
  </style>