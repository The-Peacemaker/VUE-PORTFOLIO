/**
 * Canvas Title Animation System
 * Creates interactive constellations with magnetic physics
 * Stars connect based on proximity, creating beautiful patterns
 */

class CanvasTitleAnimation {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.animationId = null;
        this.startTime = Date.now();
        
        // Configuration options
        this.options = {
            baseColor: '#4F46E5',
            accentColor: '#06B6D4',
            magneticForce: 0.2,
            friction: 0.88,
            maxSpeed: 2.5,
            connectionDistance: 120,
            starSize: 2,
            ...options
        };

        // Animation state
        this.stars = [];
        this.constellations = [];
        this.mouse = { x: -1000, y: -1000, active: false };
        this.isDark = document.body.classList.contains('dark-theme');
        
        this.init();
    }

    init() {
        this.setupCanvas();
        this.createConstellations();
        this.startAnimation();
        this.setupResizeHandler();
        this.setupThemeListener();
        this.setupMouseTracking();
    }

    setupCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        this.ctx.scale(dpr, dpr);
        this.canvasWidth = rect.width;
        this.canvasHeight = rect.height;
        
        // Adjust settings based on screen size - increased star counts for PERFECTION
        if (rect.width < 768) {
            // Mobile optimizations
            this.starCount = 45;
            this.options.connectionDistance = 95;
        } else if (rect.width < 1024) {
            // Tablet optimizations
            this.starCount = 70;
            this.options.connectionDistance = 115;
        } else {
            // Desktop settings - beautiful dense constellation field
            this.starCount = 100;
            this.options.connectionDistance = 140;
        }
    }

    createConstellations() {
        this.stars = [];
        
        // Create individual stars that will form constellations
        for (let i = 0; i < this.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvasWidth,
                y: Math.random() * this.canvasHeight,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 1.5 + 1.5,
                brightness: Math.random() * 0.5 + 0.5,
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
        const magneticRadius = 180;

        if (distance < magneticRadius && distance > 0) {
            const force = (1 - distance / magneticRadius) * this.options.magneticForce;
            star.vx += (dx / distance) * force;
            star.vy += (dy / distance) * force;
        }

        // Limit max speed
        const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
        if (speed > this.options.maxSpeed) {
            star.vx = (star.vx / speed) * this.options.maxSpeed;
            star.vy = (star.vy / speed) * this.options.maxSpeed;
        }

        // Apply friction
        star.vx *= this.options.friction;
        star.vy *= this.options.friction;
    }

    updateStars() {
        // Batch all star updates for better performance
        const { connectionDistance } = this.options;
        const starsLength = this.stars.length;
        
        for (let i = 0; i < starsLength; i++) {
            const star = this.stars[i];
            
            // Apply magnetic force
            this.applyMagneticForce(star);

            // Update position
            star.x += star.vx;
            star.y += star.vy;

            // Wrap around edges (branchless for speed)
            star.x = star.x < 0 ? this.canvasWidth : (star.x > this.canvasWidth ? 0 : star.x);
            star.y = star.y < 0 ? this.canvasHeight : (star.y > this.canvasHeight ? 0 : star.y);

            // Find connections - optimized with early exit
            star.connections = [];
            for (let j = i + 1; j < starsLength; j++) {
                const other = this.stars[j];
                const dx = other.x - star.x;
                const dy = other.y - star.y;
                const distSq = dx * dx + dy * dy; // Use squared distance to avoid sqrt
                const maxDistSq = connectionDistance * connectionDistance;

                if (distSq < maxDistSq) {
                    const distance = Math.sqrt(distSq); // Only calculate when needed
                    star.connections.push({
                        target: other,
                        distance: distance,
                        strength: 1 - (distance / connectionDistance)
                    });
                }
            }
        }
    }

    drawStar(star, time) {
        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.brightness + twinkle * 0.3;

        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        
        // Draw star core
        this.ctx.fillStyle = star.color;
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw glow
        const gradient = this.ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, star.color + '40');
        gradient.addColorStop(1, star.color + '00');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();
    }

    drawConnections(star) {
        star.connections.forEach(conn => {
            const alpha = conn.strength * 0.3;
            
            this.ctx.save();
            this.ctx.globalAlpha = alpha;
            
            // Create gradient for connection line
            const gradient = this.ctx.createLinearGradient(
                star.x, star.y,
                conn.target.x, conn.target.y
            );
            gradient.addColorStop(0, star.color);
            gradient.addColorStop(1, conn.target.color);
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(star.x, star.y);
            this.ctx.lineTo(conn.target.x, conn.target.y);
            this.ctx.stroke();

            this.ctx.restore();
        });
    }

    drawConstellationLabels() {
        // Find the largest constellation (most connected star cluster)
        const clusters = this.findClusters();
        
        if (clusters.length > 0 && clusters[0].length >= 3) {
            const cluster = clusters[0];
            
            // Calculate center of cluster
            let centerX = 0, centerY = 0;
            cluster.forEach(star => {
                centerX += star.x;
                centerY += star.y;
            });
            centerX /= cluster.length;
            centerY /= cluster.length;

            // Draw subtle constellation name
            this.ctx.save();
            this.ctx.globalAlpha = 0.15;
            this.ctx.font = '10px "Space Mono", monospace';
            this.ctx.fillStyle = this.isDark ? '#60A5FA' : '#4F46E5';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`C-${cluster.length}`, centerX, centerY);
            this.ctx.restore();
        }
    }

    findClusters() {
        const visited = new Set();
        const clusters = [];

        const dfs = (star, cluster) => {
            if (visited.has(star)) return;
            visited.add(star);
            cluster.push(star);

            star.connections.forEach(conn => {
                dfs(conn.target, cluster);
            });
        };

        this.stars.forEach(star => {
            if (!visited.has(star)) {
                const cluster = [];
                dfs(star, cluster);
                if (cluster.length > 0) {
                    clusters.push(cluster);
                }
            }
        });

        // Sort by cluster size (largest first)
        return clusters.sort((a, b) => b.length - a.length);
    }

    animate() {
        // Performance optimization: skip frames intelligently
        const now = Date.now();
        const elapsed = now - (this.lastFrameTime || 0); // Fix: use 0 instead of now
        
        // Adaptive frame rate based on device
        const targetFrameTime = this.canvasWidth < 768 ? 33 : 16; // 30fps mobile, 60fps desktop
        
        if (elapsed < targetFrameTime && this.lastFrameTime !== undefined) {
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }
        
        this.lastFrameTime = now;
        const currentTime = now - this.startTime;
        
        // Clear canvas efficiently
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        // Update stars and find connections (batched)
        this.updateStars();
        
        // Draw in optimal order (connections -> labels -> stars)
        this.stars.forEach(star => this.drawConnections(star));
        this.drawConstellationLabels();
        this.stars.forEach(star => this.drawStar(star, currentTime));
        
        // Continue animation
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    setupMouseTracking() {
        const updateMouse = (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
            this.mouse.active = true;
        };

        this.canvas.addEventListener('mousemove', updateMouse);
        this.canvas.addEventListener('mouseenter', () => {
            this.mouse.active = true;
        });
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.active = false;
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });

        // Touch support
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = touch.clientX - rect.left;
            this.mouse.y = touch.clientY - rect.top;
            this.mouse.active = true;
        });

        this.canvas.addEventListener('touchend', () => {
            this.mouse.active = false;
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });
    }

    startAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.animate();
    }

    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    setupResizeHandler() {
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.setupCanvas();
                this.createConstellations();
            }, 100);
        });
    }

    setupThemeListener() {
        // Watch for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    this.isDark = document.body.classList.contains('dark-theme');
                }
            });
        });
        
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });
        
        // Pause animation when tab is not visible for performance
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAnimation();
            } else {
                this.startAnimation();
            }
        });
    }

    updateTheme(isDark) {
        this.isDark = isDark;
        this.options.baseColor = isDark ? '#60A5FA' : '#4F46E5';
        this.options.accentColor = isDark ? '#34D399' : '#06B6D4';
    }

    destroy() {
        this.stopAnimation();
        window.removeEventListener('resize', this.setupResizeHandler);
    }
}

// Export for use in other files
window.CanvasTitleAnimation = CanvasTitleAnimation;