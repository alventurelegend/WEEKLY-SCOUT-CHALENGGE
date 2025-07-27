//====================BUTTON CONTROLER=====================//

function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if (window.innerWidth < 768) {
    closeMenu();
  }
}

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuToggle?.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
});

function closeMenu() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
}

// ==================== USER CONTROL ==================== //

let allUsers = [];
let currentIndex = 0;
const LIMIT = 5;

function loadUser() {
  fetch("../../../api/getuser.php")
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA DARI FETCH:", data);
      allUsers = data;
      currentIndex = 0;
      renderUserBatch(); // tampilkan batch pertama
    })
    .catch((error) => {
      console.error("Gagal memuat user:", error);
    });
}

function renderUserBatch() {
  console.log("Memanggil renderUserBatch, index:", currentIndex);
  const tbody = document.getElementById("user-table-body");

  // jika awal (index 0), bersihkan dulu
  if (currentIndex === 0) {
    tbody.innerHTML = "";
  }

  const slice = allUsers.slice(currentIndex, currentIndex + LIMIT);
  slice.forEach((userget) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-id", userget.id_user);
    tr.innerHTML = `
      <td class="p-2">${userget.id_user}</td>
      <td class="p-2">${userget.username}</td>
      <td class="p-2">${userget.gudep}</td>
      <td class="p-2">
        <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="hapusEvent(${userget.id_user}, this)">Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  currentIndex += LIMIT;

  const showMoreBtn = document.getElementById("show-more-btn");
  if (currentIndex >= allUsers.length) {
    showMoreBtn.classList.add("hidden");
  } else {
    showMoreBtn.classList.remove("hidden");
  }
}

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  loadUser();
  document
    .getElementById("show-more-btn")
    .addEventListener("click", renderUserBatch);
});



//====================EVENT CONTROLER==================//
const form = document.querySelector(".addevent");

form?.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form disubmit");

  const formData = new FormData(this);

  fetch("../../../api/eventadd.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (!res.ok) throw new Error("Server error");
      return res.json();
    })
    .then((data) => {
      console.log("Respon dari PHP:", data);
      if (data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Event Baru",
          text: "Event berhasil ditambahkan",
          confirmButtonText: "OK",
          timer: 2000,
        });

        this.reset();
        loadEvents(); // ✅ panggil ulang load setelah tambah
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Gagal menambahkan event. Coba lagi.",
        });
      }
    })
    .catch((err) => {
      console.error("Gagal kirim:", err);
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: "Coba lagi nanti.",
      });
    });
});

// ✅ FUNGSI AMBIL DAN TAMPILKAN EVENT
function loadEvents() {
  fetch("../../../api/geteventadmin.php")
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.getElementById("event-table-body");
      tbody.innerHTML = "";

      if (data.length === 0) {
        tbody.innerHTML = `
          <tr class="text-center">
            <td class="p-2" colspan="3">Tidak ada event yang sedang berlangsung.</td>
          </tr>`;
        return;
      }

      data.forEach((event) => {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", event.id_challenge); // buat baris bisa dikenali
        tr.innerHTML = `
          <td class="p-2">${event.nama}</td>
          <td class="p-2">${event.date}</td>
          <td class="p-2">
            <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="hapusEvent(${event.id_challenge}, this)">Hapus</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Gagal memuat event:", error);
    });
}

document.addEventListener("DOMContentLoaded", loadEvents);
