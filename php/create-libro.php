<?php
    include 'db.php';
    $titulo = $_POST['titulo'];
    $autor = $_POST['autor'];
    $cantidad = $_POST['cantidad'];

    $query = "INSERT INTO libro (titulo, autor, cantidad) VALUES ('$titulo', '$autor', '$cantidad')";
    
    $result = mysqli_query($conn, $query);

    if($result){
        echo "Libro creado exitosamente";
    }else{
        echo "Error al crear el libro";
    }
?>