    <?php 
        header("Content-Type: application/json");

        $logname = $_POST['loguser'];
        $logpass = $_POST['passlog'];
        $logencrypt = md5($logpass);
        include 'connect.php';

        $cek = "SELECT * FROM user WHERE username = '$logname'";
        $run = mysqli_query($koneksi, $cek);
        $hasil = mysqli_fetch_array($run);

        if($hasil) {
            if($logencrypt === $hasil['password']) {
                echo json_encode([
                "status" => "success",
                "message" => "Data ditemukan"
                ]);
            } else {
                echo json_encode([
                "status" => "passerror",
                "message" => "Password salah"
                ]);
                }
        } else {
                echo json_encode([
                "status" => "EmailError",
                "message" => "Email salah"
        ]);
        exit();
        }
        
    ?>