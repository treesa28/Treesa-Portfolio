// === TWINKLING STARFIELD ===
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const numStars = 150;
  let stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      alpha: Math.random(),
      fade: Math.random() * 0.02 + 0.005
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();

      star.alpha += star.fade;
      if (star.alpha <= 0 || star.alpha >= 1) {
        star.fade = -star.fade;
      }
    }
  }

  function animate() {
    drawStars();
    requestAnimationFrame(animate);
  }
  animate();
});

// === TYPEWRITER EFFECT ===
document.addEventListener("DOMContentLoaded", () => {
  const typewriterElement = document.querySelector(".typewriter");
  const text = typewriterElement.getAttribute("data-text");
  let index = 0;

  function type() {
    if (index <= text.length) {
      typewriterElement.textContent = text.substring(0, index++);
      setTimeout(type, 150);
    }
  }
  type();
});
