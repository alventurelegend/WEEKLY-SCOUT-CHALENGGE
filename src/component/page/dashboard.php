<?php 
    include '../../../api/connect.php';
    $nameli = $_GET['username'];

    $syntaks = "SELECT poin FROM user WHERE username = '$nameli'";
    $getpoin = mysqli_query($koneksi, $syntaks);
    $nilai = mysqli_fetch_array($getpoin);

    if($nilai) {
      echo 'Berhasil mengambil Poin dari' . $nameli . 'dan poin nya adalah' . $nilai;
    } else {
      echo 'error';
    }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard Menu</title>

    <!-- MY STYLE -->
    <link rel="stylesheet" href="../../public/css/dashboard.css" />

    <!-- FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />

    <!-- FONT AWESOME -->
    <script
      src="https://kit.fontawesome.com/e732216f12.js"
      crossorigin="anonymous"
    ></script>

    <!-- LOGO TITLE -->
    <link rel="icon" href="../../public/asset/WcsLogo.png" />
  </head>
  <body>
    <my-header></my-header>

    <div class="account">
      <h3>Informasi Akun</h3>
      <div class="account-info">
        <div class="info">
          <div id="name">
            <form action="dashboard.php" method="post">
            <input
              type="text"
              placeholder="username"
              value="nama"
              name="username"
            />
            </form>
          </div>
          <div id="poin">
            <h3>Poin</h3>
            <h1><?php $nilai ?></h1>
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
      src="https://docs.google.com/forms/d/e/1FAIpQLScwuyQlrnk1XuUtGoxQdl7vMyE7mJpyy32za73iyX-X2RR-GQ/viewform?embedded=true"
      width="1920"
      height="953"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Memuat…</iframe
    >

    <footer>
      <p>
        &copy; 2025 Weekly Scout Challenge by DKR Sidoharjo. Hak Cipta
        Dilindungi. <a href="../page/privacy.html">Privacy Policy</a>
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
