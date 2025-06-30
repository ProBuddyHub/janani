// doctor_questions.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("questionsForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form data submitted:", data);

    try {
      const response = await fetch("/save_profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === "success") {
        window.location.href = "/dashboard";
      } else {
        alert(result.message || "Error saving data");
      }
    } catch (error) {
      console.error("Failed to submit:", error);
      alert("Failed to submit form");
    }
  });
});

