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

<section id="gh-heatmap-section" class="mt-8 pt-8 border-t w-full cursor-interactive transition-colors" :class="isDark ? 'border-gray-700/60' : 'border-gray-200'">
    <div class="mb-4 pb-2 border-b" :class="isDark ? 'border-gray-700/60' : 'border-gray-200'">
        <h2 class="text-lg sm:text-xl font-bold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">GitHub Contributions</h2>
        <div id="gh-contribution-summary" class="text-xs mt-1.5 font-mono transition-colors min-h-[20px]" :class="isDark ? 'text-cyan-400' : 'text-gray-600'">
            <span id="gh-contribution-count" class="font-bold text-sm">944</span> contributions in the last year
        </div>
    </div>

    <!-- Heatmap Card wrapper with Month labels and Legend -->
    <div class="gh-heatmap-wrapper rounded-xl p-3 sm:p-4 border overflow-x-auto transition-colors"
         :class="isDark ? 'bg-gray-850/60 border-gray-700/60' : 'bg-gray-50/70 border-gray-200/80'">
        <div id="gh-months-header" class="flex text-[10px] font-mono text-gray-400 mb-2 pl-7 select-none min-w-[680px]"></div>
        <div class="flex items-start gap-2 min-w-[680px]">
            <div class="gh-days-legend flex flex-col justify-between text-[9px] font-mono text-gray-400 select-none py-1 h-[88px] w-5">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
            </div>
            <div id="gh-heatmap-grid" class="flex-1 grid gap-[3px]" style="grid-auto-flow: column; grid-template-rows: repeat(7, 10px);"></div>
        </div>

        <div class="flex items-center justify-between text-[11px] font-mono mt-3 pt-2.5 border-t select-none"
             :class="isDark ? 'border-gray-700/40 text-gray-400' : 'border-gray-200/60 text-gray-500'">
            <a href="https://github.com/The-Peacemaker" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-[11px]">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                <span>github.com/The-Peacemaker</span>
                <span class="text-xs">&rarr;</span>
            </a>
            <div class="flex items-center gap-1.5">
                <span class="text-[10px]">Less</span>
                <span class="gh-cell gh-level-0 inline-block !w-[10px] !h-[10px]"></span>
                <span class="gh-cell gh-level-1 inline-block !w-[10px] !h-[10px]"></span>
                <span class="gh-cell gh-level-2 inline-block !w-[10px] !h-[10px]"></span>
                <span class="gh-cell gh-level-3 inline-block !w-[10px] !h-[10px]"></span>
                <span class="gh-cell gh-level-4 inline-block !w-[10px] !h-[10px]"></span>
                <span class="text-[10px]">More</span>
            </div>
        </div>
    </div>
