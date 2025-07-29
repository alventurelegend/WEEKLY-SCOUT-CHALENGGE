<?php
header("Content-Type: application/json");

include 'connect.php';

//VARIABEL
$eventname = trim($_POST['nama']);
$eventpoin = trim($_POST['poin']);
$eventinfo = trim($_POST['deskripsi']);
$eventdate = trim($_POST['date']);

//VALIDASI INPUT SEMUA TERISI
if(empty($eventname) || empty($eventpoin) || empty($eventinfo) || empty($eventdate)){
    echo json_encode([
        "status" => "undeffined",
        "message" => "isi semua form"
    ]);
    exit;
};

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