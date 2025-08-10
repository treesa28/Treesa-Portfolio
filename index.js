// ==== TWINKLING STARFIELD ====
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

// ==== TYPING EFFECT ====
const typingElement = document.getElementById("typing");
const roles = [
    "Java Developer",
    "Full Stack Developer",
    "Web Designer",
    "Frontend Engineer",
    "Open Source Contributor"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : 120);
}

document.addEventListener("DOMContentLoaded", type);
