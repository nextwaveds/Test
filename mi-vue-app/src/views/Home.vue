<template>
    <div class="home-container">
      <Navbar />
      <div class="content">
        <Sidebar />
        <main class="main-content">
          <div class="welcome-box">
            <h1 class="welcome-title">Bienvenido, {{ user?.nombre }}</h1>
            <p class="info"><strong>Correo:</strong> {{ user?.correo }}</p>
            <p class="info"><strong>Teléfono:</strong> {{ user?.telefono }}</p>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Sidebar from "../components/Sidebar.vue";
  
  export default {
    components: {
      Navbar,
      Sidebar
    },
    data() {
      return {
        user: JSON.parse(localStorage.getItem("user") || "{}"),
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estructura General */
  .home-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff; /* ✅ Fondo blanco */
  }
  
  /* Contenido Principal */
  .content {
    display: flex;
    flex-grow: 1;
    margin-top: 60px; /* ✅ Espaciado para que el Navbar no lo cubra */
    width: 100vw; /* ✅ Ocupa el 100% del ancho de la pantalla */
  }
  
  /* Ajuste del Main */
  .main-content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: #ffffff; /* ✅ Fondo blanco cubriendo todo */
    width: 100vw; /* ✅ Se asegura que cubra todo el ancho */
    min-height: 100vh; /* ✅ Se asegura que cubra toda la altura */
  }
  
  /* Tarjeta de Bienvenida */
  .welcome-box {
    background: #ffffff;
    padding: 30px 40px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    text-align: center;
    border-left: 5px solid #FFC72C; /* ✅ Línea amarilla Jumex */
  }
  
  /* Título con mejor estilo */
  .welcome-title {
    font-size: 24px;
    color: #002F6C;
    font-weight: bold;
  }
  
  /* Estilos de Información */
  .info {
    font-size: 16px;
    color: #333;
    margin-top: 10px;
  }
  
  /* Responsivo */
  @media (max-width: 768px) {
    .main-content {
      margin-left: 0;
    }
    .welcome-box {
      width: 90%;
      padding: 20px;
    }
  }
  </style>