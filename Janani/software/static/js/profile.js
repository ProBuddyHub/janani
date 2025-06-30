// --------------------------
// Profile Page JS (Tips + Future Support)
// --------------------------

const tips = [
  "Eat plenty of fruits and vegetables daily.",
  "Avoid high-sugar snacks and soft drinks.",
  "Go for short walks after meals.",
  "Monitor your weight regularly.",
  "Keep your iron and calcium levels in check.",
  "Take deep breaths before sleep.",
  "Talk to your baby every day — it helps bonding!",
  "Never skip your prenatal appointments.",
  "Drink at least 8 glasses of water.",
  "Read positive birth stories to reduce stress."
];

// Load random tip to footer
function loadRandomProfileTip() {
  const tipElement = document.getElementById("footerTip");
  if (tipElement) {
    const index = Math.floor(Math.random() * tips.length);
    tipElement.textContent = "Janani Tip: " + tips[index];
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  loadRandomProfileTip();

  // Auto-update tip every hour
  setInterval(loadRandomProfileTip, 3600000);
});

// profile.js

document.addEventListener("DOMContentLoaded", async () => {
  const sections = document.querySelectorAll(".profile-section");
  const tipContainer = document.getElementById("footerTip");

  try {
    const response = await fetch("/get_profile_data");
    const profile = await response.json();

    if (profile.status === "success") {
      const data = profile.data;

      // === Populate Basic Details ===
      document.getElementById("fullName").textContent = data.name || "N/A";
      document.getElementById("age").textContent = data.age || "N/A";
      document.getElementById("phone").textContent = data.phone || "N/A";
      document.getElementById("location").textContent = data.location || "N/A";
      document.getElementById("maritalStatus").textContent = data.marital_status || "N/A";
      document.getElementById("education").textContent = data.education || "N/A";
      document.getElementById("occupation").textContent = data.occupation || "N/A";
      document.getElementById("working").textContent = data.is_working || "N/A";
      document.getElementById("languages").textContent = data.languages || "N/A";

      // === Vitals & Medical History ===
      document.getElementById("height").textContent = data.height ? `${data.height} cm` : "N/A";
      document.getElementById("weight").textContent = data.weight ? `${data.weight} kg` : "N/A";
      document.getElementById("bp").textContent = data.bp || "N/A";
      document.getElementById("sugar").textContent = data.sugar ? `${data.sugar} mg/dL` : "N/A";
      document.getElementById("conditions").textContent = data.existing_conditions || "N/A";
      document.getElementById("familyHistory").textContent = data.family_history || "N/A";
      document.getElementById("allergies").textContent = data.allergies || "N/A";

      // === Pregnancy Details ===
      document.getElementById("pregnancyStage").textContent = data.pregnancy_stage || "N/A";
      document.getElementById("edd").textContent = data.edd || "N/A";
      document.getElementById("gravida").textContent = data.gravida || "0";
      document.getElementById("para").textContent = data.para || "0";
      document.getElementById("complications").textContent = data.complications || "N/A";
      document.getElementById("nutrition").textContent = data.nutrition || "N/A";

      // === Lifestyle & Habits ===
      document.getElementById("activityLevel").textContent = data.activity_level || "N/A";
      document.getElementById("sleepHours").textContent = data.sleep_hours ? `${data.sleep_hours} hrs` : "N/A";
      document.getElementById("addictions").textContent = data.addictions || "N/A";
      document.getElementById("allergiesHabit").textContent = data.allergies || "N/A";
      document.getElementById("travel").textContent = data.travel_distance ? `${data.travel_distance} km` : "N/A";

      // === Final Notes ===
      document.getElementById("additionalHistory").textContent = data.additional_history || "N/A";
      document.getElementById("doctorNotes").textContent = data.doctor_notes || "N/A";

    } else {
      console.warn("Profile data fetch failed");
    }

  } catch (err) {
    console.error("Failed to load profile data:", err);
  }

  // === Footer Tips Rotator ===
  const tips = [
    "Drink plenty of clean water every day.",
    "Avoid lifting heavy weights during pregnancy.",
    "Take your supplements as prescribed by the doctor.",
    "Get 7-8 hours of sleep daily.",
    "Attend your scheduled prenatal checkups regularly."
  ];

  function rotateTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    if (tipContainer) {
      tipContainer.textContent = tips[randomIndex];
    }
  }

  rotateTip(); // Initial tip
  setInterval(rotateTip, 1000 * 60 * 60); // Rotate every hour
});

