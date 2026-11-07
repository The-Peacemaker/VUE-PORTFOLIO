// Canvas Title Animation - Simple constellation field
// Stars drift slowly, glow when cursor near, connect when close

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
            connectionDistance: 90,
            starCount: 40,
            ...options
        };

        this.stars = [];
        this.mouse = { x: -1000, y: -1000, active: false };
        this.isDark = document.body.classList.contains('dark-theme');
        
        this.init();
    }

    init() {
        this.setupCanvas();
        this.createStars();
        this.startAnimation();
        this.setupResizeHandler();
        this.setupThemeListener();
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
        this.isLowPowerDevice = this.isMobile ||
            ((navigator.hardwareConcurrency || 8) <= 4) ||
            ((navigator.deviceMemory || 8) <= 4) ||
            this.isReducedMotion;
        
        if (this.isMobile) {
            this.starCount = 40;
            this.options.connectionDistance = 60;
            this.options.magneticForce = 0.15;
        } else if (rect.width < 768) {
            this.starCount = 40;
            this.options.connectionDistance = 70;
        } else if (rect.width < 1024) {
            this.starCount = 60;
            this.options.connectionDistance = 80;
        } else {
            this.starCount = 40;
            this.options.connectionDistance = 90;
        }

        if (this.isLowPowerDevice) {
            this.starCount = Math.max(30, Math.floor(this.starCount * 0.9));
            this.options.connectionDistance = Math.max(70, this.options.connectionDistance - 5);
        }
    }

    createStars() {
        this.stars = [];
        
        for (let i = 0; i < this.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvasWidth,
                y: Math.random() * this.canvasHeight,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 2 + 1,
                brightness: Math.random() * 0.4 + 0.6,
                twinkleSpeed: Math.random() * 0.05 + 0.02,
                twinkleOffset: Math.random() * Math.PI * 2,
                color: Math.random() > 0.7 ? this.options.accentColor : this.options.baseColor,
                connections: []
            });
        }
    }

    applyMagneticForce(star) {
        if (!this.mouse.active) return;

        const dx = this.mouse.x - star.x;
        const dy = this.mouse.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance === 0) return;

        const sigma = 160;
        const mass = 0.3;
        const orbitStrength = 0.3;

        const lensStrength = mass / (distance + sigma);

        const nx = dx / distance;
        const ny = dy / distance;

        star.vx += nx * lensStrength;
        star.vy += ny * lensStrength;

        star.vx += -ny * orbitStrength * (1 - Math.min(distance / sigma, 1));
        star.vy += nx * orbitStrength * (1 - Math.min(distance / sigma, 1));

        const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
        if (speed > this.options.maxSpeed) {
            const ratio = (this.options.maxSpeed * 1.5) / speed;
            star.vx *= ratio;
            star.vy *= ratio;
        }

        star.vx *= this.options.friction;
        star.vy *= this.options.friction;
    }

    updateStars() {
        const { connectionDistance } = this.options;
        const cellSize = connectionDistance;
        const cols = Math.ceil(this.canvasWidth / cellSize);
        const rows = Math.ceil(this.canvasHeight / cellSize);
        const grid = new Array(cols * rows);

        const starsLength = this.stars.length;

        for (let i = 0; i < starsLength; i++) {
            const star = this.stars[i];
            this.applyMagneticForce(star);

            star.x += star.vx;
            star.y += star.vy;

            star.x = star.x < 0 ? this.canvasWidth : (star.x > this.canvasWidth ? 0 : star.x);
            star.y = star.y < 0 ? this.canvasHeight : (star.y > this.canvasHeight ? 0 : star.y);

            const gx = Math.floor(star.x / cellSize);
            const gy = Math.floor(star.y / cellSize);
            const cellIdx = gy * cols + gx;
            
            if (!grid[cellIdx]) grid[cellIdx] = [];
            grid[cellIdx].push(i);
        }

        const maxDistSq = connectionDistance * connectionDistance;

        for (let i = 0; i < starsLength; i++) {
            const star = this.stars[i];
            const cx = Math.floor(star.x / cellSize);
            const cy = Math.floor(star.y / cellSize);

            star.connections = [];

            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    const nx = cx + dx;
                    const ny = cy + dy;
                    if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;

                    const cellIdx = ny * cols + nx;
                    const cell = grid[cellIdx];
                    if (!cell) continue;

                    for (let j = 0; j < cell.length; j++) {
                        const otherIdx = cell[j];
                        if (otherIdx === i) continue;

                        const other = this.stars[otherIdx];
                        const dx2 = other.x - star.x;
                        const dy2 = other.y - star.y;
                        const distSq = dx2 * dx2 + dy2 * dy2;

                        if (distSq < maxDistSq) {
                            star.connections.push({
                                target: other,
                                strength: 1 - (distSq / maxDistSq)
                            });
                        }
                    }
                }
            }
        }
    }

    drawStar(star, time) {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.brightness + twinkle * 0.3;

        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        
        this.ctx.fillStyle = star.color;
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        this.ctx.fill();

        const glowRadius = star.size * 3;
        const gradient = this.ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, glowRadius
        );
        gradient.addColorStop(0, star.color + '80');
        gradient.addColorStop(1, star.color + '00');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();
    }

    drawConnections() {
        this.ctx.lineWidth = 1;
        
        this.stars.forEach(star => {
            star.connections.forEach(conn => {
                const alpha = conn.strength * 0.4;
                
                this.ctx.save();
                this.ctx.globalAlpha = alpha;
                
                const gradient = this.ctx.createLinearGradient(
                    star.x, star.y,
                    conn.target.x, conn.target.y
                );
                gradient.addColorStop(0, star.color);
                gradient.addColorStop(1, conn.target.color);
                
                this.ctx.strokeStyle = gradient;
                this.ctx.beginPath();
                this.ctx.moveTo(star.x, star.y);
                this.ctx.lineTo(conn.target.x, conn.target.y);
                this.ctx.stroke();
                this.ctx.restore();
            });
        });
    }

    animate() {
        const now = performance.now();

        if (this.lastFrameTime && now - this.lastFrameTime < 33) {
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }
        this.lastFrameTime = now;

        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.updateStars();
        this.drawConnections();
        this.stars.forEach(star => this.drawStar(star, now));

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
        this.themeObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    this.isDark = document.body.classList.contains('dark-theme');
                }
            });
        });
        
        this.themeObserver.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    destroy() {
        this.stopAnimation();
        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }
        if (this.themeObserver) {
            this.themeObserver.disconnect();
        }
    }
}

window.CanvasTitleAnimation = CanvasTitleAnimation;
