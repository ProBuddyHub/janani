document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("doctorForm");
  const flashBox = document.getElementById("flashBox");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const codeInput = document.getElementById("doctor_code");
    const code = codeInput.value.trim().toUpperCase();

    // Reset flash box
    flashBox.classList.add("hidden");
    flashBox.textContent = "";

    if (!code) {
      flashBox.textContent = "Please enter a doctor code.";
      flashBox.classList.remove("hidden");
      return;
    }

    try {
      const response = await fetch("/doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctor_code: code }),
      });

      const result = await response.json();

      if (result.status === "success") {
        // Redirect on success
        window.location.href = "/doctor_questions";
      } else {
        flashBox.textContent = result.message || "Invalid doctor code.";
        flashBox.classList.remove("hidden");
      }
    } catch (error) {
      console.error("Error verifying doctor code:", error);
      flashBox.textContent = "Something went wrong. Please try again.";
      flashBox.classList.remove("hidden");
    }
  });
});

