    <?php 
        header("Content-Type: application/json");

        $nama = $_POST['user'];
        $pwd = $_POST['password'];
        $encrypt = md5($pwd);
        $gudep = $_POST['gudep'];
        $poin = 0;
        include 'connect.php';


        $cek = "SELECT * FROM user WHERE username = '$nama'";
        $run = mysqli_query($koneksi, $cek);
        $hasil = mysqli_fetch_array($run);

        if($hasil) {
            echo json_encode([
            "status" => "error",
            "message" => "Username sudah digunakan!"
        ]);
        } else {
            $syntaks = "INSERT INTO user (username, password, level, gudep, poin) VALUES ('$nama', '$encrypt', 'user', '$gudep', $poin)";
            $input = mysqli_query($koneksi, $syntaks);
            if ($input) {
                echo json_encode([
                    "status" => "success",
                    "message" => "Sukses registrasi"
                ]);
            } else {
                echo json_encode([
                    "status" => "error",
                    "message" => "Registrasi gagal insert"
                ]);
            }
        }
    ?>