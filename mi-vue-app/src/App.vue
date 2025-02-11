<script>
import Login from "./components/Login.vue"; 

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<template>
  <div id="app">
    <Login />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
body {
  font-family: Arial, sans-serif;
  background-color: #002F6C;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
</style>
