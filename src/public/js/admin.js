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