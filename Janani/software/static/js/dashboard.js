// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  // Simulated user data — replace later with API fetch
  const profileData = {
    name: "Lakshmi Devi",
    bp: "120/80",
    hr: "78 bpm",
    weight: "62 kg",
    glucose: "95 mg/dL"
  };

  // Populate values
  document.getElementById("userName").textContent = profileData.name;
  document.getElementById("bpValue").textContent = profileData.bp;
  document.getElementById("hrValue").textContent = profileData.hr;
  document.getElementById("weightValue").textContent = profileData.weight;
  document.getElementById("glucoseValue").textContent = profileData.glucose;
});

// This part stays the same as before
document.addEventListener("DOMContentLoaded", () => {
  // ... [bpChart, checksChart, weightChart code as provided above]
});

// SECTION 2: CHARTS

document.addEventListener("DOMContentLoaded", () => {
  // Chart 1: Blood Pressure
  const bpChart = document.getElementById("bpChart");
  if (bpChart) {
    new Chart(bpChart, {
      type: "line",
      data: {
        labels: ["June 20", "June 21", "June 22", "June 23", "June 24"],
        datasets: [
          {
            label: "Systolic",
            data: [115, 118, 120, 119, 122],
            borderColor: "#2563eb",
            backgroundColor: "rgba(37, 99, 235, 0.2)",
            tension: 0.4
          },
          {
            label: "Diastolic",
            data: [75, 77, 80, 78, 76],
            borderColor: "#10b981",
            backgroundColor: "rgba(16, 185, 129, 0.2)",
            tension: 0.4
          }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  // Chart 2: Health Checks Doughnut
  const checksChart = document.getElementById("checksChart");
  if (checksChart) {
    new Chart(checksChart, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Pending"],
        datasets: [{
          data: [7, 2],
          backgroundColor: ["#22c55e", "#f97316"]
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  // Chart 3: Weight Bar
  const weightChart = document.getElementById("weightChart");
  if (weightChart) {
    new Chart(weightChart, {
      type: "bar",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{
          label: "Weight (kg)",
          data: [60, 61, 62, 62],
          backgroundColor: "#8b5cf6"
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }
});

// SECTION 3: Random Tip Loader
const healthTips = [
  "Drink at least 8 glasses of water today.",
  "Practice 10 minutes of deep breathing to relax.",
  "Include iron-rich foods like spinach and lentils.",
  "Avoid screen time before sleep — rest is essential.",
  "Take a light 15-minute walk to improve circulation.",
  "Don’t skip your prenatal supplements today.",
  "Listen to calming music to reduce stress levels."
];

function loadRandomTip() {
  const tipBox = document.getElementById("tipMessage");
  if (!tipBox) return;

  const randomIndex = Math.floor(Math.random() * healthTips.length);
  tipBox.textContent = healthTips[randomIndex];
}

// Load one tip when page is loaded
document.addEventListener("DOMContentLoaded", loadRandomTip);

// FOOTER: Auto Hourly Tip
const footerTips = [
  "Drink water every hour to stay hydrated.",
  "Eat fresh fruits to boost immunity.",
  "Practice deep breathing every morning.",
  "Get enough rest — your body needs it.",
  "Stretch your legs every 30 minutes.",
  "Take iron and folic acid as advised.",
  "Speak to someone if you're stressed.",
];

function rotateFooterTip() {
  const tipBox = document.getElementById("footerTip");
  if (!tipBox) return;

  const currentHour = new Date().getHours();
  const index = currentHour % footerTips.length;
  tipBox.textContent = "Janani Tip: " + footerTips[index];
}

// Run once on load
document.addEventListener("DOMContentLoaded", rotateFooterTip);

// Optional: Update every hour
setInterval(rotateFooterTip, 60 * 60 * 1000); // every hour

