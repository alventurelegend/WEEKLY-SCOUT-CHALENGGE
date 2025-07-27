const nameuser = localStorage.getItem("namauser");
const usernameElement = document.getElementById("username");

if (nameuser) {
  console.log("Selamat datang", nameuser);

  if (nameuser === "admwitamsa") {
    // Jika admin, arahkan ke halaman admin
    window.location.href = "../../component/page/admin.html";
  } else {
    // Kalau bukan admin, tampilkan username
    if (usernameElement) {
      usernameElement.value = nameuser;
    }
  }
} else {
  // Kalau belum login, arahkan ke halaman login
  window.location.href = "../../component/page/login.html";
}
