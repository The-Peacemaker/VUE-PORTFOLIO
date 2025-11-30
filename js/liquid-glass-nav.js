/**
 * Perfect Liquid Glass Navigation Effect - Optimized
 * Creates smooth morphing glass indicator with minimal reflows
 */

class LiquidGlassNav {
    constructor(containerSelector = 'nav ul') {
        this.containerSelector = containerSelector;
        this.navUl = null;
        this.navLinks = null;
        this.activeLink = null;
        this.isHovering = false;
        this.cachedRects = new Map();
        this.resizeObserver = null;
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.navUl = document.querySelector(this.containerSelector);
        
        if (!this.navUl) return;
        
        this.navLinks = this.navUl.querySelectorAll('.nav-link');
        
        if (!this.navLinks.length) return;

        this.cachePositions();
        this.setupEventListeners();
        this.initializeGlass();
        this.setupResizeObserver();
    }

    cachePositions() {
        // Cache all nav link positions to avoid repeated getBoundingClientRect calls
        const navRect = this.navUl.getBoundingClientRect();
        this.navLinks.forEach(link => {
            const linkRect = link.getBoundingClientRect();
            this.cachedRects.set(link, {
                left: linkRect.left - navRect.left,
                width: linkRect.width
            });
        });
    }

    setupEventListeners() {
        this.navLinks.forEach(link => {
            // Optimized hover with passive listeners
            link.addEventListener('mouseenter', (e) => {
                this.isHovering = true;
                this.moveGlassTo(e.currentTarget);
            }, { passive: true });

            link.addEventListener('click', (e) => {
                // Only set active if it's an internal link (starts with #)
                // External links shouldn't necessarily become "active" in the SPA sense
                // But for visual feedback, we might want to momentarily snap to it
                if (e.currentTarget.getAttribute('href').startsWith('#')) {
                    this.setActiveLink(e.currentTarget);
                }
            });
        });

        // Optimized mouse leave
        this.navUl.addEventListener('mouseleave', () => {
            this.isHovering = false;
            requestAnimationFrame(() => {
                if (!this.isHovering) {
                    // If we have an active link, go back to it
                    if (this.activeLink) {
                        this.moveGlassTo(this.activeLink);
                    } else {
                        // If no active link (e.g. blogs nav), maybe stay on the first one?
                        // Or we could hide it? For now, let's stay on the first one 
                        // to match the "always visible pill" look of the main nav
                        this.moveGlassTo(this.navLinks[0]);
                    }
                }
            });
        }, { passive: true });

        // Efficient active class watching
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                const target = mutation.target;
                if (target.classList.contains('active')) {
                    this.setActiveLink(target);
                    break;
                }
            }
        });

        this.navLinks.forEach(link => {
            observer.observe(link, { attributes: true, attributeFilter: ['class'] });
        });
    }

    setupResizeObserver() {
        // Recache positions on resize
        this.resizeObserver = new ResizeObserver(() => {
            this.cachePositions();
            if (this.activeLink) {
                this.moveGlassTo(this.activeLink, true);
            } else if (this.navLinks.length > 0) {
                 this.moveGlassTo(this.navLinks[0], true);
            }
        });
        this.resizeObserver.observe(this.navUl);
    }

    initializeGlass() {
        // Find active link within this container
        let activeLink = null;
        this.navLinks.forEach(link => {
            if (link.classList.contains('active')) {
                activeLink = link;
            }
        });
        
        // Default to first link if no active link found
        if (!activeLink && this.navLinks.length > 0) {
            activeLink = this.navLinks[0];
        }
        
        if (activeLink) {
            this.setActiveLink(activeLink, true);
        }
    }

    setActiveLink(link, instant = false) {
        this.activeLink = link;
        if (!this.isHovering) {
            this.moveGlassTo(link, instant);
        }
    }

    moveGlassTo(targetLink, instant = false) {
        if (!targetLink || !this.navUl) return;

        // Use cached position for better performance
        let cached = this.cachedRects.get(targetLink);
        if (!cached) {
            // Fallback to real calculation if cache miss
            const navRect = this.navUl.getBoundingClientRect();
            const linkRect = targetLink.getBoundingClientRect();
            cached = {
                left: linkRect.left - navRect.left,
                width: linkRect.width
            };
            this.cachedRects.set(targetLink, cached);
        }

        // Batch DOM writes in RAF for smooth 60fps
        requestAnimationFrame(() => {
            if (instant) {
                this.navUl.style.transition = 'none';
            }
            
            this.navUl.style.setProperty('--glass-left', `${cached.left}px`);
            this.navUl.style.setProperty('--glass-width', `${cached.width}px`);
            
            if (instant) {
                // Force reflow before re-enabling transitions
                void this.navUl.offsetHeight;
                this.navUl.style.transition = '';
            }
        });
    }

    destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
}

// Initialize for both navigations
new LiquidGlassNav('nav ul');
new LiquidGlassNav('.blogs-nav-container ul');

