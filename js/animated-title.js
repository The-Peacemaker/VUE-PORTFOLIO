/**
 * Animated Browser Title System
 * Creates animated dotted text effects for "BENEDICT" in the browser tab title
 */

class AnimatedTitle {
    constructor() {
        this.originalTitle = '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓';
        this.currentFrame = 0;
        this.animationSpeed = 800; // milliseconds - slower, smoother typewriter speed
        this.isAnimating = false;
        this.animationId = null;
        this.patterns = [];
        this.currentPatternIndex = 0;
        
        this.init();
    }

    init() {
        this.createPatterns();
        this.startAnimation();
        this.setupVisibilityListener();
    }

    createPatterns() {
        // Simple typewriter-style animation for "BENEDICT" with progress dots only
        // Using Unicode Mathematical Bold characters for stunning appearance
        this.patterns = [
            // Typewriter progression with progress dots
            '•',
            '𝐁 •',
            '𝐁 𝐄 •',
            '𝐁 𝐄 𝐍 •',
            '𝐁 𝐄 𝐍 𝐄 •',
            '𝐁 𝐄 𝐍 𝐄 𝐃 •',
            '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 •',
            '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 •',
            '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓',
            
            // Hold final result
            '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓',
            '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓',
            '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓',
            '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓',
            
            // Brief pause then restart
            '',
            '•',
        ];
    }

    startAnimation() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentPatternIndex = 0;
        this.animate();
    }

    stopAnimation() {
        if (this.animationId) {
            clearTimeout(this.animationId);
            this.animationId = null;
        }
        this.isAnimating = false;
        document.title = '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓'; // Reset to spaced title
    }

    animate() {
        if (!this.isAnimating) return;

        // Update title with current pattern
        const currentPattern = this.patterns[this.currentPatternIndex];
        document.title = currentPattern || '•';

        // Move to next pattern
        this.currentPatternIndex = (this.currentPatternIndex + 1) % this.patterns.length;

        // Consistent smooth timing - no speed variations
        let nextDelay = this.animationSpeed; // Always use consistent speed
        
        // Only pause longer at complete word
        if (currentPattern === '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓') {
            nextDelay = 3000; // Hold complete name longer
        }
        // Brief pause before restart
        else if (currentPattern === '') {
            nextDelay = 1500; // Longer pause before restart
        }

        // Schedule next frame
        this.animationId = setTimeout(() => {
            this.animate();
        }, nextDelay);
    }

    setupVisibilityListener() {
        // Pause animation when tab is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAnimation();
            } else {
                // Resume after a short delay when tab becomes visible
                setTimeout(() => {
                    this.startAnimation();
                }, 500);
            }
        });

        // Also listen for window focus/blur
        window.addEventListener('blur', () => {
            this.stopAnimation();
        });

        window.addEventListener('focus', () => {
            setTimeout(() => {
                this.startAnimation();
            }, 300);
        });
    }

    // Method to trigger special animations - now just restarts main animation smoothly
    triggerSpecialAnimation(type = 'typewriter') {
        // Simply restart the main animation to avoid conflicts
        this.stopAnimation();
        setTimeout(() => {
            this.startAnimation();
        }, 200);
    }

    destroy() {
        this.stopAnimation();
        document.removeEventListener('visibilitychange', this.setupVisibilityListener);
        window.removeEventListener('blur', this.setupVisibilityListener);
        window.removeEventListener('focus', this.setupVisibilityListener);
        document.title = '𝐁 𝐄 𝐍 𝐄 𝐃 𝐈 𝐂 𝐓'; // Reset to spaced title
    }
}

// Initialize animated title when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure everything is loaded
    setTimeout(() => {
        window.animatedTitle = new AnimatedTitle();
        // No special triggers - just let the smooth animation run
    }, 500);
});

// Export for manual control
window.AnimatedTitle = AnimatedTitle;