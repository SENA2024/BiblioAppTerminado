<?php
    include 'db.php';

    $email = $_POST['correo'];
    $password = $_POST['contrasena'];

    $query = "SELECT * FROM usuario WHERE email = '$email'";

    $result = mysqli_query($conn, $query);

    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        if($row['pass'] === $password){
            echo "Usuario logueado exitosamente";
        }else{
            echo "Contraseña incorrecta";
        }
    }else{
        echo "Usuario no registrado";
    }

?>