<?php
$host = "localhost";
$user = "root"; // sesuaikan
$password = ""; // sesuaikan
$database = "wekly_scout_chalengge";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
