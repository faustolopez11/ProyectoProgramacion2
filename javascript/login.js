document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.mail === mail && user.password === password);
    if (!user) {
        return alert("Usuario y/o contraseña incorrectos");
    }

    alert("Inicio de sesión exitoso");
    window.location.href = "index.html";
});

const password = document.getElementById("password");
const checkbox = document.getElementById("visible");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
});