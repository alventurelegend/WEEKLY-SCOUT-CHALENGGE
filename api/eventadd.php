<?php
header("Content-Type: application/json");

include 'connect.php';

//VARIABEL
$eventname = $_POST['nama'];
$eventpoin = $_POST['poin'];
$eventinfo = $_POST['deskripsi'];
$eventdate = $_POST['date'];

$syntaks = "INSERT INTO challenge (nama, poin, deskripsi, date) VALUES ('$eventname', '$eventpoin', '$eventinfo', '$eventdate')";
$proces = mysqli_query($koneksi, $syntaks);

if($proces) {
    echo json_encode([
        "status" => "success",
        "message" => "SUKSES MENAMBAHKAN EVENT"
    ]);
} else {
    echo json_encode([
        "status" => "gagal",
        "message" => "GAGAL MENAMBAHKAN" . mysqli_error($koneksi)
    ]);
}


?>