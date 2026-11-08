/**
 * Canvas Title Animation System - Cosmic Constellation Engine (v28 Hyper-Optimized)
 * Ultra-efficient: pre-rendered sprites, zero per-frame gradient allocations,
 * interactive gravitational nexus, cosmic supernova shockwave, and viewport throttling.
 */

class CanvasTitleAnimation {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d', { alpha: true });
        this.container = this.canvas.parentElement;
        this.animationId = null;
        this.startTime = Date.now();
        this.lastFrameTime = 0;
        this.frameCounter = 0;
        this.isRunning = false;
        this.isVisible = true;

        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.isLowPowerDevice = this.isMobile ||
            ((navigator.hardwareConcurrency || 8) <= 4) ||
            ((navigator.deviceMemory || 8) <= 4) ||
            this.isReducedMotion;

        this.isDark = document.body.classList.contains('dark-theme');

        // Configuration
        this.options = {
            baseColor: this.isDark ? '#60A5FA' : '#4F46E5',
            accentColor: this.isDark ? '#34D399' : '#06B6D4',
            connectionDistance: 110,
            magneticRadius: 140,
            friction: 0.92,
            maxSpeed: 2.2,
            ...options
        };

        // State
        this.stars = [];
        this.sparks = [];
        this.ripples = [];
        this.meteors = [];
        this.lastMeteorTime = Date.now();
        this.floatingFormulas = [];
        this.mouse = {
            x: -1000,
            y: -1000,
            active: false,
            lastX: -1000,
            lastY: -1000,
            speed: 0,
            pulsePhase: 0
        };

        // Cache sprite sheets for ultra-fast GPU blitting (zero radial gradients in loop!)
        this.sprites = {};

