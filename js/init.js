// App Initialization and Lifecycle Management
document.addEventListener('DOMContentLoaded', () => {
    // Theme Management - Dark mode by default
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        
        // Default to dark mode if no saved preference
        let isDark;
        if (savedTheme) {
            isDark = savedTheme === 'dark';
        } else {
            // Set dark mode as default for all new users
            isDark = true;
            localStorage.setItem('theme', 'dark');
        }
        
        document.body.className = isDark 
            ? 'dark-theme w-full min-h-screen p-4 sm:p-8 md:p-16 isolate'
            : 'light-theme w-full min-h-screen p-4 sm:p-8 md:p-16 isolate';
        
        return isDark;
    };

    // Device Detection
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // Initialize Theme first
    const isDark = initializeTheme();

    // Wait a frame to ensure DOM is fully ready
    requestAnimationFrame(() => {
        // Initialize Grid
        if (window.gridManager) {
            window.gridManager.init();
            window.gridManager.setTheme(isDark);
        }
        
        // Initialize Canvas Title Animation - Constellations
        setTimeout(() => {
            const canvasElement = document.getElementById('benedict-canvas');
            const fallbackElement = document.getElementById('canvas-fallback');
            
            if (canvasElement && window.CanvasTitleAnimation) {
                try {
                    window.canvasAnimation = new window.CanvasTitleAnimation('benedict-canvas', {
                        baseColor: isDark ? '#60A5FA' : '#4F46E5',
                        accentColor: isDark ? '#34D399' : '#06B6D4',
                        magneticForce: 0.2,
                        friction: 0.88,
                        maxSpeed: 2.5,
                        connectionDistance: 120,
                        starSize: 2
                    });
                    
                    // Hide fallback once canvas is ready
                    if (fallbackElement) {
                        fallbackElement.style.display = 'none';
                    }
                } catch (error) {
                    console.error('Canvas animation failed to initialize:', error);
                    // Show fallback if canvas fails
                    if (fallbackElement) {
                        fallbackElement.style.display = 'flex';
                    }
                }
            } else {
                console.error('Missing canvas element or CanvasTitleAnimation class');
                if (fallbackElement) {
                    // Show fallback if canvas or animation class not available
                    fallbackElement.style.display = 'flex';
                }
            }
        }, 200);

        // Initialize Desktop-only features
        if (isDesktop) {
            // Initialize cursor
            const cursorElement = document.getElementById('cursor-dot');
            if (cursorElement && window.cursorManager) {
                window.cursorManager.init(cursorElement);
            }

            // Initialize card effects with delay to avoid conflicts
            setTimeout(() => {
                const portfolioCard = document.getElementById('portfolio-card');
                if (portfolioCard && window.cardEffects) {
                    window.cardEffects.init(portfolioCard, isDesktop);
                }
            }, 100);
        } else {
            // Hide cursor on mobile
            const cursorElement = document.getElementById('cursor-dot');
            if (cursorElement) {
                cursorElement.style.display = 'none';
            }
        }
    });

    // Enhanced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            window.gridManager.updateGrid();
        }, 150);
    });
});

// Global theme toggle function
window.toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme === 'dark' 
        ? 'dark-theme w-full min-h-screen p-4 sm:p-8 md:p-16 isolate'
        : 'light-theme w-full min-h-screen p-4 sm:p-8 md:p-16 isolate';
    
    window.gridManager.setTheme(newTheme === 'dark');
    
    // Update canvas theme
    if (window.canvasAnimation) {
        window.canvasAnimation.updateTheme(newTheme === 'dark');
    }
};
