<?php
header("Content-Type: application/json");
include 'connect.php';
$today = date('Y-m-d');


$query = "SELECT * FROM challenge WHERE date >= '$today' ORDER BY date ASC"; 
$result = mysqli_query($koneksi, $query);

$events = [];

while ($row = mysqli_fetch_assoc($result)) {
    $events[] = [
        "id" => $row["id"],
        "title" => $row["nama"],
        "poin" => (int)$row["poin"],
        "deskripsi" => $row["deskripsi"],
        "date" => $row["date"],
    ];
}

echo json_encode($events);
?>
