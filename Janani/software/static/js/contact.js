// --------------------
// Tips for Footer
// --------------------
const tips = [
  "Take deep breaths when feeling anxious.",
  "Include calcium in your meals daily.",
  "Practice light yoga under guidance.",
  "Drink warm water instead of cold.",
  "Read or listen to calm music before bed.",
  "Eat small meals at regular intervals.",
  "Stay away from caffeine and junk food.",
  "Talk to your doctor if you feel any pain.",
  "Track fetal movements once a day.",
  "Sleep on your left side for better circulation."
];

// Set a random tip to the footer
function setRandomTip() {
  const tipElement = document.getElementById("footerTip");
  if (tipElement) {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipElement.textContent = "Janani Tip: " + tips[randomIndex];
  }
}

// Trigger initial tip + hourly updates
document.addEventListener("DOMContentLoaded", () => {
  setRandomTip();
  setInterval(setRandomTip, 3600000); // 1 hour
});

// --------------------
// Contact Form Submission
// --------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Simple frontend validation (all fields required)
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Simulate sending message
    alert("Thank you for contacting Janani. Your message has been received!");

    // Reset form
    contactForm.reset();
  });
}

