import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Importar Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Importar JS de Bootstrap
import "./assets/styles.css";

createApp(App).mount('#app')
