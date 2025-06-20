<?php
header("Content-Type: application/json");
require __DIR__ . '/db_config.php';

// Ambil data dari request
$data = json_decode(file_get_contents("php://input"), true);
$username = $data["username"];
$password = password_hash($data["password"], PASSWORD_DEFAULT); // hash untuk keamanan
$gudep = $data["gudep"];

// Cek apakah username sudah terdaftar
$checkStmt = $conn->prepare("SELECT id_user FROM user WHERE username = ?");
$checkStmt->bind_param("s", $username);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();

if ($checkResult->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Username sudah digunakan."]);
    exit;
}

// Simpan ke database
$stmt = $conn->prepare("INSERT INTO user (username, password, gudep, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())");
$stmt->bind_param("sss", $username, $password, $gudep);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Registrasi berhasil."]);
} else {
    echo json_encode(["status" => "error", "message" => "Gagal registrasi: " . $stmt->error]);
}

$conn->close();
?>
