const Back = document.getElementsByClassName("back-button");
this.nama = localStorage.getItem("namauser");

if (Back) {
  addEventListener("click", () => {
    window.location.href =
      "../../../api/dashboard.php?username=" + encodeURIComponent(nama);
  });
}
