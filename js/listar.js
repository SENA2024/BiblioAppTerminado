const container = document.getElementById("container");
const containerLibros = document.getElementById("container-libros");

function cargarDatos() {
    fetch("../php/read-data.php")
      .then((response) => response.json())
      .then((data) => {
        if(container){
            data.prestamos.forEach((element) => {
              const div = document.createElement("div");
              div.className = 'card';
              div.innerHTML = `
                <p>Libro: ${element.nombre_libro}</p>
                <p>Usuario: ${element.nombre_usuario}</p>
                <p>Fecha de prestamo: ${element.fecha_prestamo}</p>
                <p>Fecha de devolución: ${element.fecha_devolucion}</p>
                <p>Cantidad: ${element.cantidad}</p>
              `;
              container.appendChild(div);
            });
        }else{
            data.libros.forEach((element) => {
                const div = document.createElement("div");
                div.className = 'card';
                div.innerHTML = `
                  <p>Libro: ${element.titulo}</p>
                  <p>Autor: ${element.autor}</p>
                  <p>Cantidad: ${element.cantidad}</p>
                `;
                containerLibros.appendChild(div);
              });
        }
      })
      .catch((error) => console.log(error));
  }

  cargarDatos();