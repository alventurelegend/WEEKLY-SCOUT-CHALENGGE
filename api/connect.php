<?php
    $name = "localhost";
    $user = "root";
    $pass = "A12G1070709";
    $database = "wekly_scout_chalengge";

    $koneksi = mysqli_connect($name, $user, $pass, $database);

    if($koneksi->connect_error) {
         http_response_code(500);
         echo json_encode(['error' => 'Database connection failed']);
         exit;
    }   
?> 