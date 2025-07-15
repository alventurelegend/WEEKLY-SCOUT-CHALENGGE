<?php
header("Content-Type: application/json");

$nama = $_POST['nama'];
$poin = $_POST['poin'];
$deks = $_POST['deskripsi'];
$date = $_POST['date'];
include 'connect.php';

$input = "INSERT INTO chalengge (nama_challenge, poin_challenge, deskripsi_challenge, date_challenge) VALUES('$nama', '$poin', '$deks', '$date')";

$proses = mysqli_query($koneksi, $input);

if($proses) {
    echo 'Event berhasil ditambahkan';
} else {
   echo "Event gagal";
}
?>