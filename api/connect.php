<?php
$host = "sql100.infinityfree.com";
$user = "if0_39611070";
$pass = "wsc111403"; // ← password baru kamu
$dbname = "if0_39611070_wscsidoharjo";

$koneksi = mysqli_connect($host, $user, $pass, $dbname);

if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
} else {
    echo "Koneksi berhasil!";
}
?>
