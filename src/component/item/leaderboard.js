// leaderboard.js

class LeaderboardDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                /* CSS untuk Leaderboard Component */
                :host {
                    display: flex; /* Menggunakan flexbox untuk memusatkan komponen */
                    justify-content: center;
                    align-items: center;
                    padding: 20px; /* Padding di sekitar komponen */
                    box-sizing: border-box;
                    width: 100%; /* Agar bisa mengambil lebar penuh dari parent */
                    font-family: 'roboto', sans serif;
                }

                .leaderboard-container {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    width: 100%;
                    max-width: 600px; /* Lebar maksimum seperti di gambar */
                    box-sizing: border-box;
                    overflow: hidden; /* Pastikan konten tidak meluber */
                }

                .leaderboard-title {
                    background-color: #1a425f; /* Warna biru gelap */
                    color: white;
                    padding: 15px 20px;
                    margin: -20px -20px 20px -20px; /* Menutupi padding container di atas */
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    text-align: center;
                    font-size: 1.5em;
                    font-weight: bold;
                }

                .leaderboard-list {
                    list-style: none; /* Hapus bullet point default */
                    padding: 0;
                    margin: 0;
                }

                .leaderboard-item {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    margin-bottom: 10px;
                    background-color: #f8f8f8; /* Latar belakang item */
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .leaderboard-item:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .leaderboard-rank {
                    font-size: 1.2em;
                    font-weight: bold;
                    color: #007bff; /* Warna biru untuk peringkat */
                    width: 30px; /* Lebar tetap untuk nomor peringkat */
                    text-align: center;
                    margin-right: 15px;
                }

                .leaderboard-details {
                    flex-grow: 1; /* Mengambil sisa ruang */
                }

                .leaderboard-username {
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 3px;
                }

                .leaderboard-gudep {
                    font-size: 0.9em;
                    color: #666;
                }

                .leaderboard-score {
                    font-size: 1.3em;
                    font-weight: bold;
                    color: #007bff; /* Warna biru untuk poin */
                    background-color: #e0f2f7; /* Latar belakang poin */
                    padding: 8px 15px;
                    border-radius: 20px; /* Bentuk oval */
                    min-width: 70px; /* Lebar minimum untuk poin */
                    text-align: center;
                }
                }
            </style>

            <div class="leaderboard-container">
                <div class="leaderboard-title">Leaderboard Weekly Scout Chalengge</div>
                <ul class="leaderboard-list">
                    <p class="loading-message">Memuat data leaderboard...</p>
                </ul>
            </div>
        `;
    }

    // Dipanggil ketika elemen ditambahkan ke DOM
    connectedCallback() {
        this._fetchLeaderboardData();
    }

    async _fetchLeaderboardData() {
        const leaderboardList = this.shadowRoot.querySelector('.leaderboard-list');
        const loadingMessage = this.shadowRoot.querySelector('.loading-message');

        // Sembunyikan pesan loading
        if (loadingMessage) {
            loadingMessage.style.display = 'block';
            leaderboardList.innerHTML = ''; // Kosongkan list sebelumnya
        }

        try {
            // Data Dummy (ganti ini dengan data dari API Anda di masa depan)
            const dummyData = [
                { username: "Aradhea Ichwan Hanif Widodo", gudep: "SMKN 2 Sragen", poin: 2500 },
                { username: "Faisal Huda", gudep: "SMKN 1 Plupuh", poin: 2430 },
                { username: "Fairuz Ahamad Husain", gudep: "SMAN 3 Sragen", poin: 2400 },
                { username: "Alviansyah Renonda Putra U", gudep: "SMA Kalijaga 2", poin: 1920 },
                { username: "Revaldo Andri Putra Utami", gudep: "SMKN 2 Kedung...", poin: 1850 },
                { username: "Budi Santoso", gudep: "SMPN 1 Jakarta", poin: 1500 },
                { username: "Citra Dewi", gudep: "SMA 1 Bandung", poin: 1450 },
                { username: "Doni Pratama", gudep: "SDN 5 Surabaya", poin: 1300 },
                { username: "Eka Sari", gudep: "Pramuka Mandiri", poin: 1200 },
                { username: "Fitriani", gudep: "Gudep Ceria", poin: 1100 },
            ];

            // Urutkan data berdasarkan poin dari tertinggi ke terendah (penting untuk leaderboard)
            dummyData.sort((a, b) => b.poin - a.poin);

            this._renderLeaderboard(dummyData);

        } catch (error) {
            console.error('Error fetching leaderboard data:', error);
            leaderboardList.innerHTML = '<p style="color: red; text-align: center;">Gagal memuat leaderboard. Silakan coba lagi nanti.</p>';
        } finally {
            if (loadingMessage) {
                loadingMessage.style.display = 'none'; // Selalu sembunyikan pesan loading
            }
        }
    }

    _renderLeaderboard(data) {
        const leaderboardList = this.shadowRoot.querySelector('.leaderboard-list');
        leaderboardList.innerHTML = ''; // Kosongkan list sebelum diisi

        if (data.length === 0) {
            leaderboardList.innerHTML = '<p style="text-align: center; color: #666;">Belum ada data leaderboard.</p>';
            return;
        }

        data.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('leaderboard-item');
            listItem.innerHTML = `
                <div class="leaderboard-rank">${index + 1}.</div>
                <div class="leaderboard-details">
                    <div class="leaderboard-username">${item.username}</div>
                    <div class="leaderboard-gudep">${item.gudep}</div>
                </div>
                <div class="leaderboard-score">${item.poin}</div>
            `;
            leaderboardList.appendChild(listItem);
        });
    }
}

// Daftarkan Web Component
customElements.define('leaderboard-display', LeaderboardDisplay);