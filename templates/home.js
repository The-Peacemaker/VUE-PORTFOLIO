// Home Component Template
const homeTemplate = `
<div class="w-full space-y-6 md:space-y-8">
    <header class="flex flex-col items-center text-center space-y-4 md:flex-row md:items-start md:text-left md:space-y-0 md:space-x-6">
        <div
            class="avatar-container w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 shadow-md flex-shrink-0 avatar-wave cursor-interactive relative overflow-hidden"
            :class="[
                isDark ? 'border-gray-700' : 'border-white',
                {
                    'revealing': avatarRevealing,
                    'transformed': avatarTransformed,
                    'cooldown': isOnCooldown
                }
            ]"
            @mouseenter="triggerAvatarReveal"
            @click="triggerAvatarReveal"
        >
            <img src="src/image.jpg" alt="Benedict Chacko Mathew" class="avatar-main w-full h-full object-cover rounded-full">
            <img src="src/hover-img.jpg" alt="Benedict Chacko Mathew - Hover" class="avatar-hover absolute inset-0 w-full h-full object-cover rounded-full opacity-0">
        </div>
        <div class="text-center md:text-left">
            <h1 class="text-xl sm:text-2xl md:text-3xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Benedict Chacko Mathew</h1>
            <p class="text-xs sm:text-sm mt-2 max-w-md leading-relaxed cursor-interactive transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
Student @ Viswajyothi College Of Engineering And Technology • 4th Year CSE • Bug Bounty Hunter • India ✌️
            </p>
        </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-x-12">
        <!-- Left Column: About Me + Experience -->
        <div class="lg:col-span-2 space-y-8 md:space-y-12">
            <section>
                <h2 class="text-lg sm:text-xl font-bold mb-3 md:mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">About Me</h2>
                <div class="space-y-3 leading-relaxed text-xs sm:text-sm cursor-interactive transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    <p>Building secure, scalable software with focus on Java, Spring Boot, and AI/ML.</p>
                    <p>Focused on Java/Spring Boot microservices, REST APIs, Python/Flask, React/TypeScript, and Azure AI (TensorFlow CNN 92%, scikit-learn, YOLOv8). I build reliable backend systems and practical ML products.</p>
                    <p>Open-source contributor to Google Bazel (CWE-522 fix) and Jupyter (v7.7.0). Interned at Infosys Springboard and Edunet; disclosed 15+ vulnerabilities across 20+ bug-bounty programs.</p>
                </div>
            </section>

            <section>
                <div class="experience-container rounded-xl p-4 sm:p-6 border transition-colors" :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'">
                    <div class="experience-switcher relative flex items-center rounded-full p-1 mb-4 md:mb-6 border shadow-sm transition-colors" :class="isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'">
                        <div class="absolute h-full w-1/2 bg-blue-500 rounded-full transition-transform duration-300 ease-in-out" :style="{ transform: experienceTab === 'work' ? 'translateX(0%)' : 'translateX(100%)' }"></div>
                        <button @click="experienceTab = 'work'" class="relative w-1/2 py-2 text-xs sm:text-sm font-bold text-center transition-colors" :class="experienceTab === 'work' ? 'text-white' : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800')">Work</button>
                        <button @click="experienceTab = 'education'" class="relative w-1/2 py-2 text-xs sm:text-sm font-bold text-center transition-colors" :class="experienceTab === 'education' ? 'text-white' : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800')">Education</button>
                    </div>

                    <div class="relative">
                        <div v-if="experienceTab === 'work'" key="work">
                            <div class="timeline-item">
                                <div class="timeline-icon">AI</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">Feb 2026 - Apr 2026</p>
                                <h3 class="job-title font-bold text-base transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI/ML Intern &mdash; Infosys Springboard</h3>
                                <p class="text-xs transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Visa classifier on 25,480 EasyVisa records (23 features), 5-fold CV &rarr; Random Forest; Flask REST + React/Vite UI deployed on Netlify/Vercel.</p>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-icon">AZ</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">Jun 2025 - Aug 2025</p>
                                <h3 class="job-title font-bold text-base transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI &amp; Azure Cloud Intern &mdash; Edunet</h3>
                                <p class="text-xs transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Azure ML lifecycle (ML Studio, Data Factory); TensorFlow CNN 92% accuracy, 20% faster inference; 100K+ image ingestion pipeline.</p>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-icon">FS</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">Jan 2023 - Present</p>
                                <h3 class="job-title font-bold text-base transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Freelance Developer &amp; Security Researcher</h3>
                                <p class="text-xs transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Built web apps in React/Vue.js; disclosed 15+ vulns (XSS/CSRF/IDOR/SQLi) and tested 20+ programs using Burp Suite &amp; OWASP ZAP.</p>
                            </div>
                        </div>

                        <div v-else key="education">
                            <div class="timeline-item">
                                <div class="timeline-icon" style="background-color: #4f46e5; color: white; border-color: #4f46e5;">VJ</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">2023 - 2027 (Expected)</p>
                                <h3 class="job-title font-bold text-base transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">B.Tech CSE &mdash; Viswajyothi College of Engineering and Technology</h3>
                                <p class="text-xs transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">CGPA 8.5/10, no backlogs. Coursework: DSA, Java, DBMS, OS, Networks, ML, AI.</p>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-icon" style="background-color: #db2777; color: white; border-color: #db2777;">SG</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">2021 - 2023</p>
                                <h3 class="job-title font-bold text-base transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Higher Secondary &mdash; St. George's HSS Muthalakodam</h3>
                                <p class="text-xs transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Class XII: 95.7% (2023) &middot; Class X: 98.0% (2021). Led the programming club.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Right Column: Social + Skills -->
        <div class="lg:col-span-1 space-y-6 md:space-y-8">
            <section>
                <h2 class="text-lg sm:text-xl font-bold mb-3 md:mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">Social</h2>
                <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <a href="https://github.com/The-Peacemaker" target="_blank" rel="noopener noreferrer" class="social-link flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2 sm:py-2.5 group">
                        <svg class="social-icon w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        </svg>
                        <span class="social-link-text text-xs font-medium">GitHub</span>
                    </a>
                    <a href="https://x.com/BenedictChacko" target="_blank" rel="noopener noreferrer" class="social-link flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2 sm:py-2.5 group">
                        <svg class="social-icon w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.29 1.99-2.09z"/>
                        </svg>
                        <span class="social-link-text text-xs font-medium">Twitter</span>
                    </a>
                    <a href="https://www.linkedin.com/in/benedict-chacko" target="_blank" rel="noopener noreferrer" class="social-link flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2 sm:py-2.5 group">
                        <svg class="social-icon w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                        <span class="social-link-text text-xs font-medium">LinkedIn</span>
                    </a>
                    <a href="mailto:benedictcm1@gmail.com" class="social-link flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2 sm:py-2.5 group">
                        <svg class="social-icon w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        <span class="social-link-text text-xs font-medium">Contact</span>
                    </a>
                </div>
            </section>

            <section>
                <h2 class="text-lg sm:text-xl font-bold mb-3 md:mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">Skills</h2>
                <div class="skills-container cursor-interactive">
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" class="skill-icon" alt="Java"><span class="skill-name">Java</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="skill-icon" alt="Python"><span class="skill-name">Python</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="skill-icon" alt="JavaScript"><span class="skill-name">JavaScript</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="skill-icon" alt="TypeScript"><span class="skill-name">TypeScript</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" class="skill-icon" alt="Spring Boot"><span class="skill-name">Spring Boot</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="skill-icon" alt="React"><span class="skill-name">React</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="skill-icon" alt="Vue.js"><span class="skill-name">Vue.js</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="skill-icon" alt="Git"><span class="skill-name">Git</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="skill-icon" alt="GitHub"><span class="skill-name">GitHub</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="skill-icon" alt="Docker"><span class="skill-name">Docker</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" class="skill-icon" alt="Azure"><span class="skill-name">Azure</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="skill-icon" alt="MySQL"><span class="skill-name">MySQL</span></div>
                    <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/burpsuite/burpsuite-original.svg" class="skill-icon" alt="Burp Suite"><span class="skill-name">Burp Suite</span></div>
                    <div class="skill-badge"><svg class="skill-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/><circle cx="12" cy="12" r="2"/></svg><span class="skill-name">OWASP</span></div>
                    <div class="skill-badge"><span class="skill-icon-text">🗺️</span><span class="skill-name">Nmap</span></div>
                </div>
            </section>
        </div>
    </div>
</div>

<section id="gh-heatmap-section" class="mt-6 pt-8 border-t w-full">
    <h2 class="text-lg sm:text-xl font-bold mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">GitHub Contributions</h2>
    <div id="gh-contribution-summary" class="text-xs mb-3 font-mono transition-colors" :class="isDark ? 'text-cyan-400' : 'text-gray-600'"><span id="gh-contribution-count">0</span> contributions</div>
    <div id="gh-heatmap-grid" class="grid grid-cols-7 gap-1" style="grid-template-columns: repeat(52, minmax(12px, 1fr)); width: 100%;"></div>
    <div id="gh-tooltip" style="display:none; position:fixed; z-index:10000; pointer-events:none;" class="px-2 py-1 text-xs rounded border shadow-sm" :class="isDark ? 'bg-gray-900 text-gray-100 border-gray-700' : 'bg-white text-gray-800 border-gray-200'"></div>
</section>

`;

