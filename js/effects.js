// Interactive Grid Management
class GridManager {
    constructor() {
        this.gridContainer = null;
        this.isDark = false;
    }

    init() {
        this.gridContainer = document.getElementById('interactive-grid');
        this.updateGrid();
        window.addEventListener('resize', this.updateGrid.bind(this));
    }

    updateGrid() {
        if (!this.gridContainer) return;
        
        this.gridContainer.innerHTML = '';
        const width = window.innerWidth;
        const height = window.innerHeight;
        const numColumns = Math.ceil(width / 30);
        const numRows = Math.ceil(height / 30);
        const numCells = numColumns * numRows;
        
        for (let i = 0; i < numCells; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            this.gridContainer.appendChild(cell);
        }
    }

    setTheme(isDark) {
        this.isDark = isDark;
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

// Custom Cursor Management
class CursorManager {
    constructor() {
        this.cursor = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.ease = 0.1;
        this.hoveredNavElement = null;
    }

    init(cursorRef) {
        this.cursor = cursorRef;
        this.setupEventListeners();
        this.startAnimation();
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        document.addEventListener('mouseover', (e) => {
            const target = e.target;
            
            if (target.closest('.nav-link')) {
                this.hoveredNavElement = target.closest('.nav-link');
                this.cursor.classList.add('nav-hover');
            } else if (target.closest('.cursor-interactive')) {
                const fontSize = parseFloat(window.getComputedStyle(target).fontSize);
                this.cursor.style.setProperty('--cursor-height', `${fontSize * 1.2}px`);
                this.cursor.classList.add('text-hover');
            } else if (target.closest('a, button')) {
                this.cursor.classList.add('link-hover');
            }
        });

        document.addEventListener('mouseout', () => {
            this.hoveredNavElement = null;
            this.cursor.className = 'cursor-dot';
        });
    }

    startAnimation() {
        const animate = () => {
            this.targetX = this.mouseX;
            this.targetY = this.mouseY;
            
            if (this.hoveredNavElement) {
                const rect = this.hoveredNavElement.getBoundingClientRect();
                this.targetX = rect.left + rect.width / 2;
                this.targetY = rect.top + rect.height / 2;
                this.cursor.style.setProperty('--cursor-width', `${rect.width}px`);
                this.cursor.style.setProperty('--cursor-height', `${rect.height}px`);
            } else {
                this.cursor.style.removeProperty('--cursor-width');
                if (!this.cursor.classList.contains('text-hover')) {
                    this.cursor.style.removeProperty('--cursor-height');
                }
            }

            this.currentX += (this.targetX - this.currentX) * this.ease;
            this.currentY += (this.targetY - this.currentY) * this.ease;
            
            this.cursor.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;
            
            requestAnimationFrame(animate);
        };
        animate();
    }
}

// Initialize all managers - Safe initialization
if (typeof window !== 'undefined') {
    window.gridManager = new GridManager();
    window.cardEffects = new CardEffects();
    window.cursorManager = new CursorManager();
}
