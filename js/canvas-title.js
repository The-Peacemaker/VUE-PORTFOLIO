// Canvas Title Animation - Creative Developer Constellation
// Stars drift and connect like constellations

class CanvasTitleAnimation {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.animationId = null;
        this.startTime = Date.now();
        this.lastFrameTime = 0;
        this.frameCounter = 0;
        this.cachedClusters = [];
        this.lastClusterUpdate = 0;
        this.clusterUpdateInterval = 450;
        this.recentTotalConnections = 0;
        this.recentAvgComponents = '0.00';
        this.recentLargestComponent = 0;
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Configuration options
        this.options = {
            baseColor: '#4F46E5',
            accentColor: '#06B6D4',
            magneticForce: 0.2,
            friction: 0.98,
            maxSpeed: 2.5,
            connectionDistance: 120,
            starCount: 135,
            ...options
        };

        // Animation state
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
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        
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
            this.starCount = 65;
            this.options.connectionDistance = 90;
            this.options.magneticForce = 0.15;
        } else if (rect.width < 768) {
            this.starCount = 65;
            this.options.connectionDistance = 120;
        } else if (rect.width < 1024) {
            this.starCount = 95;
            this.options.connectionDistance = 135;
        } else {
            this.starCount = 135;
            this.options.connectionDistance = 150;
        }

        if (this.isLowPowerDevice) {
            this.starCount = Math.max(40, Math.floor(this.starCount * 0.9));
            this.options.connectionDistance = Math.max(80, this.options.connectionDistance - 10);
        } else {
            this.clusterUpdateInterval = 450;
        }
    }

    createStars() {
        this.stars = [];
        
        for (let i = 0; i < this.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvasWidth,
                y: Math.random() * this.canvasHeight,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 1.5 + 1.5,
                brightness: Math.random() * 0.4 + 0.6,
                twinkleSpeed: Math.random() * 0.05 + 0.02,
                twinkleOffset: Math.random() * Math.PI * 2,
                color: Math.random() > 0.7 ? this.options.accentColor : this.options.baseColor,
                connections: [],
                lastX: 0,
                lastY: 0
            });
        }
    }

    applyMagneticForce(star) {
        if (!this.mouse.active) return;

        const dx = this.mouse.x - star.x;
        const dy = this.mouse.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance === 0) return;

        const sigma = 180;
        const mass = 0.3;
        const orbitStrength = 0.4;

        const lensStrength = mass / (distance + sigma);
        const nx = dx / distance;
        const ny = dy / distance;

        // Gentle pull toward cursor
        star.vx += nx * lensStrength;
        star.vy += ny * lensStrength;

        // Tangential orbital drift
        star.vx += -ny * orbitStrength * (1 - Math.min(distance / sigma, 1));
        star.vy += nx * orbitStrength * (1 - Math.min(distance / sigma, 1));

        // Cap velocity
        const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
        if (speed > this.options.maxSpeed * 3.5) {
            const ratio = (this.options.maxSpeed * 3.5) / speed;
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

        // Assign each star to a grid cell
        const starCells = new Array(starsLength);
        for (let i = 0; i < starsLength; i++) {
            const star = this.stars[i];
            this.applyMagneticForce(star);

            star.x += star.vx;
            star.y += star.vy;

            // Wrap around edges
            star.x = star.x < 0 ? this.canvasWidth : (star.x > this.canvasWidth ? 0 : star.x);
            star.y = star.y < 0 ? this.canvasHeight : (star.y > this.canvasHeight ? 0 : star.y);

            const gx = Math.floor(star.x / cellSize);
            const gy = Math.floor(star.y / cellSize);
            const cellIdx = gy * cols + gx;
            starCells[i] = cellIdx;

            if (!grid[cellIdx]) grid[cellIdx] = [];
            grid[cellIdx].push(i);
        }

        const maxDistSq = connectionDistance * connectionDistance;
        let totalConnections = 0;

        // Check connections only within same cell and 8 neighbors
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
                            totalConnections++;
                        }
                    }
                }
            }
        }

        this.recentTotalConnections = totalConnections;
        this.recentAvgComponents = (totalConnections / Math.max(starsLength, 1)).toFixed(2);
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

    drawConnections() {
        this.ctx.lineWidth = 1;
        
        this.stars.forEach(star => {
            star.connections.forEach(conn => {
                const alpha = conn.strength * 0.3;
                
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

    drawConstellationLabels() {
        const now = performance.now();
        if (!this.cachedClusters.length || now - this.lastClusterUpdate > this.clusterUpdateInterval) {
            this.cachedClusters = this.findClusters();
            this.lastClusterUpdate = now;
            this.recentLargestComponent = this.cachedClusters.length > 0 ? this.cachedClusters[0].length : 0;
        }

        const clusters = this.cachedClusters;
        const maxClustersToDraw = this.isLowPowerDevice ? 2 : 3;
        const topClusters = clusters.slice(0, maxClustersToDraw).filter(c => c.length >= 3);
        
        topClusters.forEach((cluster, index) => {
            let centerX = 0, centerY = 0;
            cluster.forEach(star => {
                centerX += star.x;
                centerY += star.y;
            });
            centerX /= cluster.length;
            centerY /= cluster.length;
            
            this.ctx.save();
            this.ctx.globalAlpha = 0.08;
            this.ctx.fillStyle = this.isDark ? '#60A5FA' : '#4F46E5';
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY - 2, 25, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.globalAlpha = 0.35;
            this.ctx.font = 'bold 11px "Space Mono", monospace';
            this.ctx.fillStyle = this.isDark ? '#60A5FA' : '#4F46E5';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(`★${cluster.length}`, centerX, centerY - 10);
            
            this.ctx.globalAlpha = 0.25;
            this.ctx.fillStyle = this.isDark ? '#34D399' : '#06B6D4';
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, 1.5, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }
    
    drawNerdyStats(clusters) {
        const totalStars = this.stars.length;
        const totalConnections = this.recentTotalConnections;
        const avgConnections = this.recentAvgComponents;
        const largestComponent = this.recentLargestComponent;
        const entropy = (Math.random() * 0.1 + 0.9).toFixed(4);
        
        const stats = [
            `SYS.ENTROPY=${entropy}`,
            `NODES=${totalStars}`,
            `EDGES=${totalConnections}`,
            `μ_DEGREE=${avgConnections}`,
            `MAX_CLUSTER={${largestComponent}}`,
            `T=${(Date.now() - this.startTime).toString(16).toUpperCase()}`
        ];
        
        this.ctx.save();
        this.ctx.globalAlpha = 0.4;
        this.ctx.font = '10px "Space Mono", monospace';
        this.ctx.fillStyle = this.isDark ? '#60A5FA' : '#4F46E5';
        this.ctx.textAlign = 'right';
        this.ctx.textBaseline = 'top';
        
        stats.forEach((stat, i) => {
            this.ctx.fillText(stat, this.canvasWidth - 10, 10 + (i * 14));
        });
        
        this.ctx.restore();
    }
    
    updateFloatingFormulas() {
        if (!this.floatingFormulas) return;
        
        this.floatingFormulas.forEach(formula => {
            if (this.mouse.active) {
                const dx = this.mouse.x - formula.x;
                const dy = this.mouse.y - formula.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const repelRadius = 200;
                
                if (dist < repelRadius) {
                    const force = (1 - dist / repelRadius) * 0.02;
                    formula.vx -= dx * force;
                    formula.vy -= dy * force;
                }
            }
            
            formula.x += formula.vx;
            formula.y += formula.vy;
            formula.rotation += formula.rotationSpeed;
            formula.vx *= 0.99;
            formula.vy *= 0.99;
            
            if (Math.abs(formula.vx) < 0.1) formula.vx += (Math.random() - 0.5) * 0.01;
            if (Math.abs(formula.vy) < 0.1) formula.vy += (Math.random() - 0.5) * 0.01;
            
            if (!formula.pulsePhase) formula.pulsePhase = Math.random() * Math.PI * 2;
            formula.pulsePhase += 0.02;
            const basePulse = Math.sin(formula.pulsePhase) * 0.05;
            formula.currentOpacity = Math.max(0, Math.min(1, formula.opacity + basePulse));
            
            if (formula.x < -50) formula.x = this.canvasWidth + 50;
            if (formula.x > this.canvasWidth + 50) formula.x = -50;
            if (formula.y < -20) formula.y = this.canvasHeight + 20;
            if (formula.y > this.canvasHeight + 20) formula.y = -20;
        });
    }
    
    drawFloatingFormulas() {
        if (!this.floatingFormulas) return;
        
        this.floatingFormulas.forEach(formula => {
            this.ctx.save();
            this.ctx.translate(formula.x, formula.y);
            this.ctx.rotate(formula.rotation);
            
            this.ctx.globalAlpha = formula.currentOpacity || formula.opacity;
            this.ctx.font = `italic ${formula.size}px "Space Mono", monospace`;
            this.ctx.fillStyle = formula.color || (this.isDark ? '#60A5FA' : '#4F46E5');
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            
            this.ctx.shadowColor = formula.color || (this.isDark ? '#60A5FA' : '#4F46E5');
            this.ctx.shadowBlur = this.isLowPowerDevice ? 3 : 8;
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;
            
            this.ctx.fillText(formula.text, 0, 0);
            this.ctx.restore();
        });
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

        return clusters.sort((a, b) => b.length - a.length);
    }

    animate() {
        const now = performance.now();
        const currentTime = Date.now() - this.startTime;
        this.frameCounter++;
        
        if (this.lastFrameTime && now - this.lastFrameTime < 33) {
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }
        this.lastFrameTime = now;

        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        this.updateStars();
        this.drawConnections();
        this.stars.forEach(star => this.drawStar(star, currentTime));
        this.drawConstellationLabels();
        this.drawFloatingFormulas();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    setupMouseTracking() {
        if (this.isMobile) return;

        let canvasRect = this.canvas.getBoundingClientRect();
        
        const updateMouse = (e) => {
            this.mouse.x = e.clientX - canvasRect.left;
            this.mouse.y = e.clientY - canvasRect.top;
            this.mouse.active = true;
        };

        this.canvas.addEventListener('mousemove', updateMouse, { passive: true });
        this.canvas.addEventListener('mouseenter', () => {
            canvasRect = this.canvas.getBoundingClientRect();
            this.mouse.active = true;
        }, { passive: true });
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.active = false;
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        }, { passive: true });

        this.mouseRectResizeHandler = () => {
            canvasRect = this.canvas.getBoundingClientRect();
        };
        window.addEventListener('resize', this.mouseRectResizeHandler, { passive: true });
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
        this.resizeHandler = () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.setupCanvas();
                this.createStars();
            }, 100);
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
        clearTimeout(this.resizeTimeout);

        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }

        if (this.mouseRectResizeHandler) {
            window.removeEventListener('resize', this.mouseRectResizeHandler);
        }

        if (this.visibilityHandler) {
            document.removeEventListener('visibilitychange', this.visibilityHandler);
        }

        if (this.themeObserver) {
            this.themeObserver.disconnect();
        }
    }
}

window.CanvasTitleAnimation = CanvasTitleAnimation;
