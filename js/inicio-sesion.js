const formularioLogin = document.getElementById('inicio');

formularioLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('correo').value;
    const password = document.getElementById('contrasena').value;

    if (email === '' || password === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    const usuario = new FormData(formularioLogin);

    fetch('../php/login-usuario.php', {
        method: 'POST',
        body: usuario,
    })
    .then(response => response.text())
    .then(data => {
        if (data == "Usuario logueado exitosamente") {
            alert('Usuario logueado correctamente');
            window.location.href = 'dashboard.html';
        } else if(data == "Contraseña incorrecta") {
            alert('Contraseña incorrecta');
        } else if(data == "Usuario no registrado") {
            alert('Usuario no registrado');
        } else {
            alert('Error al iniciar sesión');
        }
    })
});

