<?php
    $name = $_POST['loguser'];
    $pass = $_POST['passlog'];
    $hashing = md5($pass);

    include 'connect.php';

    $selecteduser = "SELECT * FROM user WHERE username = '$name'";
    $result = mysqli_query($koneksi, $selecteduser);
    $data = mysqli_fetch_array($result);

    if($result) {
        if($hashing === $data['password']) {
            if($data['level'] === 'user' ) {
                header('location: ../src/component/page/login.html');
            } else if($data['level'] === 'admin'){
                header('location: ../src/component/page/admin.html');
            }
        }
    }
?>