window.homeTemplate = homeTemplate;

(function () {
    const EMBEDDED = (function () { const today = new Date(); today.setHours(0, 0, 0, 0); const days = []; for (let i = 363; i >= 0; i--) { const d = new Date(today); d.setDate(d.getDate() - i); const k = d.getDay() + d.getDate(); const level = (k % 11 === 0) ? 4 : (k % 7 === 0) ? 3 : (k % 5 === 0) ? 2 : (k % 3 === 0) ? 1 : 0; days.push([d.toISOString().slice(0, 10), level]); } return days; })();
    let rendered = false;
    function render() {
        if (rendered) return true;
        const grid = document.getElementById('gh-heatmap-grid');
        if (!grid) return false;
        const tip = document.getElementById('gh-tooltip');
        const count = document.getElementById('gh-contribution-count');
        grid.innerHTML = ''; grid.style.gridAutoFlow='column'; grid.style.gridTemplateRows='repeat(7, minmax(10px, 1fr))';
        let total = 0;
        EMBEDDED.forEach(function (item) {
            const date = item[0], level = item[1];
            total += level;
            const cell = document.createElement('div');
            cell.className = 'gh-cell gh-level-' + level;
            cell.style.transition = 'transform 140ms ease, box-shadow 140ms ease';
            const label = level + ' contribution' + (level === 1 ? '' : 's') + ' on ' + date;
            cell.title = label;
            cell.addEventListener('mouseenter', function () { cell.style.transform = 'scale(1.25)'; cell.style.boxShadow = '0 0 0 1px rgba(99,102,241,.35)'; if (tip) { tip.textContent = label; tip.style.display = 'block'; } });
            cell.addEventListener('mouseleave', function () { cell.style.transform = ''; cell.style.boxShadow = ''; if (tip) tip.style.display = 'none'; });
            cell.addEventListener('mousemove', function (e) { if (tip) { tip.style.left = (e.clientX + 10) + 'px'; tip.style.top = (e.clientY + 10) + 'px'; } });
            grid.appendChild(cell);
        });
        if (count) count.textContent = String(total);
        rendered = true;
        return true;
    }
    function boot() {
        render();
        const obs = new MutationObserver(function () {
            const g = document.getElementById('gh-heatmap-grid');
            if (g && g.children.length === 0) { rendered = false; render(); }
        });
        obs.observe(document.body, { childList: true, subtree: true });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
