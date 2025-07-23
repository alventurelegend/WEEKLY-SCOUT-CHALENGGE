const nameuser = localStorage.getItem("namauser");
const usernameElement = document.getElementById("username");

if (nameuser) {
  //CEK APAKAH LocalStorage ada
  console.log("Selamat datang", nameuser); //JIKA ADA TAMPILKAN PESAN
  if (usernameElement) {
    //CEK LAGI APAKAH DI USERNAME ADA ISINYA
    usernameElement.value = `${nameuser}`; //JIKA ADA TAMPILKAN
  }
} else {
  //JIKA TIDAK ADA KEMBALIKAN KE HALAMAN LOGIN
  window.location.href = "../../component/page/login.html";
}
