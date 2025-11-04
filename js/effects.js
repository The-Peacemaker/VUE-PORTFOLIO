// Interactive Grid Management - Optimized
class GridManager {
    constructor() {
        this.gridContainer = null;
        this.isDark = false;
        this.resizeTimeout = null;
    }

    init() {
        this.gridContainer = document.getElementById('interactive-grid');
        this.updateGrid();
        
        // Debounced resize for better performance
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => this.updateGrid(), 150);
        }, { passive: true });
    }

    updateGrid() {
        if (!this.gridContainer) return;
        
        // Use document fragment for better DOM performance
        const fragment = document.createDocumentFragment();
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Reduce grid density for better performance
        const cellSize = 40; // Increased from 30
        const numColumns = Math.ceil(width / cellSize);
        const numRows = Math.ceil(height / cellSize);
        const numCells = Math.min(numColumns * numRows, 500); // Cap max cells
        
        // Clear existing grid efficiently
        this.gridContainer.textContent = '';
        
        // Batch create cells
        for (let i = 0; i < numCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            fragment.appendChild(cell);
        }
        
        this.gridContainer.appendChild(fragment);
    }

    setTheme(isDark) {
        this.isDark = isDark;
    }

    destroy() {
        clearTimeout(this.resizeTimeout);
    }
}

// 3D Card Effects
class CardEffects {
    constructor() {
        this.card = null;
        this.isDesktop = false;
    }

    init(cardRef, isDesktop) {
        this.card = cardRef;
        this.isDesktop = isDesktop;
    }

    handleMouseMove(e) {
        if (!this.isDesktop || !this.card) return;
        
        // Temporarily disabled to allow pure CSS transitions to work
        // const rect = this.card.getBoundingClientRect();
        // const x = e.clientX - rect.left;
        // const y = e.clientY - rect.top;
        // const rotateX = ((y / rect.height) - 0.5) * -5;
        // const rotateY = ((x / rect.width) - 0.5) * 5;
        
        // Only apply 3D rotation when js-hover class is active
        // if (this.card.classList.contains('js-hover')) {
        //     this.card.style.transform = `translateY(-8px) scale(1.02) perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        // }
    }

    handleMouseEnter() {
        if (!this.isDesktop || !this.card) return;
        // Simplified to just add class without interference
        this.card.classList.add('js-hover');
    }

    handleMouseLeave() {
        if (!this.isDesktop || !this.card) return;
        // Remove class and ensure no inline styles interfere
        this.card.classList.remove('js-hover');
        this.card.style.removeProperty('transform');
    }
}

// Custom Cursor Management - Optimized
class CursorManager {
    constructor() {
        this.cursor = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.ease = 0.15;
        this.isVisible = false;
        this.rafId = null;
        this.lastUpdateTime = 0;
    }

    init(cursorRef) {
        this.cursor = cursorRef;
        this.setupEventListeners();
        this.startAnimation();
    }

    setupEventListeners() {
        // Throttled mouse tracking for performance
        let mouseMoveTimeout;
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            if (!this.isVisible) {
                this.isVisible = true;
                this.cursor.style.opacity = '1';
            }
        }, { passive: true });

        document.addEventListener('mouseleave', () => {
            this.isVisible = false;
            this.cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            this.isVisible = true;
            this.cursor.style.opacity = '1';
        });

        // Optimized hover detection with event delegation
        document.addEventListener('mouseover', (e) => {
            const target = e.target;
            
            // Use closest() once and cache result
            const textEl = target.closest('p, h1, h2, h3, h4, h5, h6, span:not(.social-link-text), li, .timeline-item, .achievement-item, .job-title, .company-name');
            const linkEl = target.closest('a, button, input, textarea, select, [role="button"], .skill-badge, .social-link, .nav-link');
            
            if (textEl) {
                const fontSize = parseFloat(window.getComputedStyle(textEl).fontSize) || 16;
                this.cursor.style.setProperty('--cursor-height', `${fontSize * 1.3}px`);
                this.cursor.className = 'cursor-dot text-hover';
            } else if (linkEl) {
                this.cursor.className = 'cursor-dot link-hover';
            }
        }, { passive: true });

        document.addEventListener('mouseout', (e) => {
            const target = e.target;
            
            if (!e.relatedTarget || !target.contains(e.relatedTarget)) {
                this.cursor.className = 'cursor-dot';
                this.cursor.style.removeProperty('--cursor-width');
                this.cursor.style.removeProperty('--cursor-height');
            }
        }, { passive: true });

        // Click effects
        document.addEventListener('mousedown', () => {
            this.cursor.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%) scale(0.8)`;
        });

        document.addEventListener('mouseup', () => {
            this.cursor.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%) scale(1)`;
        });
    }

    startAnimation() {
        const animate = (currentTime) => {
            // Limit to 60fps max
            if (currentTime - this.lastUpdateTime < 16) {
                this.rafId = requestAnimationFrame(animate);
                return;
            }
            this.lastUpdateTime = currentTime;

            this.targetX = this.mouseX;
            this.targetY = this.mouseY;
            
            if (!this.cursor.classList.contains('text-hover')) {
                this.cursor.style.removeProperty('--cursor-width');
                this.cursor.style.removeProperty('--cursor-height');
            }

            // Smooth easing
            this.currentX += (this.targetX - this.currentX) * this.ease;
            this.currentY += (this.targetY - this.currentY) * this.ease;
            
            // Use transform for GPU acceleration
            this.cursor.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;
            
            this.rafId = requestAnimationFrame(animate);
        };
        this.rafId = requestAnimationFrame(animate);
    }

    destroy() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
    }
}

// Initialize all managers - Safe initialization
if (typeof window !== 'undefined') {
    window.gridManager = new GridManager();
    window.cardEffects = new CardEffects();
    window.cursorManager = new CursorManager();
}
