// Simple Scroll-Reveal for Sections
const revealSections = () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Updated Canvas Animation for Intro Background: Bubbling Effect
const canvas = document.getElementById('bgCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create animated bubbles as background effect
  const bubbles = [];
  const bubbleCount = 100; // Increase or decrease count as needed

  for (let i = 0; i < bubbleCount; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,        // Radius between 1 and 4
      speed: Math.random() * 1 + 0.5,    // Vertical speed between 0.5 and 1.5
      drift: (Math.random() - 0.5) * 0.5 // Horizontal drift, can be negative or positive
    });
  }

  const animateCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble) => {
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
      // Use a translucent blue fill
      ctx.fillStyle = 'rgba(60, 104, 91, 0.97)';
      ctx.fill();
      
      // Update bubble position: float upward and drift horizontally
      bubble.y -= bubble.speed;
      bubble.x += bubble.drift;

      // If the bubble goes off the top, reinitialize it along the bottom
      if (bubble.y + bubble.r < 0) {
        bubble.y = canvas.height + bubble.r;
        bubble.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animateCanvas);
  };

  animateCanvas();
}
