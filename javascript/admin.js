const password = document.getElementById("password");
const checkbox = document.getElementById("visible");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
});

document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        alert("Bienvenido");
        window.location.href = "menuadmin.html";
    }
    else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
})