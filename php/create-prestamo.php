<?php
    include 'db.php';

    $id_libro = $_POST['id_libro'];
    $id_usuario = $_POST['id_usuario'];
    $fecha_prestamo = $_POST['fecha_prestamo'];
    $fecha_devolucion = $_POST['fecha_devolucion'];
    $cantidad = $_POST['cantidad'];

    $query = "INSERT INTO prestamo (id_libro, id_usuario, fecha_prestamo, fecha_devolucion, cantidad) VALUES ('$id_libro', '$id_usuario', '$fecha_prestamo', '$fecha_devolucion', '$cantidad')";

    if(mysqli_query($conn, $query)){
        echo 'Prestamo creado correctamente';
    }else{  
        echo 'Error al crear prestamo';
    }
?>