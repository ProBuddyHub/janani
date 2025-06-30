let qrScanner = null;

// -----------------------------
// Language Selector Logic
// -----------------------------
const langBtn = document.getElementById("langBtn");
const langList = document.getElementById("langList");
const currentLang = document.getElementById("currentLang");

langBtn.addEventListener("click", () => {
  langList.classList.toggle("show");
});

// Define all translations
const translations = {
  en: {
    welcome: "Welcome",
    instruction: "Scan the QR code to get started",
    scan_button: "Scan QR Code"
  },
  hi: {
    welcome: "स्वागत है",
    instruction: "शुरू करने के लिए QR कोड स्कैन करें",
    scan_button: "QR कोड स्कैन करें"
  },
  te: {
    welcome: "స్వాగతం",
    instruction: "ప్రారంభించడానికి QR కోడ్ స్కాన్ చేయండి",
    scan_button: "QR కోడ్ స్కాన్ చేయండి"
  },
  ta: {
    welcome: "வரவேற்கிறோம்",
    instruction: "தொடங்க QR குறியீட்டை ஸ்கேன் செய்யவும்",
    scan_button: "QR குறியீட்டை ஸ்கேன்"
  },
  ml: {
    welcome: "സ്വാഗതം",
    instruction: "ആരംഭിക്കാൻ QR കോഡ് സ്കാൻ ചെയ്യുക",
    scan_button: "QR കോഡ് സ്കാൻ ചെയ്യുക"
  },
  kn: {
    welcome: "ಸ್ವಾಗತ",
    instruction: "ಪ್ರಾರಂಭಿಸಲು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    scan_button: "QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್"
  }
};

// Change language and store
function changeLang(lang) {
  localStorage.setItem("lang", lang);
  updateLang(lang);
}

// Update language text
function updateLang(lang) {
  const t = translations[lang] || translations["en"];
  document.querySelector("[data-i18n='welcome']").innerText = t.welcome;
  document.querySelector("[data-i18n='instruction']").innerText = t.instruction;
  document.querySelector("[data-i18n='scan_button']").innerText = t.scan_button;

  currentLang.innerText = {
    en: "English",
    hi: "Hindi",
    te: "Telugu",
    ta: "Tamil",
    ml: "Malayalam",
    kn: "Kannada"
  }[lang] || "English";
}

// Apply saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const storedLang = localStorage.getItem("lang") || "en";
  updateLang(storedLang);
});

// -----------------------------
// QR SCAN - CAMERA MODE
// -----------------------------
document.getElementById("startScan").addEventListener("click", () => {
  document.getElementById("scanner").classList.remove("hidden");

  qrScanner = new Html5Qrcode("qr-reader");
  Html5Qrcode.getCameras().then(cameras => {
    if (cameras && cameras.length) {
      qrScanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        qrCodeMessage => {
          qrScanner.stop();
          handleQRSuccess(qrCodeMessage);
        },
        err => {
          console.warn("Scan error:", err);
        }
      );
    } else {
      alert("No camera found.");
    }
  }).catch(err => {
    alert("Camera access denied or not available.");
    console.error("Camera error:", err);
  });
});

// -----------------------------
// QR SCAN - GALLERY UPLOAD
// -----------------------------
document.getElementById("galleryInput").addEventListener("change", async function () {
  const file = this.files[0];
  if (!file) return;

  const scanner = new Html5Qrcode("qr-reader");

  try {
    const decodedText = await scanner.scanFile(file, true);
    handleQRSuccess(decodedText);
  } catch (err) {
    console.error("Image scan failed:", err);
    alert("Could not decode QR from image. Try another one.");
  }
});

// Open file picker
function openGallery() {
  document.getElementById("galleryInput").click();
}

// -----------------------------
// Handle QR Code Logic
// -----------------------------
async function handleQRSuccess(decodedText) {
  try {
    const res = await fetch("/verify_qr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: decodedText })
    });

    const result = await res.json();
    if (result.status === "success") {
      alert("✅ QR verified. Redirecting...");
      window.location.href = "/doctor";
    } else {
      alert("❌ Invalid QR code.");
      closeScanner();
    }
  } catch (error) {
    console.error("QR verification error:", error);
    alert("⚠️ Error verifying QR. Please try again.");
    closeScanner();
  }
}

// -----------------------------
// Close Scanner
// -----------------------------
function closeScanner() {
  const overlay = document.getElementById("scanner");
  overlay.classList.add("hidden");

  try {
    if (qrScanner) {
      qrScanner.stop().then(() => {
        qrScanner.clear();
        qrScanner = null;
      }).catch(err => {
        console.warn("Stop error:", err);
      });
    }
  } catch (e) {
    console.error("QR stop issue:", e);
  }
}

