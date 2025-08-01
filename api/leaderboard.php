<?php 

header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: https://wsc-sidoharjo-25.vercel.app");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

include 'connect.php';
$acces = 'user';

$query = "SELECT username, gudep, poin FROM user  WHERE level = '$acces' ORDER BY poin DESC LIMIT 10";
$result = $koneksi->query($query);
$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$koneksi->close();
?>