const formularioLibro = document.getElementById('registrar-libro');

formularioLibro.addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const cantidad = document.getElementById('cantidad').value;

    if (titulo === '' || autor === '' || cantidad === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    const libro = new FormData(formularioLibro);

    fetch('../php/create-libro.php', {
        method: 'POST',
        body: libro,
    })
    .then(response => response.text())
    .then(data => {
        if(data == "Libro creado exitosamente"){
            alert('Libro creado exitosamente');
            window.location.href = 'dashboard.html';
        }else{
            alert('Error al registrar libro');
        }
    })
});