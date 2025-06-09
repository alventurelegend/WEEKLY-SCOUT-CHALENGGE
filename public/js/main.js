const header = document.querySelector("header");

function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
}

window.addEventListener("scroll", handleScroll);

handleScroll();


const login = document.getElementById("btnlogin");
const regis = document.getElementById("btnregis");

login.addEventListener("click", function () {
    window.location.href = '../../component/page/login.html';
});

regis.addEventListener("click", function() {
  window.location.href = '../../component/page/registrasi.html';
})
