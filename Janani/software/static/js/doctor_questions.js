document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".form-section");
  const nextBtns = document.querySelectorAll(".next-btn");
  const backBtns = document.querySelectorAll(".back-btn");
  const progressFill = document.getElementById("progressFill");
  const form = document.getElementById("questionsForm");
  const submitBtn = document.getElementById("submit-btn");

  let currentSection = 0;

  // Show the appropriate form section and update progress bar
  function showSection(index) {
    sections.forEach((section, i) => {
      section.classList.toggle("hidden", i !== index);
    });

    if (progressFill) {
      const progress = ((index + 1) / sections.length) * 100;
      progressFill.style.width = `${progress}%`;
    }
  }

  // Validate all required fields in the current section
  function validateCurrentSection() {
    const requiredFields = sections[currentSection].querySelectorAll("input[required], select[required], textarea[required]");
    for (let input of requiredFields) {
      if (!input.value.trim()) {
        alert("Please fill out all required fields. Enter 'NIL' if not applicable.");
        input.focus();
        return false;
      }
    }
    return true;
  }

  // NEXT button
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!validateCurrentSection()) return;

      if (currentSection < sections.length - 1) {
        currentSection++;
        showSection(currentSection);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // BACK button
  backBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // SUBMIT button
  if (submitBtn && form) {
    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      if (!validateCurrentSection()) return;

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      try {
        const response = await fetch("/save_profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.status === "success") {
          if (confirm("All details look good! Do you want to submit the profile?")) {
            alert("Patient profile saved successfully. Redirecting to dashboard...");
            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 5000);
          }
        } else {
          alert("Something went wrong while saving. Try again.");
        }
      } catch (err) {
        console.error("Error during profile save:", err);
        alert("Server error. Please check connection or try later.");
      }
    });
  }

  // Show the first section initially
  showSection(currentSection);
});

console.log("Submit button clicked!");

