// SECTION SWITCHING
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.remove('hidden');
    selected.classList.add('active');
  }
}

// SIMPLE CHAT FUNCTION
function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chatBox");
  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + message;
  userMsg.classList.add("mb-1");
  chatBox.appendChild(userMsg);

  const reply = document.createElement("div");
  reply.textContent = "Janani: I'm here to help! (simulated)";
  reply.classList.add("mb-3", "text-blue-600");
  chatBox.appendChild(reply);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// LOGOUT CONFIRMATION
function confirmLogout() {
  if (confirm("Are you sure you want to sign out?")) {
    window.location.href = "/logout";
  }
}

// CHARTS
document.addEventListener("DOMContentLoaded", () => {
  // BP CHART
  new Chart(document.getElementById("bpChart"), {
    type: 'line',
    data: {
      labels: ['June 20', 'June 21', 'June 22', 'June 23', 'June 24'],
      datasets: [
        {
          label: 'Systolic',
          data: [115, 118, 120, 119, 122],
          borderColor: 'blue',
          fill: false
        },
        {
          label: 'Diastolic',
          data: [75, 77, 80, 78, 76],
          borderColor: 'green',
          fill: false
        }
      ]
    },
    options: { responsive: true }
  });

  // CHECK COMPLETION CHART
  new Chart(document.getElementById("checksChart"), {
    type: 'doughnut',
    data: {
      labels: ['Completed', 'Pending'],
      datasets: [{
        data: [7, 2],
        backgroundColor: ['#22c55e', '#f97316']
      }]
    },
    options: { responsive: true }
  });

  // WEIGHT CHART
  new Chart(document.getElementById("weightChart"), {
    type: 'bar',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Weight',
        data: [60, 61, 62, 62],
        backgroundColor: '#6366f1'
      }]
    },
    options: { responsive: true }
  });

  // EDIT PROFILE BUTTON
  const editBtn = document.querySelector("#profile button");
  if (editBtn) {
    editBtn.addEventListener("click", () => {
      window.location.href = "/edit_profile";
    });
  }
});

