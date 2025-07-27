<?php 
header('Content-Type: application/json');
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