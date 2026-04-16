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
        this.lastFrameTime = 0;
        this.frameCounter = 0;
        this.cachedClusters = [];
        this.lastClusterUpdate = 0;
        this.clusterUpdateInterval = 500;
        this.recentTotalConnections = 0;
        this.recentAvgConnections = '0.00';
        this.recentLargestCluster = 0;
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
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
        
        // Detect actual mobile device (not just screen size)
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.isLowPowerDevice = this.isMobile ||
            ((navigator.hardwareConcurrency || 8) <= 4) ||
            ((navigator.deviceMemory || 8) <= 4) ||
            this.isReducedMotion;
        
        // Adjust settings based on device type and screen size
        if (this.isMobile) {
            // Mobile device optimizations - reduced particles for better performance
            this.starCount = 18;
            this.options.connectionDistance = 80;
            this.options.magneticForce = 0.15;
        } else if (rect.width < 768) {
            // Small desktop/laptop screens - reduced but not as much as mobile
            this.starCount = 45;
            this.options.connectionDistance = 110;
        } else if (rect.width < 1024) {
            // Tablet or medium laptop screens
            this.starCount = 65;
            this.options.connectionDistance = 120;
        } else {
            // Desktop settings - beautiful dense constellation field
            this.starCount = 85;
            this.options.connectionDistance = 140;
        }

        if (this.isLowPowerDevice) {
            this.starCount = Math.max(14, Math.floor(this.starCount * 0.85));
            this.options.connectionDistance = Math.max(70, this.options.connectionDistance - 15);
            this.clusterUpdateInterval = 900;
        } else {
            this.clusterUpdateInterval = 450;
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
        
        // Create floating math formulas (super nerdy!)
        const formulas = [
            'iℏ∂ψ/∂t = Ĥψ', // Schrödinger
            'G_μν + Λg_μν = 8πG T_μν', // Einstein Field
            '∇⋅E = ρ/ε₀', // Maxwell (Gauss)
            '∇×B - (1/c²)∂E/∂t = μ₀J', // Maxwell (Ampere)
            'e^{iπ} + 1 = 0', // Euler
            '∫_{-∞}^∞ e^{-x²} dx = √π', // Gaussian Integral
            'P(A|B) = P(B|A)P(A)/P(B)', // Bayes
            'H(X) = -∑ p(x)log₂p(x)', // Shannon Entropy
            'R_{μν} - ½Rg_{μν} = T_{μν}', // General Relativity
            'δS = 0', // Principle of Least Action
            'dF = 0, d*F = J', // Maxwell (Differential forms)
            'Z = ∑ e^{-βE_i}' // Partition Function
        ];
        
        this.floatingFormulas = [];
        const formulaCount = this.isLowPowerDevice ? 3 : (this.isMobile ? 4 : 8);
        
        for (let i = 0; i < formulaCount; i++) {
            this.floatingFormulas.push({
                text: formulas[Math.floor(Math.random() * formulas.length)],
                x: Math.random() * this.canvasWidth,
                y: Math.random() * this.canvasHeight,
                vx: (Math.random() - 0.5) * 0.2, // Slower, more majestic
                vy: (Math.random() - 0.5) * 0.2,
                rotation: (Math.random() - 0.5) * 0.2, // Initial rotation
                rotationSpeed: (Math.random() - 0.5) * 0.002, // Slow rotation
                opacity: Math.random() * 0.15 + 0.05, // Slightly more visible
                size: Math.random() * 4 + 10, // Slightly larger
                color: Math.random() > 0.5 ? (this.isDark ? '#60A5FA' : '#4F46E5') : (this.isDark ? '#34D399' : '#06B6D4') // Varied colors
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
        const maxDistSq = connectionDistance * connectionDistance;
        let totalConnections = 0;
        
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

                if (distSq < maxDistSq) {
                    star.connections.push({
                        target: other,
                        strength: 1 - (distSq / maxDistSq)
                    });
                    totalConnections++;
                }
            }
        }

        this.recentTotalConnections = totalConnections;
        this.recentAvgConnections = (totalConnections / Math.max(starsLength, 1)).toFixed(2);
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
        // Cache expensive cluster computation and refresh periodically
        const now = performance.now();
        if (!this.cachedClusters.length || now - this.lastClusterUpdate > this.clusterUpdateInterval) {
            this.cachedClusters = this.findClusters();
            this.lastClusterUpdate = now;
            this.recentLargestCluster = this.cachedClusters.length > 0 ? this.cachedClusters[0].length : 0;
        }

        const clusters = this.cachedClusters;
        
        // Show stats for top 3 clusters
        const maxClustersToDraw = this.isLowPowerDevice ? 2 : 3;
        const topClusters = clusters.slice(0, maxClustersToDraw).filter(c => c.length >= 3);
        
        topClusters.forEach((cluster, index) => {
            // Calculate center of cluster
            let centerX = 0, centerY = 0;
            let totalConnections = 0;
            
            cluster.forEach(star => {
                centerX += star.x;
                centerY += star.y;
                totalConnections += star.connections.length;
            });
            centerX /= cluster.length;
            centerY /= cluster.length;
            
            // Calculate cluster radius
            let maxDist = 0;
            cluster.forEach(star => {
                const dist = Math.sqrt(
                    Math.pow(star.x - centerX, 2) + 
                    Math.pow(star.y - centerY, 2)
                );
                maxDist = Math.max(maxDist, dist);
            });
            
            // Different labels for different cluster sizes
            let label;
            if (index === 0) {
                // Primary cluster - show node count and connection density
                const density = (totalConnections / cluster.length).toFixed(1);
                label = `⟨${cluster.length}⟩ δ=${density}`;
            } else {
                // Secondary clusters - show node count and radius
                label = `{${cluster.length}} r≈${Math.round(maxDist)}`;
            }
            
            // Draw with better visibility
            this.ctx.save();
            
            // Add subtle glow background
            this.ctx.globalAlpha = 0.08;
            this.ctx.fillStyle = this.isDark ? '#60A5FA' : '#4F46E5';
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY - 2, 25, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw label text
            this.ctx.globalAlpha = 0.35;
            this.ctx.font = 'bold 11px "Space Mono", monospace';
            this.ctx.fillStyle = this.isDark ? '#60A5FA' : '#4F46E5';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(label, centerX, centerY);
            
            // Add decorative dots at cluster center
            this.ctx.globalAlpha = 0.25;
            this.ctx.fillStyle = this.isDark ? '#34D399' : '#06B6D4';
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, 1.5, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.restore();
        });
        
        // Draw total stats in corner (super nerdy!)
        if (!this.isLowPowerDevice || this.frameCounter % 2 === 0) {
            this.drawNerdyStats(clusters);
        }
    }
    
    drawNerdyStats(clusters) {
        const totalStars = this.stars.length;
        const totalConnections = this.recentTotalConnections;
        const avgConnections = this.recentAvgConnections;
        const largestCluster = this.recentLargestCluster;
        const entropy = (Math.random() * 0.1 + 0.9).toFixed(4); // Fake entropy
        
        const stats = [
            `SYS.ENTROPY=${entropy}`,
            `NODES=${totalStars}`,
            `EDGES=${totalConnections}`,
            `μ_DEGREE=${avgConnections}`,
            `MAX_CLUSTER={${largestCluster}}`,
            `T=${(Date.now() - this.startTime).toString(16).toUpperCase()}` // Hex timestamp
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
            // Apply subtle mouse repulsion to formulas
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

            // Update position
            formula.x += formula.vx;
            formula.y += formula.vy;
            
            // Update rotation
            formula.rotation += formula.rotationSpeed;
            
            // Dampen velocity (return to float)
            formula.vx *= 0.99;
            formula.vy *= 0.99;
            
            // Keep minimum movement
            if (Math.abs(formula.vx) < 0.1) formula.vx += (Math.random() - 0.5) * 0.01;
            if (Math.abs(formula.vy) < 0.1) formula.vy += (Math.random() - 0.5) * 0.01;
            
            // Pulse opacity slightly
            if (!formula.pulsePhase) formula.pulsePhase = Math.random() * Math.PI * 2;
            formula.pulsePhase += 0.02;
            const basePulse = Math.sin(formula.pulsePhase) * 0.05;
            formula.currentOpacity = Math.max(0, Math.min(1, formula.opacity + basePulse));
            
            // Wrap around edges
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
            
            // Add subtle shadow for depth
            this.ctx.shadowColor = formula.color || (this.isDark ? '#60A5FA' : '#4F46E5');
            this.ctx.shadowBlur = this.isLowPowerDevice ? 3 : 8;
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;
            
            this.ctx.fillText(formula.text, 0, 0); // Draw at 0,0 because we translated
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

        // Sort by cluster size (largest first)
        return clusters.sort((a, b) => b.length - a.length);
    }

    animate() {
        // Performance optimization: skip frames intelligently
        const now = performance.now();
        const elapsed = now - this.lastFrameTime;
        
        // Adaptive frame rate based on device
        const targetFrameTime = this.isLowPowerDevice ? 40 : (this.canvasWidth < 768 ? 33 : 16);
        
        if (this.lastFrameTime && elapsed < targetFrameTime) {
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }
        
        this.lastFrameTime = now;
        const currentTime = Date.now() - this.startTime;
        this.frameCounter++;
        
        // Clear canvas efficiently
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        // Draw floating formulas in background (super nerdy!)
        if (!this.isLowPowerDevice || this.frameCounter % 2 === 0) {
            this.updateFloatingFormulas();
            this.drawFloatingFormulas();
        }
        
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
        // Disable mouse tracking on mobile for better performance
        if (this.isMobile) {
            return;
        }

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
                this.createConstellations();
            }, 100);
        };

        window.addEventListener('resize', this.resizeHandler, { passive: true });
    }

    setupThemeListener() {
        // Watch for theme changes
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
        
        // Pause animation when tab is not visible for performance
        this.visibilityHandler = () => {
            if (document.hidden) {
                this.stopAnimation();
            } else {
                this.startAnimation();
            }
        };

        document.addEventListener('visibilitychange', this.visibilityHandler, { passive: true });
    }

    updateTheme(isDark) {
        this.isDark = isDark;
        this.options.baseColor = isDark ? '#60A5FA' : '#4F46E5';
        this.options.accentColor = isDark ? '#34D399' : '#06B6D4';
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

// Export for use in other files
window.CanvasTitleAnimation = CanvasTitleAnimation;