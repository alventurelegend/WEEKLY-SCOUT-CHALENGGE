<?php
include 'connect.php';
header('Content-Type: application/json');

// Ambil tanggal hari ini
$today = date('Y-m-d');

// Query ambil event dari hari ini ke depan
$query = "SELECT * FROM challenge WHERE date >= '$today' ORDER BY date ASC";
$result = mysqli_query($koneksi, $query);

$events = [];

while ($row = mysqli_fetch_assoc($result)) {
    $events[] = $row;
}

echo json_encode($events);
?>