</section>
`;

window.homeTemplate = homeTemplate;

// ========================================================
// Dynamic GitHub Heatmap System - Live Sync + Fast Cache
// ========================================================
(function() {
    const GITHUB_USERNAME = 'The-Peacemaker';
    const GITHUB_PROFILE_URL = 'https://github.com/' + GITHUB_USERNAME;
    const API_URL = 'https://github-contributions-api.jogruber.de/v4/' + GITHUB_USERNAME + '?y=last';
    const CACHE_KEY = 'gh_contributions_' + GITHUB_USERNAME;
    const CACHE_TIME_KEY = 'gh_contributions_time_' + GITHUB_USERNAME;
    const CACHE_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

    // Real fallback data for instant zero-latency rendering
    const FALLBACK_CONTRIBUTIONS = [["2025-11-09",0,0],["2025-11-10",0,0],["2025-11-11",0,0],["2025-11-12",0,0],["2025-11-13",0,0],["2025-11-14",0,0],["2025-11-15",0,0],["2025-11-16",0,0],["2025-11-17",0,0],["2025-11-18",0,0],["2025-11-19",0,0],["2025-11-20",0,0],["2025-11-21",0,0],["2025-11-22",0,0],["2025-11-23",0,0],["2025-11-24",0,0],["2025-11-25",0,0],["2025-11-26",3,1],["2025-11-27",0,0],["2025-11-28",0,0],["2025-11-29",0,0],["2025-11-30",1,1],["2025-12-01",0,0],["2025-12-02",0,0],["2025-12-03",0,0],["2025-12-04",0,0],["2025-12-05",0,0],["2025-12-06",0,0],["2025-12-07",0,0],["2025-12-08",0,0],["2025-12-09",0,0],["2025-12-10",0,0],["2025-12-11",0,0],["2025-12-12",0,0],["2025-12-13",0,0],["2025-12-14",0,0],["2025-12-15",2,1],["2025-12-16",13,2],["2025-12-17",0,0],["2025-12-18",0,0],["2025-12-19",0,0],["2025-12-20",0,0],["2025-12-21",0,0],["2025-12-22",0,0],["2025-12-23",0,0],["2025-12-24",0,0],["2025-12-25",0,0],["2025-12-26",0,0],["2025-12-27",6,1],["2025-12-28",0,0],["2025-12-29",0,0],["2025-12-30",0,0],["2025-12-31",0,0],["2026-01-01",0,0],["2026-01-02",0,0],["2026-01-03",0,0],["2026-01-04",0,0],["2026-01-05",0,0],["2026-01-06",0,0],["2026-01-07",0,0],["2026-01-08",0,0],["2026-01-09",0,0],["2026-01-10",0,0],["2026-01-11",0,0],["2026-01-12",0,0],["2026-01-13",0,0],["2026-01-14",0,0],["2026-01-15",0,0],["2026-01-16",0,0],["2026-01-17",0,0],["2026-01-18",1,1],["2026-01-19",2,1],["2026-01-20",0,0],["2026-01-21",0,0],["2026-01-22",0,0],["2026-01-23",0,0],["2026-01-24",0,0],["2026-01-25",0,0],["2026-01-26",0,0],["2026-01-27",4,1],["2026-01-28",0,0],["2026-01-29",1,1],["2026-01-30",0,0],["2026-01-31",0,0],["2026-02-01",0,0],["2026-02-02",0,0],["2026-02-03",0,0],["2026-02-04",0,0],["2026-02-05",0,0],["2026-02-06",0,0],["2026-02-07",3,1],["2026-02-08",7,1],["2026-02-09",0,0],["2026-02-10",0,0],["2026-02-11",0,0],["2026-02-12",3,1],["2026-02-13",0,0],["2026-02-14",0,0],["2026-02-15",0,0],["2026-02-16",6,1],["2026-02-17",0,0],["2026-02-18",0,0],["2026-02-19",2,1],["2026-02-20",5,1],["2026-02-21",0,0],["2026-02-22",1,1],["2026-02-23",0,0],["2026-02-24",0,0],["2026-02-25",0,0],["2026-02-26",0,0],["2026-02-27",0,0],["2026-02-28",3,1],["2026-03-01",1,1],["2026-03-02",0,0],["2026-03-03",2,1],["2026-03-04",0,0],["2026-03-05",0,0],["2026-03-06",0,0],["2026-03-07",1,1],["2026-03-08",0,0],["2026-03-09",7,1],["2026-03-10",3,1],["2026-03-11",1,1],["2026-03-12",0,0],["2026-03-13",0,0],["2026-03-14",0,0],["2026-03-15",3,1],["2026-03-16",2,1],["2026-03-17",0,0],["2026-03-18",0,0],["2026-03-19",0,0],["2026-03-20",0,0],["2026-03-21",0,0],["2026-03-22",0,0],["2026-03-23",0,0],["2026-03-24",3,1],["2026-03-25",2,1],["2026-03-26",0,0],["2026-03-27",3,1],["2026-03-28",0,0],["2026-03-29",12,2],["2026-03-30",0,0],["2026-03-31",0,0],["2026-04-01",0,0],["2026-04-02",2,1],["2026-04-03",0,0],["2026-04-04",0,0],["2026-04-05",0,0],["2026-04-06",0,0],["2026-04-07",0,0],["2026-04-08",1,1],["2026-04-09",0,0],["2026-04-10",0,0],["2026-04-11",0,0],["2026-04-12",11,2],["2026-04-13",0,0],["2026-04-14",6,1],["2026-04-15",0,0],["2026-04-16",21,3],["2026-04-17",0,0],["2026-04-18",0,0],["2026-04-19",1,1],["2026-04-20",0,0],["2026-04-21",0,0],["2026-04-22",1,1],["2026-04-23",0,0],["2026-04-24",0,0],["2026-04-25",8,1],["2026-04-26",1,1],["2026-04-27",0,0],["2026-04-28",0,0],["2026-04-29",0,0],["2026-04-30",6,1],["2026-05-01",0,0],["2026-05-02",0,0],["2026-05-03",0,0],["2026-05-04",0,0],["2026-05-05",0,0],["2026-05-06",14,2],["2026-05-07",0,0],["2026-05-08",20,3],["2026-05-09",0,0],["2026-05-10",0,0],["2026-05-11",0,0],["2026-05-12",0,0],["2026-05-13",0,0],["2026-05-14",13,2],["2026-05-15",0,0],["2026-05-16",0,0],["2026-05-17",0,0],["2026-05-18",0,0],["2026-05-19",4,1],["2026-05-20",0,0],["2026-05-21",0,0],["2026-05-22",0,0],["2026-05-23",0,0],["2026-05-24",0,0],["2026-05-25",0,0],["2026-05-26",0,0],["2026-05-27",1,1],["2026-05-28",0,0],["2026-05-29",2,1],["2026-05-30",2,1],["2026-05-31",2,1],["2026-06-01",2,1],["2026-06-02",2,1],["2026-06-03",2,1],["2026-06-04",4,1],["2026-06-05",2,1],["2026-06-06",2,1],["2026-06-07",1,1],["2026-06-08",2,1],["2026-06-09",3,1],["2026-06-10",3,1],["2026-06-11",13,2],["2026-06-12",21,3],["2026-06-13",13,2],["2026-06-14",31,4],["2026-06-15",9,2],["2026-06-16",9,2],["2026-06-17",8,1],["2026-06-18",13,2],["2026-06-19",7,1],["2026-06-20",27,4],["2026-06-21",8,1],["2026-06-22",8,1],["2026-06-23",20,3],["2026-06-24",12,2],["2026-06-25",15,2],["2026-06-26",15,2],["2026-06-27",34,4],["2026-06-28",7,1],["2026-06-29",10,2],["2026-06-30",3,1],["2026-07-01",2,1],["2026-07-02",3,1],["2026-07-03",3,1],["2026-07-04",4,1],["2026-07-05",1,1],["2026-07-06",0,0],["2026-07-07",0,0],["2026-07-08",1,1],["2026-07-09",0,0],["2026-07-10",2,1],["2026-07-11",12,2],["2026-07-12",7,1],["2026-07-13",12,2],["2026-07-14",3,1],["2026-07-15",2,1],["2026-07-16",2,1],["2026-07-17",2,1],["2026-07-18",4,1],["2026-07-19",4,1],["2026-07-20",7,1],["2026-07-21",6,1],["2026-07-22",4,1],["2026-07-23",8,1],["2026-07-24",0,0],["2026-07-25",1,1],["2026-07-26",6,1],["2026-07-27",0,0],["2026-07-28",4,1],["2026-07-29",2,1],["2026-07-30",0,0],["2026-07-31",5,1],["2026-08-01",3,1],["2026-08-02",2,1],["2026-08-03",5,1],["2026-08-04",11,2],["2026-08-05",5,1],["2026-08-06",4,1],["2026-08-07",4,1],["2026-08-08",4,1],["2026-08-09",0,0],["2026-08-10",13,2],["2026-08-11",3,1],["2026-08-12",22,3],["2026-08-13",2,1],["2026-08-14",3,1],["2026-08-15",3,1],["2026-08-16",3,1],["2026-08-17",3,1],["2026-08-18",2,1],["2026-08-19",3,1],["2026-08-20",2,1],["2026-08-21",3,1],["2026-08-22",2,1],["2026-08-23",3,1],["2026-08-24",3,1],["2026-08-25",4,1],["2026-08-26",6,1],["2026-08-27",0,0],["2026-08-28",0,0],["2026-08-29",0,0],["2026-08-30",10,2],["2026-08-31",1,1],["2026-09-01",1,1],["2026-09-02",0,0],["2026-09-03",0,0],["2026-09-04",2,1],["2026-09-05",4,1],["2026-09-06",12,2],["2026-09-07",1,1],["2026-09-08",4,1],["2026-09-09",5,1],["2026-09-10",3,1],["2026-09-11",0,0],["2026-09-12",0,0],["2026-09-13",4,1],["2026-09-14",1,1],["2026-09-15",11,2],["2026-09-16",3,1],["2026-09-17",0,0],["2026-09-18",0,0],["2026-09-19",8,1],["2026-09-20",0,0],["2026-09-21",13,2],["2026-09-22",2,1],["2026-09-23",1,1],["2026-09-24",0,0],["2026-09-25",0,0],["2026-09-26",0,0],["2026-09-27",0,0],["2026-09-28",0,0],["2026-09-29",0,0],["2026-09-30",0,0],["2026-10-01",0,0],["2026-10-02",0,0],["2026-10-03",0,0],["2026-10-04",1,1],["2026-10-05",0,0],["2026-10-06",0,0],["2026-10-07",5,1],["2026-10-08",5,1],["2026-10-09",11,2],["2026-10-10",5,1],["2026-10-11",4,1],["2026-10-12",1,1],["2026-10-13",0,0],["2026-10-14",0,0],["2026-10-15",0,0],["2026-10-16",1,1],["2026-10-17",0,0],["2026-10-18",5,1],["2026-10-19",14,2],["2026-10-20",1,1],["2026-10-21",4,1],["2026-10-22",11,2],["2026-10-23",1,1],["2026-10-24",8,1],["2026-10-25",1,1],["2026-10-26",0,0],["2026-10-27",7,1],["2026-10-28",3,1],["2026-10-29",1,1],["2026-10-30",3,1],["2026-10-31",0,0],["2026-11-01",0,0],["2026-11-02",0,0],["2026-11-03",0,0],["2026-11-04",2,1],["2026-11-05",4,1],["2026-11-06",4,1],["2026-11-07",2,1],["2026-11-08",0,0]];

    let isFetching = false;
    let activeData = null;

    function getCachedOrFallbackData() {
        try {
            const cachedStr = localStorage.getItem(CACHE_KEY);
            if (cachedStr) {
                const parsed = JSON.parse(cachedStr);
                if (parsed && Array.isArray(parsed.contributions) && parsed.contributions.length > 0) {
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('Error reading cached GitHub contributions:', e);
        }

        // Return structured fallback
        let total = 0;
        const contributions = FALLBACK_CONTRIBUTIONS.map(function(item) {
            total += item[1];
            return { date: item[0], count: item[1], level: item[2] };
        });

        return {
            total: { lastYear: total },
            contributions: contributions
        };
    }

    function isCacheStale() {
        try {
            const cachedStr = localStorage.getItem(CACHE_KEY);
            if (!cachedStr) return true;
            const parsed = JSON.parse(cachedStr);
            if (!parsed || !Array.isArray(parsed.contributions) || parsed.contributions.length === 0) return true;
            const lastDate = parsed.contributions[parsed.contributions.length - 1].date;
            const now = new Date();
            const todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
            return lastDate < todayStr;
        } catch (e) {
            return true;
        }
    }

    function formatDate(dateStr) {
        try {
            const parts = dateStr.split('-');
            const year = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const day = parseInt(parts[2], 10);
            const d = new Date(year, month, day);
            return d.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        } catch (e) {
            return dateStr;
        }
    }

    function renderMonthHeader(contributions) {
        const headerEl = document.getElementById('gh-months-header');
        if (!headerEl || !contributions || contributions.length === 0) return;

        headerEl.innerHTML = '';
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let lastMonth = -1;

        // Group into weeks (7 days per column)
        const weekCount = Math.ceil(contributions.length / 7);
        const colWidthPercent = (100 / weekCount);

        for (let w = 0; w < weekCount; w++) {
            const dayIdx = w * 7;
            if (dayIdx >= contributions.length) break;
            const dateStr = contributions[dayIdx].date;
            const monthIdx = parseInt(dateStr.split('-')[1], 10) - 1;

            if (monthIdx !== lastMonth && (w === 0 || w - lastMonth >= 3)) {
                const span = document.createElement('span');
                span.textContent = months[monthIdx];
                span.style.flex = '1';
                span.style.minWidth = '30px';
                headerEl.appendChild(span);
                lastMonth = monthIdx;
            }
        }
    }

    function renderHeatmap(data) {
        const grid = document.getElementById('gh-heatmap-grid');
        if (!grid) return false;

        const summaryEl = document.getElementById('gh-contribution-summary');
        const isDark = document.body.classList.contains('dark-theme');

        const contributions = data.contributions;
        const total = (data.total && data.total.lastYear) ? data.total.lastYear : contributions.reduce((s, c) => s + c.count, 0);

        const defaultSummaryHTML = '<span id="gh-contribution-count" class="font-bold text-sm">' + Number(total).toLocaleString() + '</span> contributions in the last year';

        if (summaryEl) {
            summaryEl.innerHTML = defaultSummaryHTML;
        }

        renderMonthHeader(contributions);

        grid.innerHTML = '';
        const frag = document.createDocumentFragment();

        contributions.forEach(function(item) {
            const cell = document.createElement('a');
            cell.href = GITHUB_PROFILE_URL;
            cell.target = '_blank';
            cell.rel = 'noopener noreferrer';
            cell.className = 'gh-cell gh-level-' + item.level;
            cell.setAttribute('data-date', item.date);
            cell.setAttribute('data-count', item.count);

            const countText = item.count === 0 ? 'No contributions' : item.count + (item.count === 1 ? ' contribution' : ' contributions');
            const dateFormatted = formatDate(item.date);

            cell.addEventListener('mouseenter', function() {
                // Instantly and cleanly update the summary line under the title!
                if (summaryEl) {
                    const countHighlight = item.count > 0
                        ? '<span class="' + (isDark ? 'text-cyan-300' : 'text-blue-600') + ' font-bold text-sm">' + countText + '</span>'
                        : '<span class="' + (isDark ? 'text-gray-400' : 'text-gray-500') + ' font-bold text-sm">0 contributions</span>';
                    summaryEl.innerHTML = countHighlight + ' on <span class="' + (isDark ? 'text-gray-200' : 'text-gray-900') + ' font-medium">' + dateFormatted + '</span>';
                }
            });

            frag.appendChild(cell);
        });

        // Reset summary text back to total when mouse leaves the heatmap grid
        grid.addEventListener('mouseleave', function() {
            if (summaryEl) {
                summaryEl.innerHTML = defaultSummaryHTML;
            }
        });

        grid.appendChild(frag);
        return true;
    }

    async function syncLiveData() {
        if (isFetching) return;
        const cacheTime = localStorage.getItem(CACHE_TIME_KEY);
        const now = Date.now();

        // If cached recently within 2 hours, don't spam network
        const withinTtl = cacheTime && (now - parseInt(cacheTime, 10) < CACHE_TTL_MS);

        // Also refetch when cached data predates today (stale heatmap after new commits)
        const cacheValid = withinTtl && !isCacheStale();

        if (cacheValid) {
            return;
        }

        isFetching = true;
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const liveData = await res.json();

            if (liveData && liveData.contributions && liveData.contributions.length > 0) {
                activeData = liveData;
                localStorage.setItem(CACHE_KEY, JSON.stringify(liveData));
                localStorage.setItem(CACHE_TIME_KEY, String(now));

                // Re-render if grid is currently in DOM
                renderHeatmap(liveData);


            }
        } catch (err) {
            console.warn('Live GitHub sync check failed; using cached/embedded data:', err);
        } finally {
            isFetching = false;
        }
    }

    function initHeatmap() {
        if (!activeData) {
            activeData = getCachedOrFallbackData();
        }
        renderHeatmap(activeData);
        syncLiveData();
    }

    // Expose globally for Vue component mounting & tab switches
    window.renderGitHubHeatmap = initHeatmap;

    // Boot on DOM ready and observe DOM for tab transitions
    function boot() {
        initHeatmap();

        // MutationObserver to safely re-render when switching back to home tab
        const observer = new MutationObserver(function() {
            const grid = document.getElementById('gh-heatmap-grid');
            if (grid && grid.children.length === 0) {
                initHeatmap();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
