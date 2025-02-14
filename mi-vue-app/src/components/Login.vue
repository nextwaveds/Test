<template>
    <div class="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div class="card shadow-lg p-4 rounded-4 w-100" style="max-width: 380px;">
        <div class="text-center">
          <img src="/logo.svg" alt="Jumex Logo" class="img-fluid mb-3" style="max-width: 100px;" />
        </div>
        <h2 class="text-center mb-3 fw-bold">Iniciar Sesión</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <input
              type="email"
              class="form-control form-control-lg border-0 shadow-sm"
              placeholder="Correo electrónico"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control form-control-lg border-0 shadow-sm"
              placeholder="Contraseña"
              v-model="password"
              required
            />
          </div>
          <p v-if="error" class="text-danger text-center fw-bold">{{ error }}</p>
          <button class="btn btn-warning btn-lg w-100 fw-bold shadow-sm" type="submit">
            Ingresar
          </button>
        </form>
        <div class="text-center mt-3">
          <a href="#" class="text-decoration-none text-muted">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
    <p class="footer">Desarrollado por Nextwave Digital Solution</p>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: "",
      };
    },
    methods: {
    async handleLogin() {
      try {
        const response = await axios.post(
          "https://mibackendazure.azurewebsites.net/api/Login",
          {
            Correo: this.email,
            Contrasena: this.password,
          }
        );

        console.log("Inicio de sesión exitoso", response.data);
        alert("✅ Login exitoso: " + response.data.message);
      } catch (error) {
        console.error("Error en el login:", error.response?.data || error);
        this.error = "❌ Credenciales incorrectas";
      }
    },
  },
};
  </script>
  
  <style>
  .bg-primary {
    background-color: #002F6C !important; /* Color azul oscuro */
  }
  .card {
    background-color: white;
    border-radius: 12px;
  }
  .form-control {
    border-radius: 10px;
  }
  .btn-warning {
    background-color: #FFC72C;
    border: none;
    border-radius: 10px;
  }
  .btn-warning:hover {
    background-color: #E0A800;
  }
  </style>