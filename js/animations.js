// --- Scroll-Reveal for Sections ---
const revealSections = () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    // When section enters the viewport by 100px, add "visible" class
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// --- Canvas Animation for Intro Background: Bubble Effect ---
const canvas = document.getElementById('bgCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  // Set canvas dimensions to fill the screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const bubbles = [];
  const bubbleCount = 100; // Adjust the bubble count as desired

  // Initialize bubbles with random positions, radius, and speed
  for (let i = 0; i < bubbleCount; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,        // Radius between 1 and 4
      speed: Math.random() * 1 + 0.5,    // Trajectory speed between 0.5 and 1.5
      drift: (Math.random() - 0.5) * 0.5 // Horizontal drift can be negative or positive
    });
  }

  const animateCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble) => {
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
      // Fill the bubbles with a translucent blue-green color
      ctx.fillStyle = 'rgba(60, 104, 91, 0.97)';
      ctx.fill();

      // Update position: float upward, add a horizontal drift
      bubble.y -= bubble.speed;
      bubble.x += bubble.drift;

      // If bubble moves off the top, reinitialize it at the bottom
      if (bubble.y + bubble.r < 0) {
        bubble.y = canvas.height + bubble.r;
        bubble.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animateCanvas);
  };

  animateCanvas();
}

// (Optional) Update canvas dimensions on browser resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
