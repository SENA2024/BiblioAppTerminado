const formularioUsuario = document.getElementById('registar-usuario');

formularioUsuario.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('contrasena').value;
    const password2 = document.getElementById('confirmar-contrasena').value;

    if (nombre === '' || apellido === '' || email === '' || password === '' || password2 === '') {
        alert('Todos los campos son obligatorios');
        return;
    }
    if (password !== password2) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const usuario = new FormData(formularioUsuario);

    fetch('../php/create-usuario.php', {
        method: 'POST',
        body: usuario,
    })
    .then(response => response.text())
    .then(data => {
        if(data == "Usuario ya registrado"){
            alert('Usuario ya registrado');
        }else if(data == "Usuario creado exitosamente"){
            alert('Usuario creado exitosamente');
            window.location.href = 'inicio-sesion.html';
        }else{
            alert('Error al registrar usuario');
        }
    })

}); 