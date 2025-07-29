<?php
header("Content-Type: application/json");
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); 
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$id = $_POST['id'] ?? null;

if (!$id) {
    echo json_encode(['status' => 'error', 'message' => 'ID tidak ditemukan']);
    exit;
}

// Coba hapus dari dua tabel
$hapusUser = mysqli_query($koneksi, "DELETE FROM user WHERE id_user = '$id'");
$hapusEvent = mysqli_query($koneksi, "DELETE FROM challenge WHERE id = '$id'");

if ($hapusUser || $hapusEvent) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Query gagal atau data tidak ditemukan']);
}
?>
