const loginButton = document.querySelector(".login-button");

if (loginButton) {
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;

    if (username) {
      localStorage.setItem("loggedInUsername", username);
    } else {
      alert("Username tidak boleh kosong!");
      return;
    }

    window.location.href = "../../component/page/dashboard.html";
  });
} else {
  console.warn(
    "Elemen dengan class 'login-button' tidak ditemukan di halaman."
  );
}
