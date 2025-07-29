<?php  

//INCLUDE KONEKSI DATABASE
include '../../../api/connect.php'; 

//VARIABEL
$poin_pengguna = "Loading..."; 
$nama_tampilan = isset($_GET['username']) ? $_GET['username'] : null;

//PROSES GET POIN
if ($nama_tampilan) {
    $statment = "SELECT poin FROM user WHERE username = '$nama_tampilan'";
    $getpoin = mysqli_query($koneksi, $statment);

    if ($getpoin && mysqli_num_rows($getpoin) > 0) {
        $finalpoin = mysqli_fetch_array($getpoin);
        $poin_pengguna = $finalpoin['poin']; // ambil nilai poin
    } else {
        echo 'Username tidak ditemukan di database.' . $nama_tampilan;
    }
} else {
    echo 'Gagal mendapatkan poin: username tidak dikirim.';
}

//MENUTUP KONEKSI
mysqli_close($koneksi);
?>
