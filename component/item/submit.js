class ChallengeSubmitForm extends HTMLElement {
  constructor() {
    super();
    // Menggunakan Shadow DOM untuk enkapsulasi
    this.attachShadow({ mode: "open" });

    // Definisikan template HTML dan CSS untuk Shadow DOM
    this.shadowRoot.innerHTML = `
            <style>
                /* CSS untuk Web Component ini */
                :host {
                    display: block; /* Agar komponen mengambil ruang yang sesuai */
                    font-family: Arial, sans-serif;
                    box-sizing: border-box;
                }

                .submit-event {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-wrap: wrap; /* Untuk responsif */
                    padding: 30px;
                    gap: 30px; /* Jarak antara form dan preview */
                    box-sizing: border-box; /* Pastikan padding tidak menambah lebar */
                    justify-content: center; /* Pusatkan konten */
                    width: 100%; /* Ambil 100% dari lebar container parent (yaitu challenge-submit-form) */
                }

                .form-container {
                    flex: 1; /* Ambil ruang yang tersedia */
                    min-width: 300px; /* Lebar minimum untuk form */
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .input-group {
                    display: flex;
                    align-items: center;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    overflow: hidden;
                }

                .input-group .icon {
                    background-color: #007bff; /* Warna biru untuk ikon */
                    color: white;
                    padding: 10px 12px;
                    font-size: 1.2em;
                    display: flex; /* Untuk pusatkan ikon */
                    justify-content: center;
                    align-items: center;
                }

                .input-group input {
                    flex-grow: 1;
                    border: none;
                    padding: 10px;
                    font-size: 1em;
                    outline: none;
                }

                .input-group input::placeholder {
                    color: #aaa;
                }

                button#submitButton {
                    background-color: #007bff;
                    color: white;
                    padding: 12px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.1em;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                button#submitButton:hover {
                    background-color: #0056b3;
                }

                .preview-container {
                    flex: 1; /* Ambil ruang yang tersedia */
                    min-width: 300px; /* Lebar minimum untuk preview */
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .video-preview-box {
                    border: 2px dashed #007bff; /* Garis putus-putus biru */
                    border-radius: 8px;
                    min-height: 200px; /* Tinggi minimum untuk kotak pratinjau */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f0f8ff; /* Latar belakang ringan */
                    position: relative; /* Untuk positioning img/iframe */
                    overflow: hidden; /* Pastikan konten tidak meluber */
                }

                .video-preview-box .preview-placeholder {
                    color: #888;
                    text-align: center;
                    padding: 20px;
                    z-index: 1; /* Pastikan placeholder di atas konten lain */
                }

                /* Tambahan untuk pesan fallback */
                .video-preview-box .fallback-message {
                    color: #333;
                    text-align: center;
                    padding: 20px;
                    font-weight: bold;
                    display: none; /* Default tersembunyi */
                    z-index: 2; /* Di atas placeholder */
                }


                .video-preview-box img,
                .video-preview-box iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: contain; /* Agar gambar/video pas di kotak */
                    display: none; /* Default tersembunyi */
                }
                /* Hapus gaya untuk #tiktokEmbedContainer karena tidak lagi digunakan */


                .steps-container {
                    background-color: #e6f7ff; /* Latar belakang untuk langkah-langkah */
                    border-radius: 8px;
                    padding: 20px;
                    border: 1px solid #cceeff;
                }

                .steps-container h3 {
                    color: #007bff;
                    margin-top: 0;
                    margin-bottom: 15px;
                }

                .steps-container ol {
                    padding-left: 20px;
                    margin: 0;
                }

                .steps-container ol li {
                    margin-bottom: 8px;
                    line-height: 1.5;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .submit-event {
                        padding: 20px;
                        flex-direction: column; /* Tumpuk ke bawah */
                    }

                    .form-container,
                    .preview-container {
                        min-width: unset; /* Hapus min-width */
                        width: 100%; /* Ambil lebar penuh */
                    }

                    .video-preview-box {
                        min-height: 180px;
                    }
                }

                @media (max-width: 480px) {
                    .submit-event {
                        padding: 15px;
                    }
                    .input-group input,
                    button#submitButton {
                        font-size: 0.9em;
                    }
                    .video-preview-box {
                        min-height: 150px;
                    }
                    .steps-container h3 {
                        font-size: 1.1em;
                    }
                    .steps-container ol li {
                        font-size: 0.9em;
                    }
                }
            </style>

            <div class="submit-event">
                <div class="form-container">
                    <div class="input-group">
                        <input type="text" id="username" placeholder="Username....">
                    </div>
                    <div class="input-group">
                        <input type="text" id="gudep" placeholder="Gugus Depan..">
                    </div>
                    <div class="input-group">
                        <input type="text" id="challengeName" placeholder="Nama Challengge...">
                    </div>
                    <div class="input-group">
                        <input type="text" id="challengeCode" placeholder="Kode Challengge...">
                    </div>
                    <div class="input-group">
                        <input type="url" id="videoLink" placeholder="Link url challengge...">
                    </div>
                    <button id="submitButton" type="submit">Submit</button>
                </div>

                <div class="preview-container">
                    <div class="video-preview-box">
                        <p class="preview-placeholder">Konten yang kamu upload akan muncul disini!</p>
                        <img id="videoThumbnail" src="" alt="Video Thumbnail">
                        <iframe id="videoFrame" src="" frameborder="0" allowfullscreen></iframe>
                        <p class="fallback-message" style="display: none;">Link sudah diterima, pratinjau hanya tersedia untuk YouTube.</p>
                    </div>
                    <div class="steps-container">
                        <h3>Langkah-langkah:</h3>
                        <ol>
                            <li>Isi semua form yang ada.</li>
                            <li>Pastikan konten yang kalian input muncul Di dalam kotak gambar di samping, dan sudah benar konten yang di input.</li>
                            <li>Klik tombol submit.</li>
                        </ol>
                    </div>
                </div>
            </div>
        `;
  }

  // Dipanggil ketika elemen ditambahkan ke DOM
  connectedCallback() {
    this._setupEventListeners();
  }

  // Fungsi untuk menyembunyikan semua preview dan menampilkan placeholder
  _resetPreviewState() {
    const shadowRoot = this.shadowRoot;
    shadowRoot.getElementById("videoThumbnail").style.display = "none";
    shadowRoot.getElementById("videoThumbnail").src = "";
    shadowRoot.getElementById("videoFrame").style.display = "none";
    shadowRoot.getElementById("videoFrame").src = "";
    shadowRoot.querySelector(".preview-placeholder").style.display = "block";
    shadowRoot.querySelector(".fallback-message").style.display = "none"; // Sembunyikan pesan fallback
  }

  // Fungsi untuk menampilkan pesan fallback
  _showFallbackMessage() {
    this._resetPreviewState(); // Pastikan semua yang lain tersembunyi
    const shadowRoot = this.shadowRoot;
    shadowRoot.querySelector(".preview-placeholder").style.display = "none"; // Sembunyikan placeholder asli
    shadowRoot.querySelector(".fallback-message").style.display = "block"; // Tampilkan pesan fallback
  }

  _setupEventListeners() {
    const shadowRoot = this.shadowRoot;

    // Ambil referensi ke elemen-elemen di dalam Shadow DOM
    const submitButton = shadowRoot.getElementById("submitButton");
    const videoLinkInput = shadowRoot.getElementById("videoLink");
    const videoFrame = shadowRoot.getElementById("videoFrame");

    // Fungsi untuk mengekstrak ID video YouTube
    const getYouTubeVideoId = (url) => {
      // Regex yang lebih robust untuk berbagai format URL YouTube
      const regex =
        /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([a-zA-Z0-9_-]{11})(?:\S+)?/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };

    // Event Listener untuk input link video (untuk preview)
    videoLinkInput.addEventListener("input", () => {
      const link = videoLinkInput.value.trim();

      this._resetPreviewState(); // Reset semua preview sebelum memuat yang baru

      if (link === "") {
        console.log("Link video kosong.");
        return;
      }

      // Cek apakah ini link YouTube
      const youtubeVideoId = getYouTubeVideoId(link);
      if (youtubeVideoId) {
        // URL embed YouTube yang lebih andal
        const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0`;
        videoFrame.src = embedUrl;
        videoFrame.style.display = "block";
        // Jika YouTube, placeholder akan disembunyikan oleh display:block dari iframe
        console.log(`Loading YouTube video: ${embedUrl}`);
      } else {
        // Untuk link selain YouTube, tampilkan pesan fallback
        this._showFallbackMessage();
        console.log("Link bukan dari YouTube. Menampilkan pesan fallback.");
      }
    });

    // Event Listener untuk tombol submit
    submitButton.addEventListener("click", async (event) => {
      event.preventDefault(); // Mencegah form dari reload halaman

      const usernameInput = shadowRoot.getElementById("username");
      const gudepInput = shadowRoot.getElementById("gudep");
      const challengeNameInput = shadowRoot.getElementById("challengeName");
      const challengeCodeInput = shadowRoot.getElementById("challengeCode");

      const formData = {
        username: usernameInput.value.trim(),
        gudep: gudepInput.value.trim(),
        challengeName: challengeNameInput.value.trim(),
        challengeCode: challengeCodeInput.value.trim(),
        videoLink: videoLinkInput.value.trim(), // Ambil dari variabel global
      };

      if (
        !formData.username ||
        !formData.gudep ||
        !formData.challengeName ||
        !formData.challengeCode ||
        !formData.videoLink
      ) {
        Swal.fire({
          title: "Submit Gagal",
          text: "Silakan isi semua data yang ada!",
          timer: 2000,
        });
        return;
      }

      console.log("Data yang akan dikirim:", formData);

      Swal.fire({
        icon: "success",
        title: "Submit Berhasil",
        timer: 2000,
      });

      usernameInput.value = "";
      gudepInput.value = "";
      challengeNameInput.value = "";
      challengeCodeInput.value = "";
      videoLinkInput.value = "";
      this._resetPreviewState(); // Reset preview setelah submit
    });
  }
}

// Daftarkan Web Component
customElements.define("challenge-submit-form", ChallengeSubmitForm);
