<?php
include 'connect.php';
header('Content-Type: application/json');

// Query ambil event dari hari ini ke depan
$query = "SELECT * FROM user WHERE level ='user'";
$result = mysqli_query($koneksi, $query);

$userget = [];

while ($row = mysqli_fetch_assoc($result)) {
    $userget[] = $row;
}

echo json_encode($userget);
?>
