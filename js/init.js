// App Initialization and Lifecycle Management
document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark';
        
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
};
