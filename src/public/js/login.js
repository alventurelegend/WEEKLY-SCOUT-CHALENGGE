const loginButton = document.querySelector(".login-button");

if (loginButton) {
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;

    if (username) {
      Swal.fire({
        title: "Login Sukses",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        localStorage.setItem("loggedInUsername", username);
        window.location.href = "../../component/page/dashboard.html";
      });
    } else {
      Swal.fire({
        title: "Silakan masukkan email & Password",
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
