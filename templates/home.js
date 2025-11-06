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
                Student @ Viswajyothi College Of Engineering And Technology • 3rd Year CSE • Bug Bounty Hunter • India <span class="emoji-wave inline-block">✌️</span>
            </p>
        </div>
    </header>
    
    <div class="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 lg:gap-x-12">
        <div class="lg:col-span-2 space-y-8 md:space-y-12">
            <section>
                <h2 class="text-lg sm:text-xl font-bold mb-3 md:mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">About Me</h2>
                <div class="space-y-3 md:space-y-4 leading-relaxed text-xs sm:text-sm cursor-interactive transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    <p>I'm a 20-year-old engineering student pursuing a BTech degree in Computer Science and Engineering at Viswajyothi College Of Engineering And Technology, Vazhakulam, Kerala, India.</p>
                    <p>As a passionate developer and cybersecurity enthusiast, I specialize in web development, mobile app development, and ethical hacking. I'm constantly exploring cutting-edge technologies and pushing the boundaries of secure software development.</p>
                    <p>My technical expertise spans across Python, JavaScript, React Native, Vue.js, and various cybersecurity tools including Burp Suite, Metasploit, and Nmap. I enjoy the thrill of discovering vulnerabilities and contributing to a safer digital ecosystem.</p>
                </div>
            </section>

            <!-- Experience Section -->
            <section>
                <div class="experience-container rounded-xl p-4 sm:p-6 border transition-colors" :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'">
                    <!-- Custom Switcher -->
                    <div class="experience-switcher relative flex items-center rounded-full p-1 mb-4 md:mb-6 border shadow-sm transition-colors" :class="isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'">
                        <div class="absolute h-full w-1/2 bg-blue-500 rounded-full transition-transform duration-300 ease-in-out"
                             :style="{ transform: experienceTab === 'work' ? 'translateX(0%)' : 'translateX(100%)' }">
                        </div>
                        <button @click="experienceTab = 'work'" class="relative w-1/2 py-2 text-xs sm:text-sm font-bold text-center transition-colors" :class="experienceTab === 'work' ? 'text-white' : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800')">Work</button>
                        <button @click="experienceTab = 'education'" class="relative w-1/2 py-2 text-xs sm:text-sm font-bold text-center transition-colors" :class="experienceTab === 'education' ? 'text-white' : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800')">Education</button>
                    </div>

                    <!-- Timeline Content -->
                    <div class="relative">
                        <div v-if="experienceTab === 'work'" key="work">
                            <div class="timeline-item">
                                <div class="timeline-icon">FS</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">Jan 2023 - Present</p>
                                <h3 class="job-title font-bold text-base sm:text-lg transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Freelance Security Researcher</h3>
                                <p class="company-name text-xs sm:text-sm mb-2 md:mb-3 transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Remote • Independent</p>
                                <ul class="text-xs sm:text-sm space-y-1.5 md:space-y-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                                    <li class="achievement-item">Identified and reported 15+ security vulnerabilities (XSS, CSRF, IDOR) across various platforms</li>
                                    <li class="achievement-item">Contributed to securing web applications for 10+ small to medium-sized businesses</li>
                                    <li class="achievement-item">Specialized in OWASP Top 10 vulnerability assessment and penetration testing</li>
                                </ul>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-icon">ML</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">Jun 2025 - Jul 2025</p>
                                <h3 class="job-title font-bold text-base sm:text-lg transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI/ML Research Intern</h3>
                                <p class="company-name text-xs sm:text-sm mb-2 md:mb-3 transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Techmaghi • On Site</p>
                                <ul class="text-xs sm:text-sm space-y-1.5 md:space-y-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                                    <li class="achievement-item">Developed machine learning models for predictive analytics using Python and TensorFlow</li>
                                    <li class="achievement-item">Implemented data preprocessing pipelines and feature engineering techniques</li>
                                    <li class="achievement-item">Improved model accuracy through hyperparameter optimization and ensemble methods</li>
                                </ul>
                            </div>
                        </div>

                        <div v-else key="education">
                            <div class="timeline-item">
                                <div class="timeline-icon" style="background-color: #4f46e5; color: white; border-color: #4f46e5;">VJ</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">2023 - 2027 (Expected)</p>
                                <h3 class="job-title font-bold text-base sm:text-lg transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">B.Tech Computer Science & Engineering</h3>
                                <p class="company-name text-xs sm:text-sm mb-2 md:mb-3 transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Viswajyothi College Of Engineering And Technology</p>
                                <ul class="text-xs sm:text-sm space-y-1.5 md:space-y-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                                    <li class="achievement-item">Focusing on Software Development and Cybersecurity specialization tracks</li>
                                    <li class="achievement-item">Active member of the college's coding and cybersecurity club</li>
                                    <li class="achievement-item">Participated in Several CTF competitions and hackathons</li>
                                </ul>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-icon" style="background-color: #db2777; color: white; border-color: #db2777;">SG</div>
                                <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">2021 - 2023</p>
                                <h3 class="job-title font-bold text-base sm:text-lg transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Higher Secondary Education</h3>
                                <p class="company-name text-xs sm:text-sm mb-2 md:mb-3 transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">St. George's HSS Muthalakodam • Computer Science</p>
                                 <ul class="text-xs sm:text-sm space-y-1.5 md:space-y-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                                    <li class="achievement-item">Graduated with 95% in Computer Science and Mathematics</li>
                                    <li class="achievement-item">Led the school's programming club and organized coding workshops</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <div class="space-y-6 md:space-y-8">
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
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="skill-icon" alt="Python">
                        <span class="skill-name">Python</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="skill-icon" alt="JavaScript">
                        <span class="skill-name">JavaScript</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="skill-icon" alt="HTML5">
                        <span class="skill-name">HTML5</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="skill-icon" alt="CSS3">
                        <span class="skill-name">CSS3</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="skill-icon" alt="Vue.js">
                        <span class="skill-name">Vue.js</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="skill-icon" alt="React">
                        <span class="skill-name">React</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="skill-icon" alt="Git">
                        <span class="skill-name">Git</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="skill-icon" alt="SQL">
                        <span class="skill-name">SQL</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="skill-icon" alt="VS Code">
                        <span class="skill-name">VS Code</span>
                    </div>
                    <div class="skill-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" class="skill-icon" alt="Figma">
                        <span class="skill-name">Figma</span>
                    </div>
                    <div class="skill-badge">
                        <svg class="skill-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            <circle cx="12" cy="12" r="2"/>
                        </svg>
                        <span class="skill-name">OWASP</span>
                    </div>
                    <div class="skill-badge">
                        <svg class="skill-icon" viewBox="0 0 32 32" fill="none">
                          <defs>
                            <linearGradient id="burpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
                              <stop offset="100%" style="stop-color:#e55527;stop-opacity:1" />
                            </linearGradient>
                          </defs>
                          <circle cx="16" cy="16" r="14" fill="url(#burpGradient)" stroke="#d14420" stroke-width="1.5"/>
                          <rect x="10" y="11" width="12" height="10" rx="2" fill="white" opacity="0.95"/>
                          <rect x="12" y="13" width="8" height="2" fill="#ff6b35"/>
                          <rect x="12" y="16" width="6" height="1.5" fill="#ff6b35"/>
                          <rect x="12" y="18.5" width="4" height="1.5" fill="#ff6b35"/>
                          <circle cx="19" cy="14" r="1" fill="#ff6b35"/>
                        </svg>
                        <span class="skill-name">Burp Suite</span>
                    </div>
                    <div class="skill-badge">
                        <span class="skill-icon-text">⚡</span>
                        <span class="skill-name">Metasploit</span>
                    </div>
                    <div class="skill-badge">
                        <svg class="skill-icon" viewBox="0 0 32 32" fill="none">
                          <defs>
                            <linearGradient id="nmapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style="stop-color:#4a90e2;stop-opacity:1" />
                              <stop offset="100%" style="stop-color:#2c5aa0;stop-opacity:1" />
                            </linearGradient>
                          </defs>
                          <circle cx="16" cy="16" r="14" fill="url(#nmapGradient)" stroke="#1a4480" stroke-width="1.5"/>
                          <g stroke="white" stroke-width="1.8" fill="none">
                            <path d="M8 10 L24 26 M24 10 L8 26"/>
                            <circle cx="8" cy="10" r="1.5" fill="white"/>
                            <circle cx="24" cy="10" r="1.5" fill="white"/>
                            <circle cx="8" cy="26" r="1.5" fill="white"/>
                            <circle cx="24" cy="26" r="1.5" fill="white"/>
                            <circle cx="16" cy="18" r="1.5" fill="white"/>
                            <circle cx="12" cy="14" r="0.8" fill="white"/>
                            <circle cx="20" cy="22" r="0.8" fill="white"/>
                          </g>
                        </svg>
                        <span class="skill-name">Nmap</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
`;

// Add template to global scope
window.homeTemplate = homeTemplate;
