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
// Certificate Fullscreen Viewer
const certImages = document.querySelectorAll(".cert-box img");
const viewer = document.getElementById("imgViewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

certImages.forEach(img => {
  img.addEventListener("click", () => {
    viewer.style.display = "flex";
    viewerImg.src = img.src;
  });
});

closeViewer.addEventListener("click", () => {
  viewer.style.display = "none";
});

viewer.addEventListener("click", (e) => {
  if (e.target !== viewerImg) viewer.style.display = "none";
});
