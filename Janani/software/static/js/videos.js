// Footer Tip Rotation
const videoTips = [
  "Take deep breaths and relax your body.",
  "Stretch lightly while watching these tips.",
  "Drink some water before starting your video time.",
  "Share one new thing you learn today with your family.",
  "Use subtitles to understand videos better if needed."
];

function rotateVideoTip() {
  const tipElement = document.getElementById("footerVideoTip");
  if (!tipElement) return;
  const index = new Date().getHours() % videoTips.length;
  tipElement.textContent = "Janani Tip: " + videoTips[index];
}

document.addEventListener("DOMContentLoaded", () => {
  rotateVideoTip();

  // Search and Filter Logic
  const searchInput = document.getElementById("videoSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const videos = document.querySelectorAll("#videoGrid > div");

  function filterVideos() {
    const keyword = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    videos.forEach(video => {
      const text = video.textContent.toLowerCase();
      const matchesKeyword = text.includes(keyword);
      const matchesCategory = category === "" || video.dataset.category === category;

      video.style.display = (matchesKeyword && matchesCategory) ? "block" : "none";
    });
  }

  searchInput.addEventListener("input", filterVideos);
  categoryFilter.addEventListener("change", filterVideos);
});

