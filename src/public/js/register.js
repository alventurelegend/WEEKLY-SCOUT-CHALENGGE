const registerButton = document.querySelector('.regist-button');

if (registerButton) {
  registerButton.addEventListener("click", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const gudep = document.getElementById("gudep").value;

    if (!username || !password || !gudep) {
      Swal.fire({
        title: "Semua field wajib diisi!",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    fetch("../../../api/backend/registrasi.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, gudep }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          Swal.fire({
            title: "Registrasi Berhasil!",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            window.location.href = "../page/login.html";
          });
        } else {
          Swal.fire({
            title: "Gagal!",
            text: data.message,
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error",
          text: "Terjadi kesalahan saat mengirim data",
          icon: "error",
        });
      });
  });
}
