const pointHistoryData = [
  {
    description: "Content creator",
    points: 250,
  },
  {
    description: "Pengabdian masyarakat",
    points: 1500,
  },
  {
    description: "Edukasi pramuka",
    points: 100,
  },
  {
    description: "Daily Checkin",
    points: 150,
  },
  {
    description: "Mengikuti lomba kebersihan",
    points: 500,
  },
];

const pointHistoryList = document.getElementById("pointHistoryList");

function displayPointHistory(data) {
  pointHistoryList.innerHTML = "";

  if (data.length === 0) {
    pointHistoryList.innerHTML =
      '<div class="no-data-message">Tidak ada riwayat poin yang tersedia.</div>';
    return;
  }

  data.forEach((item) => {
    const historyItemDiv = document.createElement("div");
    historyItemDiv.classList.add("history-item");

    historyItemDiv.innerHTML = `
                    <span>${item.description}</span>
                    <span class="points">+${item.points}</span>
                `;

    pointHistoryList.appendChild(historyItemDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayPointHistory(pointHistoryData);
});

const name = localStorage.getItem("loggedInUsername");
const gudep = localStorage.getItem("GudepUser");

username.value = `Nama User : ${name}`;
gugusdepan.value = `Gudep : ${gudep}`;
