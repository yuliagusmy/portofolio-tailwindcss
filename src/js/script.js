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

// Portofolio
function showPortfolio(category) {
  // Get all project cards and hide them
  const allCards = document.querySelectorAll(".project-card");
  allCards.forEach((card) => {
    card.style.display = "none";
  });

  // Show the specific category of cards
  const selectedCards = document.querySelectorAll(`.${category}`);
  selectedCards.forEach((card) => {
    card.style.display = "block";
  });

  // Change the title of the portfolio container
  const title = document.querySelector("#portfolioContainer h2");
  title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
}

// Show all cards initially
document.addEventListener("DOMContentLoaded", function () {
  showPortfolio("website");
  showPortfolio("graphicDesign");
  showPortfolio("typography");
});
