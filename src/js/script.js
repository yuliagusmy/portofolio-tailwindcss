// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai toggle
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme:dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
// Daftar kata yang akan ditampilkan
const words = [
  "FRONT END WEB DEV",
  "GRAPHIC DESIGNER",
  "TRAVELER",
  "TYPOGRAPHY ENTHUSIAST",
];
const typingText = document.getElementById("typing-text");

let wordIndex = 0; // Indeks kata saat ini
let charIndex = 0; // Indeks huruf saat ini
let isDeleting = false; // Status menghapus teks

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentLength = typingText.innerText.length;

  if (isDeleting) {
    // Hapus karakter satu per satu
    typingText.innerText = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Tulis karakter satu per satu
    typingText.innerText = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Tentukan durasi mengetik atau menghapus
  let typingSpeed = isDeleting ? 50 : 100;

  // Jika sudah selesai mengetik atau menghapus
  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 2000; // Tunggu sebelum mulai menghapus
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Beralih ke kata berikutnya
    typingSpeed = 500; // Jeda sebelum mengetik kata baru
  }

  setTimeout(typeEffect, typingSpeed); // Jalankan fungsi lagi
}

// Jalankan fungsi ketika halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// // Portofolio
// function showPortfolio(category) {
//   // Get all project cards and hide them
//   const allCards = document.querySelectorAll(".project-card");
//   allCards.forEach((card) => {
//     card.style.display = "none";
//   });

//   // Show the specific category of cards
//   const selectedCards = document.querySelectorAll(`.${category}`);
//   selectedCards.forEach((card) => {
//     card.style.display = "block";
//   });

//   // Change the title of the portfolio container
//   const title = document.querySelector("#portfolioContainer h2");
//   title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
// }

// // Show all cards initially
// document.addEventListener("DOMContentLoaded", function () {
//   showPortfolio("website");
//   showPortfolio("graphicDesign");
//   showPortfolio("typography");
// });

// Data gambar untuk setiap project card
const slideshowsData = [
  [
      "src/img/portofolio/website/Screenshot (374).png",
      "src/img/portofolio/website/Screenshot (375).png",
      "src/img/portofolio/website/Screenshot (376).png"
  ], // Project Card 1
  [
      "src/img/portofolio/website/Screenshot (379).png",
      "src/img/portofolio/website/Screenshot (380).png",
      "src/img/portofolio/website/Screenshot (381).png"
  ] // Project Card 2
  [
      "Cuplikan layar 2024-12-31 034308.png",
      "src/img/portofolio/website/Screenshot (380).png",
      "src/img/portofolio/website/Screenshot (381).png"
  ] // Project Card 2
];

// Inisialisasi slideshow untuk setiap card
document.querySelectorAll('.project-card').forEach((card, index) => {
  const images = slideshowsData[index]; // Gambar untuk card tertentu
  let currentIndex = 0; // Index gambar saat ini
  const imageElement = card.querySelector('.slideshow-image');
  const prevBtn = card.querySelector('.prev-btn');
  const nextBtn = card.querySelector('.next-btn');

  // Fungsi untuk memperbarui gambar
  function showImage() {
      imageElement.src = images[currentIndex];
  }

  // Tombol Sebelumnya
  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
  });

  // Tombol Berikutnya
  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
  });

  // Slideshow otomatis (opsional)
  setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
  }, 5000); // Ganti gambar setiap 5 detik
});
