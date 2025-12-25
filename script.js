// Dark/Light Theme Toggle

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Simple typing effect (if needed)
const text = document.querySelector(".typing");
const words = ["Web Developer", "Designer", "Learner", "Freelancer"];
let i = 0;

setInterval(() => {
  text.textContent = words[i];
  i = (i + 1) % words.length;
}, 1500);
