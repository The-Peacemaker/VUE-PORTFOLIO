// Canvas Title Animation - Simple constellation field
// Stars drift slowly, mouse gently attracts them

class CanvasTitleAnimation {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
        this.animationId = null;
        
        this.options = {
            baseColor: '#4F46E5',
            accentColor: '#06B6D4',
            friction: 0.98,
            maxSpeed: 1.5,
            connectionDistance: 120,
            starCount: 60,
            ...options
        };

        this.stars = [];
        this.mouse = { x: -1000, y: -1000, active: false };

        this.init();
    }

    init() {
        this.setupCanvas();
        this.createStars();
        this.startAnimation();
        this.setupResizeHandler();
        this.setupMouseTracking();
    }

    setupCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 1);

        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';

        this.ctx.scale(dpr, dpr);
        this.canvasWidth = rect.width;
        this.canvasHeight = rect.height;

        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    createStars() {
        this.stars = [];

        for (let i = 0; i < this.options.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvasWidth,
                y: Math.random() * this.canvasHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 1,
                brightness: Math.random() * 0.4 + 0.6,
                twinkle: Math.random() * Math.PI * 2
            });
        }
    }

    updateStars() {
        this.stars.forEach(star => {
            star.x += star.vx;
            star.y += star.vy;

            // Wrap around edges
            if (star.x < 0) star.x = this.canvasWidth;
            if (star.x > this.canvasWidth) star.x = 0;
            if (star.y < 0) star.y = this.canvasHeight;
            if (star.y > this.canvasHeight) star.y = 0;

            // Gentle random drift
            star.vx += (Math.random() - 0.5) * 0.02;
            star.vy += (Math.random() - 0.5) * 0.02;

            // Cap speed
            const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
            if (speed > this.options.maxSpeed) {
                const ratio = this.options.maxSpeed / speed;
                star.vx *= ratio;
                star.vy *= ratio;
            }

            // Mouse attraction
            const dx = this.mouse.x - star.x;
            const dy = this.mouse.y - star.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150 && dist > 0) {
                const nx = dx / distance;
                const ny = dy / distance;
                star.vx += nx * 0.05;
                star.vy += ny * 0.05;
            }
        });
    }

    drawStars() {
        this.stars.forEach(star => {
            const twinkle = Math.sin(Date.now() * 0.002 + star.twinkle);
            const alpha = star.brightness + twinkle * 0.2;

            this.ctx.save();
            this.ctx.globalAlpha = alpha;
            this.ctx.fillStyle = star.color;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }

    drawConnections() {
        this.ctx.lineWidth = 1;

        this.stars.forEach((star, i) => {
            for (let j = i + 1; j < this.stars.length; j++) {
                const other = this.stars[j];
                const dx = star.x - other.x;
                const dy = star.y - other.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.options.connectionDistance) {
                    const alpha = 1 - dist / this.options.connectionDistance;
                    this.ctx.beginPath();
                    this.ctx.moveTo(star.x, star.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.strokeStyle = `rgba(79, 70, 229, ${alpha * 0.3})`;
                    this.ctx.stroke();
                }
            }
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.updateStars();
        this.drawConnections();
        this.drawStars();

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    setupMouseTracking() {
        if (this.isMobile) return;

        let rect = this.canvas.getBoundingClientRect();

        const updateMouse = (e) => {
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
            this.mouse.active = true;
        };

        this.canvas.addEventListener('mousemove', updateMouse, { passive: true });

        window.addEventListener('resize', () => {
            rect = this.canvas.getBoundingClientRect();
        }, { passive: true });
    }

    startAnimation() {
        this.animate();
    }

    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    setupResizeHandler() {
        this.resizeHandler = () => {
            const rect = this.canvas.parentElement.getBoundingClientRect();
            this.canvas.width = rect.width;
            this.canvas.height = rect.height;
            this.canvas.style.width = rect.width + 'px';
            this.canvas.style.height = rect.height + 'px';
            this.ctx.scale(1, 1);
            this.canvasWidth = rect.width;
            this.canvasHeight = rect.height;
        };

        window.addEventListener('resize', this.resizeHandler, { passive: true });
    }

    setupThemeListener() {
        this.themeObserver = new MutationObserver(() => {
            this.isDark = document.body.classList.contains('dark-theme');
        });

        this.themeObserver.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }
        if (this.themeObserver) {
            this.themeObserver.disconnect();
        }
    }
}

window.CanvasTitleAnimation = CanvasTitleAnimation;