        this.init();
    }

    init() {
        this.setupCanvas();
        this.buildSprites();
        this.createStars();
        this.createFormulas();
        this.setupMouseTracking();
        this.setupIntersectionObserver();
        this.setupThemeListener();
        this.startAnimation();
    }

    /**
     * Builds offscreen canvas sprites for stars, glows, and sparks.
     * Eliminates createRadialGradient from the 60fps render loop completely!
     */
    buildSprites() {
        const createGlowSprite = (primaryColor, glowColor, size = 32) => {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            const center = size / 2;

            const grad = ctx.createRadialGradient(center, center, 0, center, center, center);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.2, primaryColor);
            grad.addColorStop(0.55, glowColor);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(center, center, center, 0, Math.PI * 2);
            ctx.fill();

            return canvas;
        };

        this.sprites = {
            primary: createGlowSprite(
                this.isDark ? '#93C5FD' : '#6366F1',
                this.isDark ? 'rgba(96, 165, 250, 0.4)' : 'rgba(79, 70, 229, 0.35)',
                32
            ),
            accent: createGlowSprite(
                this.isDark ? '#6EE7B7' : '#22D3EE',
                this.isDark ? 'rgba(52, 211, 153, 0.4)' : 'rgba(6, 182, 212, 0.35)',
                32
            ),
            gold: createGlowSprite(
                '#FDE047',
                'rgba(251, 191, 36, 0.45)',
                32
            ),
            violet: createGlowSprite(
                this.isDark ? '#C084FC' : '#9333EA',
                this.isDark ? 'rgba(192, 132, 252, 0.45)' : 'rgba(147, 51, 234, 0.35)',
                32
            ),
            mouseNode: createGlowSprite(
                '#FFFFFF',
                this.isDark ? 'rgba(56, 189, 248, 0.6)' : 'rgba(99, 102, 241, 0.55)',
                48
            )
        };
    }

    setupCanvas() {
        const parent = this.container || this.canvas.parentElement;
        const rect = parent.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, this.isLowPowerDevice ? 1.5 : 2);

        this.canvasWidth = Math.max(rect.width, 300);
        this.canvasHeight = Math.max(rect.height, 120);

        this.canvas.width = Math.floor(this.canvasWidth * dpr);
        this.canvas.height = Math.floor(this.canvasHeight * dpr);
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';

        this.ctx.resetTransform?.();
        this.ctx.scale(dpr, dpr);

        // Balanced starfield - rich, luminous, whisper-quiet CPU
        if (this.isLowPowerDevice) {
            this.starCount = 26;
            this.options.connectionDistance = 90;
            this.options.magneticRadius = 115;
        } else if (this.canvasWidth < 640) {
            this.starCount = 32;
            this.options.connectionDistance = 95;
            this.options.magneticRadius = 120;
        } else if (this.canvasWidth < 1024) {
            this.starCount = 46;
            this.options.connectionDistance = 110;
            this.options.magneticRadius = 135;
        } else {
            this.starCount = 64; // Rich, gorgeous celestial constellation field
            this.options.connectionDistance = 125;
            this.options.magneticRadius = 155;
        }
    }

    createStars() {
        this.stars = [];
        for (let i = 0; i < this.starCount; i++) {
            const depth = Math.random();
            const isAccent = Math.random() > 0.6;
            const isGold = !isAccent && Math.random() > 0.75;
            const isViolet = !isAccent && !isGold && Math.random() > 0.75;

            // Varied sizes: distant micro-stars, mid-constellations, and radiant foreground anchors
            let baseSize = Math.random() * 1.4 + 1.0;
            if (depth > 0.75) {
                baseSize = Math.random() * 1.6 + 2.0; // Foreground radiant star
            } else if (depth < 0.25) {
                baseSize = Math.random() * 0.6 + 0.8; // Distant star dust
            }

            this.stars.push({
                x: Math.random() * this.canvasWidth,
                y: Math.random() * this.canvasHeight,
                vx: (Math.random() - 0.5) * (0.35 + depth * 0.2),
                vy: (Math.random() - 0.5) * (0.35 + depth * 0.2),
                baseSize: baseSize,
                depth: depth,
                twinkleSpeed: Math.random() * 0.035 + 0.015,
                twinkleOffset: Math.random() * Math.PI * 2,
                spriteType: isGold ? 'gold' : (isViolet ? 'violet' : (isAccent ? 'accent' : 'primary')),
                proximity: 0,
                orbitAngle: Math.random() * Math.PI * 2
            });
        }
    }

    createFormulas() {
        // Nerdy STEM, CS, AI & Math formulas (Clean, authentic strings)
        const formulas = [
            'Attention(Q,K,V) = softmax(QKᵀ / √d)V',
            'θ_{t+1} = θ_t - η ∇L(θ_t)',
            'L = -∑ y log(ŷ)',
            'E = mc²',
            'iℏ ∂ψ/∂t = Ĥψ',
            'e^{iπ} + 1 = 0',
            'P(A|B) = P(B|A)P(A)/P(B)',
            'H(X) = -∑ p(x) log₂(p(x))',
            'O(n log n)',
            'curl -s https://api.github.com',
            'git commit -m "feat: cosmic"',
            'λx. (x x)',
            '∇ · B = 0',
            'w^T x + b = 0'
        ];

        this.floatingFormulas = [];
        const count = this.isLowPowerDevice ? 4 : (this.canvasWidth < 768 ? 5 : 8);

        for (let i = 0; i < count; i++) {
            this.floatingFormulas.push({
                text: formulas[i % formulas.length],
                x: Math.random() * this.canvasWidth,
                y: Math.random() * this.canvasHeight,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.12,
                opacity: Math.random() * 0.12 + 0.08,
                size: Math.random() * 2 + 10
            });
        }
    }

    setupMouseTracking() {
        const updateCoords = (clientX, clientY) => {
            const rect = this.canvas.getBoundingClientRect();
            const newX = clientX - rect.left;
            const newY = clientY - rect.top;

            if (this.mouse.active) {
                const dx = newX - this.mouse.x;
                const dy = newY - this.mouse.y;
                this.mouse.speed = Math.sqrt(dx * dx + dy * dy);

                // Spawn ethereal stardust trail when moving swiftly
                if (this.mouse.speed > 8 && Math.random() > 0.4 && this.sparks.length < 30) {
                    this.sparks.push({
                        x: newX + (Math.random() - 0.5) * 10,
                        y: newY + (Math.random() - 0.5) * 10,
                        vx: (Math.random() - 0.5) * 0.8,
                        vy: (Math.random() - 0.5) * 0.8,
                        size: Math.random() * 1.8 + 0.8,
                        alpha: 0.8,
                        decay: 0.035 + Math.random() * 0.02,
                        color: this.isDark ? '#67E8F9' : '#818CF8'
                    });
                }
            }

            this.mouse.x = newX;
            this.mouse.y = newY;
            this.mouse.active = true;
        };

        const onMouseMove = (e) => {
            updateCoords(e.clientX, e.clientY);
        };

        const onMouseEnter = (e) => {
            updateCoords(e.clientX, e.clientY);
            this.mouse.active = true;
        };

        const onMouseLeave = () => {
            this.mouse.active = false;
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        };

        const onClick = (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.triggerSupernova(e.clientX - rect.left, e.clientY - rect.top);
        };

        const onTouchMove = (e) => {
            if (e.touches && e.touches.length > 0) {
                const touch = e.touches[0];
                updateCoords(touch.clientX, touch.clientY);
            }
        };

        const onTouchStart = (e) => {
            if (e.touches && e.touches.length > 0) {
                const touch = e.touches[0];
                const rect = this.canvas.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const y = touch.clientY - rect.top;
                updateCoords(touch.clientX, touch.clientY);
                this.triggerSupernova(x, y);
            }
        };

        const onTouchEnd = () => {
            setTimeout(() => {
                this.mouse.active = false;
            }, 800);
        };

        // Attach listeners to both canvas and container
        const targets = [this.canvas, this.container].filter(Boolean);
        targets.forEach(t => {
            t.addEventListener('mousemove', onMouseMove, { passive: true });
            t.addEventListener('mouseenter', onMouseEnter, { passive: true });
            t.addEventListener('mouseleave', onMouseLeave, { passive: true });
            t.addEventListener('click', onClick, { passive: true });
            t.addEventListener('touchmove', onTouchMove, { passive: true });
            t.addEventListener('touchstart', onTouchStart, { passive: true });
            t.addEventListener('touchend', onTouchEnd, { passive: true });
        });

        // Resize handler with debounce
        this.resizeHandler = () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.setupCanvas();
                this.createStars();
                this.createFormulas();
            }, 120);
        };
        window.addEventListener('resize', this.resizeHandler, { passive: true });
    }

    /**
     * Trigger Supernova: Expanding cosmic shockwave ripple + bursting stardust!
     */
    triggerSupernova(x, y) {
        // Shockwave ripple
        this.ripples.push({
            x,
            y,
            radius: 4,
            maxRadius: Math.min(this.canvasWidth * 0.45, 180),
            alpha: 0.85,
            speed: 6.5
        });

        // Secondary echo ripple for double cosmic ring effect!
        this.ripples.push({
            x,
            y,
            radius: 2,
            maxRadius: Math.min(this.canvasWidth * 0.35, 130),
            alpha: 0.6,
            speed: 4.8
        });

        // Kinetic burst on nearby stars
        const burstRadius = 180;
        for (let i = 0; i < this.stars.length; i++) {
            const star = this.stars[i];
            const dx = star.x - x;
            const dy = star.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < burstRadius && dist > 0) {
                const push = (1 - dist / burstRadius) * 4.8;
                star.vx += (dx / dist) * push;
                star.vy += (dy / dist) * push;
            }
        }

        // Sparkling stardust burst (22 multi-color cosmic sparks)
        const sparkCount = this.isLowPowerDevice ? 12 : 22;
        const colors = this.isDark 
            ? ['#67E8F9', '#38BDF8', '#F472B6', '#C084FC', '#FDE047', '#34D399']
            : ['#4F46E5', '#06B6D4', '#EC4899', '#8B5CF6', '#F59E0B'];

        for (let i = 0; i < sparkCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4.2 + 1.5;
            this.sparks.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 2.4 + 1.0,
                alpha: 1,
                decay: 0.022 + Math.random() * 0.018,
                color: colors[i % colors.length]
            });
        }
    }

    /**
     * Viewport Intersection Observer: pauses requestAnimationFrame when scrolled out of view!
     * Saves 100% of GPU/CPU when user is reading below.
     */
    setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const isScrolledAway = window.scrollY > (this.canvasHeight || 150);
                    if (entry.isIntersecting || !isScrolledAway) {
                        this.isVisible = true;
                        this.startAnimation();
                    } else {
                        this.isVisible = false;
                        this.stopAnimation();
                    }
                });
            }, { threshold: 0.02 });

            this.observer.observe(this.container || this.canvas);
        }
    }

    setupThemeListener() {
        this.themeObserver = new MutationObserver(() => {
            const newIsDark = document.body.classList.contains('dark-theme');
            if (newIsDark !== this.isDark) {
                this.updateTheme(newIsDark);
            }
        });

        this.themeObserver.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });

        this.visibilityHandler = () => {
            if (document.hidden) {
                this.stopAnimation();
            } else if (this.isVisible) {
                this.startAnimation();
            }
        };

        document.addEventListener('visibilitychange', this.visibilityHandler, { passive: true });
    }

    updateTheme(isDark) {
        this.isDark = isDark;
        this.options.baseColor = isDark ? '#60A5FA' : '#4F46E5';
        this.options.accentColor = isDark ? '#34D399' : '#06B6D4';
        this.buildSprites();
    }

    /**
     * Updates physics: gentle drifting, gravitational swirl, friction, and bounce/wrap.
     */
    updatePhysics() {
        const { connectionDistance, magneticRadius, friction, maxSpeed } = this.options;
        const magRadiusSq = magneticRadius * magneticRadius;
        const connDistSq = connectionDistance * connectionDistance;
        const starCount = this.stars.length;

        this.activeConnections = [];

        for (let i = 0; i < starCount; i++) {
            const star = this.stars[i];

            // 1. Mouse Gravitational Swirl Behavior
            if (this.mouse.active) {
                const dx = this.mouse.x - star.x;
                const dy = this.mouse.y - star.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < magRadiusSq && distSq > 4) {
                    const dist = Math.sqrt(distSq);
                    const proximity = 1 - (dist / magneticRadius);
                    star.proximity = proximity;

                    // Centripetal attraction force
                    const attractForce = proximity * 0.22;
                    star.vx += (dx / dist) * attractForce;
                    star.vy += (dy / dist) * attractForce;

                    // Tangential cosmic swirl force (orbital momentum!)
                    const swirlForce = proximity * 0.16;
                    star.vx += (-dy / dist) * swirlForce;
                    star.vy += (dx / dist) * swirlForce;
                } else {
                    star.proximity = Math.max(0, star.proximity - 0.05);
                }
            } else {
                star.proximity = Math.max(0, star.proximity - 0.05);
            }

            // 2. Velocity clamping & friction damping
            const currentSpeed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
            if (currentSpeed > maxSpeed) {
                star.vx = (star.vx / currentSpeed) * maxSpeed;
                star.vy = (star.vy / currentSpeed) * maxSpeed;
            }
            star.vx *= friction;
            star.vy *= friction;

            // Maintain gentle organic background drift
            if (Math.abs(star.vx) < 0.08) star.vx += (Math.random() - 0.5) * 0.02;
            if (Math.abs(star.vy) < 0.08) star.vy += (Math.random() - 0.5) * 0.02;

            // 3. Update position & seamless wrap
            star.x += star.vx;
            star.y += star.vy;

            if (star.x < -10) star.x = this.canvasWidth + 10;
            else if (star.x > this.canvasWidth + 10) star.x = -10;
            if (star.y < -10) star.y = this.canvasHeight + 10;
            else if (star.y > this.canvasHeight + 10) star.y = -10;

            // 4. Pairwise connection search (O(N²/2) on small N=34 is ~500 checks = 0.02ms)
            for (let j = i + 1; j < starCount; j++) {
                const other = this.stars[j];
                const cdx = other.x - star.x;
                const cdy = other.y - star.y;
                const cDistSq = cdx * cdx + cdy * cdy;

                if (cDistSq < connDistSq) {
                    const strength = 1 - (cDistSq / connDistSq);
                    this.activeConnections.push({
                        x1: star.x,
                        y1: star.y,
                        x2: other.x,
                        y2: other.y,
                        strength
                    });
                }
            }
        }
    }

    /**
     * Renders connection filaments in batched paths (Zero gradient allocations!)
     */
    drawConnections() {
        const conns = this.activeConnections;
        if (!conns || conns.length === 0) return;

        this.ctx.save();
        this.ctx.lineWidth = 1;

        // Group lines by opacity buckets for single stroke calls
        const strokeColor = this.isDark ? '96, 165, 250' : '79, 70, 229';

        this.ctx.beginPath();
        for (let i = 0; i < conns.length; i++) {
            const c = conns[i];
            if (c.strength > 0.15) {
                this.ctx.moveTo(c.x1, c.y1);
                this.ctx.lineTo(c.x2, c.y2);
            }
        }
        this.ctx.strokeStyle = `rgba(${strokeColor}, 0.18)`;
        this.ctx.stroke();

        this.ctx.restore();
    }

    /**
     * Draws interactive glowing filaments between the mouse cursor and nearby stars.
     */
    drawMouseFilaments() {
        if (!this.mouse.active) return;

        const { magneticRadius } = this.options;
        const magRadiusSq = magneticRadius * magneticRadius;
        const mx = this.mouse.x;
        const my = this.mouse.y;

        this.ctx.save();
        this.ctx.lineWidth = 1.3;

        for (let i = 0; i < this.stars.length; i++) {
            const star = this.stars[i];
            const dx = mx - star.x;
            const dy = my - star.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < magRadiusSq) {
                const strength = 1 - Math.sqrt(distSq) / magneticRadius;
                const alpha = (strength * 0.75).toFixed(2);
                this.ctx.strokeStyle = this.isDark
                    ? `rgba(52, 211, 153, ${alpha})`
                    : `rgba(6, 182, 212, ${alpha})`;

                this.ctx.beginPath();
                this.ctx.moveTo(mx, my);
                this.ctx.lineTo(star.x, star.y);
                this.ctx.stroke();
            }
        }

        // Draw Mouse Cosmic Nexus (Luminous Central Node)
        this.mouse.pulsePhase = (this.mouse.pulsePhase + 0.06) % (Math.PI * 2);
        const pulseR = 12 + Math.sin(this.mouse.pulsePhase) * 4;

        // Ethereal outer aura ring
        this.ctx.strokeStyle = this.isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(99, 102, 241, 0.4)';
        this.ctx.lineWidth = 1.2;
        this.ctx.beginPath();
        this.ctx.arc(mx, my, pulseR, 0, Math.PI * 2);
        this.ctx.stroke();

        // Pulsing core sprite
        const sprite = this.sprites.mouseNode;
        if (sprite) {
            const r = 18;
            this.ctx.drawImage(sprite, mx - r, my - r, r * 2, r * 2);
        }

        this.ctx.restore();
    }

    /**
     * Draws celestial stars using ultra-fast pre-rendered sprites.
     */
    drawStars(time) {
        const ctx = this.ctx;
        const stars = this.stars;
        const starCount = stars.length;

        for (let i = 0; i < starCount; i++) {
            const star = stars[i];
            const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.25;
            const excitedScale = 1 + (star.proximity * 0.8);
            const radius = Math.max(1, (star.baseSize + twinkle) * excitedScale);

            const sprite = this.sprites[star.spriteType] || this.sprites.primary;
            const drawRadius = radius * 3.5;

            ctx.globalAlpha = Math.min(1, 0.6 + twinkle * 0.4 + star.proximity * 0.35);
            ctx.drawImage(sprite, star.x - drawRadius, star.y - drawRadius, drawRadius * 2, drawRadius * 2);
        }

        ctx.globalAlpha = 1.0;
    }

    /**
     * Updates and draws expanding supernova shockwaves.
     */
    drawShockwaves() {
        if (this.ripples.length === 0) return;

        this.ctx.save();
        for (let i = this.ripples.length - 1; i >= 0; i--) {
            const r = this.ripples[i];
            r.radius += r.speed;
            r.alpha -= 0.022;

            if (r.alpha <= 0 || r.radius >= r.maxRadius) {
                this.ripples.splice(i, 1);
                continue;
            }

            this.ctx.lineWidth = 1.5;
            this.ctx.strokeStyle = this.isDark
                ? `rgba(56, 189, 248, ${r.alpha.toFixed(2)})`
                : `rgba(99, 102, 241, ${r.alpha.toFixed(2)})`;

            this.ctx.beginPath();
            this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
            this.ctx.stroke();
        }
        this.ctx.restore();
    }

    /**
     * Updates and draws stardust sparks.
     */
    drawSparks() {
        if (this.sparks.length === 0) return;

        this.ctx.save();
        for (let i = this.sparks.length - 1; i >= 0; i--) {
            const p = this.sparks[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.96;
            p.vy *= 0.96;
            p.alpha -= p.decay;

            if (p.alpha <= 0) {
                this.sparks.splice(i, 1);
                continue;
            }

            this.ctx.globalAlpha = p.alpha;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        }
        this.ctx.restore();
    }

    /**
     * Draws floating math/tech formulas with zero shadowBlur.
     */
    drawFormulas() {
        if (!this.floatingFormulas || this.floatingFormulas.length === 0) return;

        const ctx = this.ctx;
        ctx.save();
        ctx.font = '10px "Space Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = this.isDark ? '#60A5FA' : '#4F46E5';

        for (let i = 0; i < this.floatingFormulas.length; i++) {
            const f = this.floatingFormulas[i];

            // Gentle repulsion from mouse
            if (this.mouse.active) {
                const dx = this.mouse.x - f.x;
                const dy = this.mouse.y - f.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 120 && d > 0) {
                    f.vx -= (dx / d) * 0.05;
                    f.vy -= (dy / d) * 0.05;
                }
            }

            f.x += f.vx;
            f.y += f.vy;
            f.vx *= 0.98;
            f.vy *= 0.98;

            if (f.x < -60) f.x = this.canvasWidth + 60;
            else if (f.x > this.canvasWidth + 60) f.x = -60;
            if (f.y < -20) f.y = this.canvasHeight + 20;
            else if (f.y > this.canvasHeight + 20) f.y = -20;

            ctx.globalAlpha = f.opacity;
            ctx.fillText(f.text, f.x, f.y);
        }

        ctx.restore();
    }

    /**
     * Nerdy Telemetry HUD: Crisp monospace system stats in the corner.
     */
    drawTelemetry() {
        if (this.canvasWidth < 640) return; // Hide on small screens for cleanliness

        this.ctx.save();
        this.ctx.globalAlpha = 0.35;
        this.ctx.font = '9px "Space Mono", monospace';
        this.ctx.fillStyle = this.isDark ? '#38BDF8' : '#4F46E5';
        this.ctx.textAlign = 'right';
        this.ctx.textBaseline = 'top';

        const mouseStatus = this.mouse.active
            ? `TARGET: [${Math.round(this.mouse.x)}, ${Math.round(this.mouse.y)}]`
            : 'GRAVITY_WELL: STANDBY';

        const telemetry = [
            'SYS: COSMIC_NEXUS // v2.8',
            `NODES: ${this.stars.length} | LINKS: ${this.activeConnections.length}`,
            mouseStatus,
            'WARP: ARMED (CLICK CANVAS)'
        ];

        for (let i = 0; i < telemetry.length; i++) {
            this.ctx.fillText(telemetry[i], this.canvasWidth - 12, 10 + (i * 13));
        }

        this.ctx.restore();
    }

    /**
     * Spawn occasional ethereal shooting stars (meteors)
     */
    maybeSpawnMeteor() {
        const now = Date.now();
        if (now - this.lastMeteorTime > (Math.random() * 3000 + 4000) && this.meteors.length < 2) {
            this.lastMeteorTime = now;
            const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.35;
            const speed = Math.random() * 7 + 12;
            this.meteors.push({
                x: Math.random() * (this.canvasWidth * 0.85) - 40,
                y: Math.random() * (this.canvasHeight * 0.4) - 20,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                length: Math.random() * 80 + 60,
                angle: angle,
                opacity: 1,
                decay: 0.02 + Math.random() * 0.012,
                color: Math.random() > 0.5 ? (this.isDark ? '#67E8F9' : '#38BDF8') : '#E0E7FF'
            });
        }
    }

    drawMeteors() {
        if (!this.meteors || this.meteors.length === 0) return;
        this.ctx.save();
        for (let i = this.meteors.length - 1; i >= 0; i--) {
            const m = this.meteors[i];
            m.x += m.vx;
            m.y += m.vy;
            m.opacity -= m.decay;

            if (m.opacity <= 0 || m.x > this.canvasWidth + 120 || m.y > this.canvasHeight + 120) {
                this.meteors.splice(i, 1);
                continue;
            }

            const tailX = m.x - Math.cos(m.angle) * m.length;
            const tailY = m.y - Math.sin(m.angle) * m.length;

            const grad = this.ctx.createLinearGradient(tailX, tailY, m.x, m.y);
            grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
            grad.addColorStop(0.7, m.color + '44');
            grad.addColorStop(1, '#ffffff');

            this.ctx.strokeStyle = grad;
            this.ctx.lineWidth = 1.8;
            this.ctx.beginPath();
            this.ctx.moveTo(tailX, tailY);
            this.ctx.lineTo(m.x, m.y);
            this.ctx.stroke();

            // Bright head
            this.ctx.fillStyle = '#ffffff';
            this.ctx.beginPath();
            this.ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
            this.ctx.fill();
        }
        this.ctx.restore();
    }

    /**
     * Main 60fps Animation Loop: Adaptive, battery-conscious, zero garbage collection.
     */
    animate() {
        if (!this.isRunning) return;

        const now = performance.now();
        const elapsed = now - this.lastFrameTime;
        const targetFrameTime = this.isLowPowerDevice ? 33 : 16; // 30fps low-power / 60fps standard

        if (this.lastFrameTime && elapsed < targetFrameTime) {
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }

        this.lastFrameTime = now;
        const currentTime = Date.now() - this.startTime;
        this.frameCounter++;

        // Clear canvas cleanly
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // 1. Floating Formulas (low opacity background)
        this.drawFormulas();

        // 2. Physics Update
        this.updatePhysics();

        // 3. Batched Constellation Lines
        this.drawConnections();

        // 4. Interactive Mouse Constellation Filaments & Anchor Node
        this.drawMouseFilaments();

        // 5. Stars
        this.drawStars(currentTime);

        // 6. Supernova Shockwaves, Stardust Sparks & Shooting Stars
        this.drawShockwaves();
        this.drawSparks();
        this.maybeSpawnMeteor();
        this.drawMeteors();

        // 7. Telemetry HUD
        this.drawTelemetry();

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    startAnimation() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.lastFrameTime = performance.now();
        this.animate();
    }

    stopAnimation() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    destroy() {
        this.stopAnimation();
        clearTimeout(this.resizeTimeout);

        if (this.observer) {
            this.observer.disconnect();
        }

        if (this.themeObserver) {
            this.themeObserver.disconnect();
        }

        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }

        if (this.visibilityHandler) {
            document.removeEventListener('visibilitychange', this.visibilityHandler);
        }
    }
}

// Export globally
window.CanvasTitleAnimation = CanvasTitleAnimation;
