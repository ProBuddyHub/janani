// Tip List
const tips = [
  "Drink 8+ glasses of water daily.",
  "Avoid stress—deep breathing helps.",
  "Track your baby's kicks regularly.",
  "Get at least 7 hours of sleep.",
  "Eat iron-rich foods like spinach and lentils.",
  "Attend all prenatal checkups!",
  "Take a short walk every day.",
  "Avoid raw or undercooked food.",
  "Talk to your baby—it helps bonding!",
  "Wash your hands before eating."
];

// Change footer tip randomly
function setRandomTip() {
  const tipBox = document.getElementById("footerTip");
  if (tipBox) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipBox.textContent = "Janani Tip: " + randomTip;
  }
}

// Refresh tip every hour
setInterval(setRandomTip, 3600000); // 1 hour = 3600000ms
document.addEventListener("DOMContentLoaded", setRandomTip);

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
  darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
    document.body.classList.toggle("text-gray-800");
  });
}

// Save button handler
const saveBtn = document.querySelector("button.bg-blue-600");
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    alert("Settings saved successfully (simulated).");
    // Later you can save to localStorage or send to Flask
  });
}

