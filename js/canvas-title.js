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
        this.lastMouseMove = Date.now();
        this.isIdle = false;
        
        // Configuration options
        this.options = {
            baseColor: '#4F46E5',
            accentColor: '#06B6D4',
            magneticForce: 0.2,
            orbitForce: 1.2,
            friction: 0.88,
            maxSpeed: 2.5,
            connectionDistance: 120,
            starSize: 2,
            ...options
        };

        // Animation state
        this.stars = [];
        this.constellations = [];
        this.shootingStars = []; // shooting stars that streak across
        this.mouse = { x: -1000, y: -1000, active: false };
        this.lastMouseX = -1000;
        this.lastMouseY = -1000;
        this.clickParticles = []; // explosion particles on click
        this.lastShootingStarTime = Date.now();
        this.shootingStarInterval = 4000 + Math.random() * 4000; // 4-8 seconds between shooting stars
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
        const dpr = Math.min(window.devicePixelRatio || 1, 1); // Force 1x — saves massive fill rate on retina
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
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
            this.starCount = 80;
            this.options.connectionDistance = 55;
            this.options.magneticForce = 0.15;
        } else if (rect.width < 768) {
            this.starCount = 80;
            this.options.connectionDistance = 65;
        } else if (rect.width < 1024) {
            this.starCount = 120;
            this.options.connectionDistance = 70;
        } else {
            this.starCount = 200;
            this.options.connectionDistance = 120;
        }

        if (this.isLowPowerDevice) {
            this.starCount = Math.max(60, Math.floor(this.starCount * 0.95));
            this.options.connectionDistance = Math.max(70, this.options.connectionDistance - 5);
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
                size: Math.random() * 2 + 1,
                brightness: Math.random() * 0.4 + 0.7,
                twinkleSpeed: Math.random() * 0.08 + 0.04,
                twinkleOffset: Math.random() * Math.PI * 2,
                color: Math.random() > 0.7 ? this.options.accentColor : this.options.baseColor,
                connections: [],
                trail: [],
                trailMax: 10,
                lastX: 0,
                lastY: 0
            });
        }
        
        // Create floating math and machine learning formulas (super nerdy!)
        const formulas = [
            'Attention(Q,K,V) = softmax(QKᵀ/√d_k)V', // Transformer Attention
            'wₜ₊₁ = wₜ - η∇L(wₜ)', // Gradient Descent
            'L_{CE} = -∑ yᵢ log(ŷᵢ)', // Cross Entropy Loss
            'ELBO(θ,φ) = 𝔼[log p_θ(x,z) - log q_φ(z|x)]', // Evidence Lower Bound (VAE)
            'KL(P||Q) = ∑ P(x) log(P(x)/Q(x))', // KL Divergence
            'σ(z)ᵢ = e^{zᵢ} / ∑ e^{z_j}', // Softmax Function
            '∇_θ J(θ) = 𝔼[∇_θ log π_θ(a|s) Q^{π}(s,a)]', // Policy Gradient Theorem
            'f(x) = max(0, x)', // ReLU Activation
            'δ_l = (W_{l+1}ᵀ δ_{l+1}) ⊙ σ\'(z_l)', // Backpropagation Error
            'MultiHead(Q,K,V) = Concat(head₁,...,head_h)Wᴼ', // Multi-Head Attention
            'x_{l+1} = F(x_l, W_l) + x_l', // Residual Connection (ResNet)
            'm_t = β₁m_{t-1} + (1-β₁)g_t', // Adam Optimizer First Moment
            'iⱶ∂ψ/∂t = Ĥψ', // Schrödinger
            'G_μν + Λg_μν = 8πG T_μν', // Einstein Field
            'e^{iπ} + 1 = 0', // Euler's Identity
            'P(A|B) = P(B|A)P(A)/P(B)', // Bayes' Theorem
            'H(X) = -∑ p(x)log₂p(x)' // Shannon Entropy
        ];
        
        this.floatingFormulas = [];
        const formulaCount = this.isLowPowerDevice ? 1 : (this.isMobile ? 2 : 3);
        
        for (let i = 0; i < formulaCount; i++) {
            this.floatingFormulas.push({
                text: formulas[Math.floor(Math.random() * formulas.length)],
                x: Math.random() * this.canvasWidth,
                y: Math.random() * this.canvasHeight,
                vx: (Math.random() - 0.5) * 0.2, // Slower, more majestic
                vy: (Math.random() - 0.5) * 0.2,
                rotation: (Math.random() - 0.5) * 0.2, // Initial rotation
                rotationSpeed: (Math.random() - 0.5) * 0.002, // Slow rotation
                opacity: Math.random() * 0.15 + 0.05, // Subtle background
                size: Math.random() * 4 + 8, // Small
                color: Math.random() > 0.5 ? (this.isDark ? '#60A5FA' : '#4F46E5') : (this.isDark ? '#34D399' : '#06B6D4') // Varied colors
            });
        }
    }

    applyMagneticForce(star) {
        const dx = this.mouse.x - star.x;
        const dy = this.mouse.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance !== 0 && this.mouse.active) {
            // Gentle cinematic drift toward cursor — stars feel weightless, not magnetic
            const sigma = 180;
            const mass = 0.3;
            const orbitStrength = 0.4;

            const lensStrength = mass / (distance + sigma);

            const nx = dx / distance;
            const ny = dy / distance;

            // Gentle pull toward cursor
            star.vx += nx * lensStrength;
            star.vy += ny * lensStrength;

            // Subtle orbital drift around cursor (Lense-Thirring)
            star.vx += -ny * orbitStrength * (1 - Math.min(distance / sigma, 1));
            star.vy += nx * orbitStrength * (1 - Math.min(distance / sigma, 1));
        }

        // Cap velocity so stars stay graceful
        const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
        if (speed > this.options.maxSpeed * 2) {
            const ratio = (this.options.maxSpeed * 2) / speed;
            star.vx *= ratio;
            star.vy *= ratio;
        }

        star.vx *= this.options.friction;
        star.vy *= this.options.friction;

        // Minimum velocity floor — stars never fully stop drifting
        const minSpeed = 0.08;
        const minSpeedCheck = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
        if (minSpeedCheck < minSpeed) {
            star.vx = (Math.random() - 0.5) * minSpeed * 2;
            star.vy = (Math.random() - 0.5) * minSpeed * 2;
        }
    }

    updateStars() {
        // Spatial hashing: divide canvas into cells of size connectionDistance.
        // Each star only checks connections within its own cell + 8 neighbors.
        // Reduces connection math from O(n²) to O(n).
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

            // Perpetual drift — stars ALWAYS move like a real constellation
            star.vx += (Math.random() - 0.5) * 0.12;
            star.vy += (Math.random() - 0.5) * 0.12;

            // Record position for trail effect
            star.trail.push({ x: star.x, y: star.y });
            if (star.trail.length > star.trailMax) star.trail.shift();

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
        this.recentAvgConnections = (totalConnections / Math.max(starsLength, 1)).toFixed(2);
    }

    drawStar(star, time) {
        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.brightness + twinkle * 0.3;

        // Proximity glow: barely noticeable — stars stay cinematic
        let proximityGlow = 1;
        if (this.mouse.active) {
            const dx = this.mouse.x - star.x;
            const dy = this.mouse.y - star.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const prox = Math.max(0, 1 - dist / 120);
            proximityGlow = 1 + prox * 0.15; // Barely grows — no ballooning
        }

        this.ctx.save();
        this.ctx.globalAlpha = alpha;

        // Draw trail (faint line segments behind star)
        if (star.trail.length > 1) {
            this.ctx.strokeStyle = star.color;
            this.ctx.lineWidth = star.size * 0.5;
            this.ctx.lineCap = 'round';
            this.ctx.beginPath();
            this.ctx.moveTo(star.trail[0].x, star.trail[0].y);
            for (let t = 1; t < star.trail.length; t++) {
                this.ctx.lineTo(star.trail[t].x, star.trail[t].y);
            }
            this.ctx.stroke();
        }

        // Draw star core — size stays constant, no ballooning on hover
        this.ctx.fillStyle = star.color;
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw glow — subtle glow increases slightly when cursor near
        const gradient = this.ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 2 * proximityGlow
        );
        gradient.addColorStop(0, star.color + '40');
        gradient.addColorStop(1, star.color + '00');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size * 3 * proximityGlow, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();
    }

    updateClickParticles() {
        for (let i = this.clickParticles.length - 1; i >= 0; i--) {
            const p = this.clickParticles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
            p.size *= 0.96;
            p.vx *= 0.95;
            p.vy *= 0.95;
            
            if (p.life <= 0 || p.size < 0.5) {
                this.clickParticles.splice(i, 1);
            }
        }
    }

    drawClickParticles() {
        if (this.clickParticles.length === 0) return;
        
        this.ctx.save();
        this.clickParticles.forEach(p => {
            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Add glow
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
            gradient.addColorStop(0, p.color + '80');
            gradient.addColorStop(1, p.color + '00');
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
            this.ctx.fill();
        });
        this.ctx.restore();
    }

    spawnShootingStar() {
        // Pick a random edge to start from
        const side = Math.floor(Math.random() * 4);
        let x, y, vx, vy;
        
        if (side === 0) { // Top edge
            x = Math.random() * this.canvasWidth;
            y = -20;
            vx = (Math.random() - 0.5) * 3;
            vy = Math.random() * 4 + 2;
        } else if (side === 1) { // Right edge
            x = this.canvasWidth + 20;
            y = Math.random() * this.canvasHeight;
            vx = -(Math.random() * 4 + 2);
            vy = (Math.random() - 0.5) * 3;
        } else if (side === 2) { // Bottom edge
            x = Math.random() * this.canvasWidth;
            y = this.canvasHeight + 20;
            vx = (Math.random() - 0.5) * 3;
            vy = -(Math.random() * 4 + 2);
        } else { // Left edge
            x = -20;
            y = Math.random() * this.canvasHeight;
            vx = Math.random() * 4 + 2;
            vy = (Math.random() - 0.5) * 3;
        }

        this.shootingStars.push({
            x: x,
            y: y,
            vx: vx,
            vy: vy,
            life: 1.0,
            decay: Math.random() * 0.02 + 0.015,
            color: Math.random() > 0.7 ? '#fff' : this.options.accentColor,
            size: Math.random() * 2 + 1,
            tailLength: Math.random() * 60 + 40
        });
    }

    updateShootingStars() {
        for (let i = this.shootingStars.length - 1; i >= 0; i--) {
            const s = this.shootingStars[i];
            s.x += s.vx;
            s.y += s.vy;
            s.life -= s.decay;
            
            if (s.life <= 0 || s.x < -50 || s.x > this.canvasWidth + 50 || 
                s.y < -50 || s.y > this.canvasHeight + 50) {
                this.shootingStars.splice(i, 1);
            }
        }
    }

    drawShootingStars() {
        if (this.shootingStars.length === 0) return;
        
        this.ctx.save();
        this.shootingStars.forEach(s => {
            const alpha = s.life;
            
            // Draw trail (line behind the shooting star)
            const tailLength = s.tailLength * s.life;
            const tailX = s.x - s.vx * tailLength * 0.1;
            const tailY = s.y - s.vy * tailLength * 0.1;
            
            this.ctx.beginPath();
            this.ctx.moveTo(tailX, tailY);
            this.ctx.lineTo(s.x, s.y);
            this.ctx.strokeStyle = s.color;
            this.ctx.lineWidth = 2 * s.life;
            this.ctx.globalAlpha = alpha;
            this.ctx.stroke();
            
            // Draw the star itself
            this.ctx.fillStyle = s.color;
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, s.size * alpha, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Add bright glow
            const gradient = this.ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 4 * alpha);
            gradient.addColorStop(0, s.color + 'bb');
            gradient.addColorStop(1, s.color + '00');
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, s.size * 4 * alpha, 0, Math.PI * 2);
            this.ctx.fill();
        });
        this.ctx.restore();
    }

    drawConnections() {
        // Batch all connections into alpha groups — single draw call per group
        // instead of one draw call per connection line
        const groups = {};
        
        this.stars.forEach(star => {
            star.connections.forEach(conn => {
                const alpha = Math.round(conn.strength * 0.3 * 10) / 10; // quantize to 0.1 steps
                if (!groups[alpha]) groups[alpha] = [];
                groups[alpha].push([star.x, star.y, conn.target.x, conn.target.y]);
            });
        });

        this.ctx.lineWidth = 1;
        
        // Draw base color connections
        Object.keys(groups).forEach(alpha => {
            this.ctx.strokeStyle = this.options.baseColor;
            this.ctx.globalAlpha = parseFloat(alpha);
            this.ctx.beginPath();
            
            groups[alpha].forEach(([x1, y1, x2, y2]) => {
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y2);
            });
            
            this.ctx.stroke();
        });
        
        // Draw cursor-proximity connections in accent color (glow near mouse)
        if (this.mouse.active) {
            this.ctx.strokeStyle = this.options.accentColor;
            this.ctx.globalAlpha = 0.6;
            this.ctx.beginPath();
            
            this.stars.forEach(star => {
                const dx = this.mouse.x - star.x;
                const dy = this.mouse.y - star.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                star.connections.forEach(conn => {
                    const dx2 = this.mouse.x - conn.target.x;
                    const dy2 = this.mouse.y - conn.target.y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    
                    if (dist < 150 || dist2 < 150) {
                        this.ctx.moveTo(star.x, star.y);
                        this.ctx.lineTo(conn.target.x, conn.target.y);
                    }
                });
            });
            
            this.ctx.stroke();
        }
        
        this.ctx.globalAlpha = 1;
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
        const now = performance.now();
        const currentTime = Date.now() - this.startTime;
        this.frameCounter++;

        // Fixed 30fps — smooth motion when active
        if (this.lastFrameTime && now - this.lastFrameTime < 33) {
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }
        this.lastFrameTime = now;

        // Always update stars — perpetual drift keeps them moving forever
        this.updateStars();

        // Spawn shooting stars randomly
        if (Date.now() - this.lastShootingStarTime > this.shootingStarInterval) {
            this.spawnShootingStar();
            this.lastShootingStarTime = Date.now();
            this.shootingStarInterval = 3000 + Math.random() * 6000; // 3-9 seconds between
        }

        // Clear canvas efficiently
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // Active: full animation
        this.updateFloatingFormulas();
        this.drawFloatingFormulas();

        // Draw in optimal order (connections -> labels -> stars)
        this.drawConnections();
        this.drawConstellationLabels();
        this.stars.forEach(star => this.drawStar(star, currentTime));

        // Draw click explosion particles
        this.updateClickParticles();
        this.drawClickParticles();

        // Draw shooting stars (draw on top of everything)
        this.updateShootingStars();
        this.drawShootingStars();

        // Continue animation — ALWAYS schedule next frame so canvas never freezes
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
            this.lastMouseMove = Date.now();
            this.isIdle = false;
            this.startAnimation(true);
        };

        this.canvas.addEventListener('mousedown', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create explosion particles at click position
            for (let i = 0; i < 15; i++) {
                const angle = (Math.PI * 2 * i) / 15;
                const speed = Math.random() * 6 + 2;
                this.clickParticles.push({
                    x: x,
                    y: y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 1.0,
                    decay: Math.random() * 0.03 + 0.02,
                    color: Math.random() > 0.5 ? this.options.accentColor : this.options.baseColor,
                    size: Math.random() * 4 + 2
                });
            }
        }, { passive: true });
        
        this.canvas.addEventListener('mousemove', updateMouse, { passive: true });
        this.canvas.addEventListener('mouseenter', () => {
            canvasRect = this.canvas.getBoundingClientRect();
            this.mouse.active = true;
        }, { passive: true });
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.active = false;
            this.mouse.x = -1000;
            this.mouse.y = -1000;
            this.lastMouseMove = Date.now();
        }, { passive: true });

        this.mouseRectResizeHandler = () => {
            canvasRect = this.canvas.getBoundingClientRect();
        };
        window.addEventListener('resize', this.mouseRectResizeHandler, { passive: true });
    }

    startAnimation(force = false) {
        if (this.animationId && !force) return;
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.animationId = null;
        this.lastMouseMove = Date.now();
        this.isIdle = false;
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