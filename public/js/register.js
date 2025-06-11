const loginButton = document.querySelector('.regist-button');

if (loginButton) {
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const gudep = document.getElementById("gudep");
    const username = usernameInput.value;
    const gudepku = gudep.value;

    if (username) {
      Swal.fire({
        title: "Registrasi Sukses",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        localStorage.setItem("loggedInUsername", username);
        localStorage.setItem("GudepUser", gudepku);
        window.location.href = "../../component/page/login.html";
      });
    } else {
      Swal.fire({
        title: "Silakan masukkan email, Password & Gudep",
        icon: "error",
        timer: 2000,
      });
      return;
    }
  });
} else {
  console.warn(
    "Elemen dengan class 'login-button' tidak ditemukan di halaman."
  );
}
