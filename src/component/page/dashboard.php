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

<!-- HTML PROJECT -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard Menu</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
    <link rel="stylesheet" href="../../public/css/dashboard.css" />
    <link rel="icon" href="../../../public/asset/WcsLogo.png" />
</head>


<body>
    <my-header></my-header>

    <div class="account">
        <h3>Informasi Akun</h3>
        <div class="account-info">
            <div class="info">
                <div id="name">
                    <input type="text" placeholder="username" value="<?php echo htmlspecialchars($nama_tampilan); ?>" id="username" readonly />
                </div>
                <div id="poin">
                    <h3>Poin</h3>
                    <h1><?php echo htmlspecialchars($poin_pengguna); ?></h1>
                </div>
                <div class="history-poin">
                    <h3>Riwayat Poin</h3>
                    <div id="pointHistoryList" class="history-list"></div>
                    <a href="../page/leaderboard.html">Cek Leadeboard..</a>
                </div>
            </div>
        </div>
    </div>
    <h2 id="batas">Chalengge</h2>
    <div id="event" class="week-event"></div>
    <h2 id="batas">Submit Your Chalengge</h2>
    <iframe
        src="https:
        width="1920"
        height="953"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Memuat…
    </iframe>

    <footer>
        <p>
            &copy; 2025 Weekly Scout Challenge by DKR Sidoharjo. Hak Cipta Dilindungi. <a href="../page/privacy.html">Privacy Policy</a>
        </p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.1/dist/sweetalert2.all.min.js"></script>
    <script src="../item/header2.js"></script>
    <script src="../../public/js/dashboard.js"></script>
    <script src="../item/point.js"></script>
    <script src="../item/event.js"></script>
    <script src="../item/submit.js"></script>
</body>
</html>