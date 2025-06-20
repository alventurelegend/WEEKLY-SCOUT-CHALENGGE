const dateStart = "August 19, 2025 07:00";
const dateEnd = "August 30, 2025 00:00";

const eventData = [
  {
    id: "WSC0001",
    pts: 130,
    title: "Content Creator",
    description:
      "Buatlah konten pramuka yang mengedukasi tentang bahaya nya narkoba",
    expdate: `${dateStart} - ${dateEnd}`,
  },
  {
    id: "WSC0001",
    pts: 130,
    title: "Content Creator",
    description:
      "Buatlah konten pramuka yang mengedukasi tentang bahaya nya narkoba",
    expdate: `${dateStart} - ${dateEnd}`,
  },
  {
    id: "WSC0001",
    pts: 130,
    title: "Content Creator",
    description:
      "Buatlah konten pramuka yang mengedukasi tentang bahaya nya narkoba",
    expdate: `${dateStart} - ${dateEnd}`,
  },
  {
    id: "WSC0001",
    pts: 130,
    title: "Content Creator",
    description:
      "Buatlah konten pramuka yang mengedukasi tentang bahaya nya narkoba",
    expdate: `${dateStart} - ${dateEnd}`,
  },
  {
    id: "WSC0001",
    pts: 130,
    title: "Content Creator",
    description:
      "Buatlah konten pramuka yang mengedukasi tentang bahaya nya narkoba",
    expdate: `${dateStart} - ${dateEnd}`,
  },
  {
    id: "WSC0001",
    pts: 130,
    title: "Content Creator",
    description:
      "Buatlah konten pramuka yang mengedukasi tentang bahaya nya narkoba",
    expdate: `${dateStart} - ${dateEnd}`,
  },
];

const EventSetCollection = document.getElementsByClassName("week-event");

function displayEvent(data) {
  if (EventSetCollection.length === 0) {
    console.error("Elemen dengan class 'week-event' tidak ditemukan.");
    return;
  }

  const targetElement = EventSetCollection[0];

  targetElement.innerHTML = "";

  if (data.length === 0) {
    targetElement.innerHTML =
      '<div class="no-data-message">Tidak ada riwayat poin yang tersedia.</div>';
    return;
  }

  data.forEach((item) => {
    const eventSetting = document.createElement("div");
    eventSetting.classList.add("event");

    eventSetting.innerHTML = `
            <div class="top-event">
              <p id="idEvent">${item.id}</p>
              <p id="pts">+${item.pts}</p>
            </div>
            <div class="item-event">
              <h2>${item.title}</h2>
              <p>${item.description}</p>
              <span>${item.expdate}</span>
            </div>
        `;

    targetElement.appendChild(eventSetting);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayEvent(eventData);
});
