// chat.js

const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // Append user message
  appendMessage(text, 'user');
  userInput.value = '';

  // Show typing indicator
  const typing = document.createElement('div');
  typing.id = 'typingIndicator';
  typing.className = 'text-sm text-gray-500 italic';
  typing.innerText = 'Janani is typing...';
  chatBox.appendChild(typing);
  scrollToBottom();

  // Simulate Janani response after delay
  setTimeout(() => {
    typing.remove();
    const reply = generateReply(text);
    appendMessage(reply, 'bot');
  }, 1000);
}

function appendMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.innerText = message;
  chatBox.appendChild(msgDiv);
  scrollToBottom();
}

function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple bot logic (can be replaced with fetch to Flask backend)
function generateReply(input) {
  const lower = input.toLowerCase();
  
  if (lower.includes('hi') || lower.includes('hello')) {
    return "Hello! I'm Janani 😊 How can I support you today?";
  } else if (lower.includes('pain') || lower.includes('tired')) {
    return "I'm here for you. Try some deep breaths and let me know if it's serious 💗";
  } else if (lower.includes('medicine')) {
    return "Please tell me the symptoms and I'll guide you properly.";
  } else if (lower.includes('thanks')) {
    return "You're always welcome 🌸";
  } else if (lower.includes('bye')) {
    return "Take care! I'm just a message away 👋";
  }

  // Default fallback
  return "Hmm, I didn't understand that. Can you please rephrase it?";
}

document.addEventListener("DOMContentLoaded", () => {
  // Ensure body is scrollable with mouse or touchpad
  document.body.style.overflowY = "auto";
  document.body.style.scrollBehavior = "smooth";
  
  // Optional: make main content take minimum full height
  const main = document.querySelector("main");
  if (main) {
    main.style.minHeight = "120vh";
  }
});

