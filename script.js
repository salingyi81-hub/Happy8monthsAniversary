// Define the relationship start date (YYYY, MM-1, DD, HH, MM, SS)
// Example: August 4, 2025
const startDate = new Date(2025, 7, 4, 0, 0, 0); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the DOM with padding
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Update the timer every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// Particle Effect (Stars/Sparkles)
function createSparkle() {
    const particles = document.getElementById('heart-particles');
    const sparkle = document.createElement('div');
    sparkle.classList.add('particle');
    const emojis = ['✨', '🌟', '⭐', '💫'];
    sparkle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random position
    sparkle.style.left = Math.random() * 100 + 'vw';
    
    // Random size
    const size = (Math.random() * 15 + 10) + 'px';
    sparkle.style.fontSize = size;
    
    // Random duration and delay
    const duration = (Math.random() * 3 + 4) + 's';
    const delay = Math.random() * 2 + 's';
    sparkle.style.animationDuration = duration;
    sparkle.style.animationDelay = delay;
    sparkle.style.color = '#d4af37'; // Golden color
    
    particles.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 6000);
}

// Generate sparkles every 400ms
setInterval(createSparkle, 400);

// YouTube IFrame API Integration
let player;
const videoId = 'GwZvIy1u4RM'; // 'မင်းလေးရှိရင်'
let isPlaying = false;

// Load YouTube API Script
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '360',
        width: '100%',
        videoId: videoId,
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'loop': 1,
            'playlist': videoId
        }
    });
}



// Scroll Reveal Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// Envelope logic
const envelope = document.querySelector('.envelope-wrapper');
if (envelope) {
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        if (envelope.classList.contains('open')) {
            const paper = envelope.querySelector('.envelope-paper');
            // Ensure we start at the top of the letter
            setTimeout(() => {
                paper.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100);
        }
    });
}
