const comingSoon = document.getElementById('coming-soon');
const text = "COMING SOON";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    comingSoon.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150); // typing speed (ms per character)
  } else {
    // Pause and restart every 5 seconds
    setTimeout(() => {
      comingSoon.textContent = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}

// Start typing
typeEffect();
