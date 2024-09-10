<?php
    include 'db.php';

    $queryUsuarios = "SELECT * FROM usuario";
    $queryLibros = "SELECT * FROM libro WHERE cantidad > 0";
    $queryPrestamos = "SELECT prestamo.id_libro, 
                            libro.titulo AS nombre_libro, 
                            prestamo.id_usuario, 
                            usuario.nombre AS nombre_usuario, 
                            prestamo.fecha_prestamo, prestamo.fecha_devolucion, prestamo.cantidad
                        FROM prestamo
                        JOIN libro ON prestamo.id_libro = libro.id
                        JOIN usuario ON prestamo.id_usuario = usuario.id";

    $resultUsuarios = mysqli_query($conn, $queryUsuarios);
    $resultLibros = mysqli_query($conn, $queryLibros);
    $resultPrestamos = mysqli_query($conn, $queryPrestamos);

    $usuarios = [];
    while($row = mysqli_fetch_assoc($resultUsuarios)){
        $usuarios[] = $row;
    }

    $libros = [];
    while($row = mysqli_fetch_assoc($resultLibros)){
        $libros[] = $row;
    }

    $prestamos = [];
    while($row = mysqli_fetch_assoc($resultPrestamos)){
        $prestamos[] = $row;
    }

    echo json_encode([
        'usuarios' => $usuarios,
        'libros' => $libros,
        'prestamos' => $prestamos
    ]);
?>