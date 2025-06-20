<?php 
    $username = $_POST['user'];
    $password = $_POST['password'];
    $gudep = $_POST['gudep'];
    $level = 'user';
    $encrypt = md5($password);

    include 'connect.php';

    //VALIDASI JIKA ADA USERNAME YANG SAMA MAKA OPERASI INSERT DIGAGALKAN
    $validate = "SELECT username FROM user WHERE username = '$username'";
    $sqlchecking = mysqli_query($koneksi, $validate);
    //SINTAKS QUERY INSERT KE DALAM DATABASE
    $query = "INSERT INTO user (username, password, level, gudep) VALUES ('$username', '$encrypt', '$level', '$gudep')";

    //JIKA USERNAME SUDAH DIDAFTARKAN MAKA HASILNYA PASTI >0 NAH KALAU MASIH 0 ALIAS BELUM DIPAKAI MAKA BERHASIL REGISTRASI
    if($sqlchecking->num_rows > 0) {
        echo "Username sudah dipakai";
    } else {
         $sqlinsert = mysqli_query($koneksi, $query);
         echo "Berhasil Registrasi";
    }
?>