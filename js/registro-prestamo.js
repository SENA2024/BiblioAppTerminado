document.addEventListener("DOMContentLoaded", function () {
  const libro = document.getElementById("libro");
  const usuario = document.getElementById("usuario");
 

  function cargarDatos() {
    fetch("../php/read-data.php")
      .then((response) => response.json())
      .then((data) => {
        data.libros.forEach((element) => {
          const option = document.createElement("option");
          option.value = element.id;
          option.textContent = element.titulo;
          libro.appendChild(option);
        });
        data.usuarios.forEach((element) => {
          const option = document.createElement("option");
          option.value = element.id;
          option.textContent = element.nombre;
          usuario.appendChild(option);
        });
      })
      .catch((error) => console.log(error));
  }

  cargarDatos();

  const formularioPrestamo = document.getElementById("prestamo");
  
  formularioPrestamo.addEventListener("submit", function (event) {
    event.preventDefault();

    const libroId = libro.value;
    const usuarioId = usuario.value;
    const fechaP = document.getElementById("fecha").value;
    const fechaD = document.getElementById("devolucion").value;
    const cantidad = document.getElementById("cantidad").value;

    const prestamo = new FormData();
    prestamo.append("id_libro", libroId);
    prestamo.append("id_usuario", usuarioId);
    prestamo.append("fecha_prestamo", fechaP);
    prestamo.append("fecha_devolucion", fechaD);
    prestamo.append("cantidad", cantidad);

    fetch("../php/create-prestamo.php", {
      method: "POST",
      body: prestamo,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data == "Prestamo creado correctamente") {
          alert("Prestamo creado correctamente");
          location.reload();
        } else {
          alert('Error al crear prestamo');
        }
      })
      .catch((error) => console.log(error));
  });
});
