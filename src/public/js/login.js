const form = document.querySelector(".login-form");
const usernameInput = document.getElementById("loguser");
const nama = document.getElementById("username");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form disubmit");

  const formData = new FormData(this);
  fetch("../../../api/login.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Server error");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Respon dari PHP:", data);
      if (data.status === "success") {
        localStorage.setItem("namauser", nama.value);
        console.log("Menampilkan", localStorage);
        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          text: "Kamu akan segera berpindah halaman...",
          confirmButtonText: "OK",
          timer: 2000,
        }).then(() => {
          window.location.href = "../../component/page/dashboard.php";
        });

        this.reset();
      } else if (data.status === "passerror") {
        Swal.fire({
          icon: "error",
          title: "Password Salah",
          text: "Silakan gunakan password yang valid",
          confirmButtonText: "OK",
        });
      } else if (data.status === "EmailError") {
        Swal.fire({
          icon: "error",
          title: "Email Not Found",
          text: "Silakan gunakan Email yang valid",
          confirmButtonText: "OK",
        });
      }
    })
    .catch((err) => {
      console.error("Gagal kirim:", err);
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan!",
        text: "Coba lagi nanti.",
        confirmButtonText: "Tutup",
      });
    });
});
