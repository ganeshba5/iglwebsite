// Marquee functionality - can be customized to update messages dynamically
document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.getElementById('marquee');
    
    // Function to update marquee messages
    // You can call this function to dynamically update the messages
    function updateMarqueeMessages(messages) {
        if (!messages || messages.length === 0) return;
        
        marquee.innerHTML = '';
        // Add messages twice for seamless loop
        [...messages, ...messages].forEach(message => {
            const item = document.createElement('span');
            item.className = 'marquee-item';
            item.textContent = message;
            marquee.appendChild(item);
        });
    }
    
    // Example: Update messages programmatically
    // updateMarqueeMessages([
    //     '🚀 New feature launching soon',
    //     '✨ Big announcement coming',
    //     '🌟 Stay connected with us'
    // ]);
    
    // Pause animation on hover for better readability
    const marqueeContainer = document.querySelector('.marquee-container');
    if (marqueeContainer) {
        marqueeContainer.addEventListener('mouseenter', () => {
            marquee.style.animationPlayState = 'paused';
        });
        
        marqueeContainer.addEventListener('mouseleave', () => {
            marquee.style.animationPlayState = 'running';
        });
    }
});

