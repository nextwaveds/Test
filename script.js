document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    if (email === "admin@jumex.com" && password === "123456") {
        alert("Inicio de sesión exitoso");
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Correo o contraseña incorrectos";
    }
});
