// Home Component Template
const homeTemplate = `
<div class="w-full space-y-8">
    <header class="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <img src="src/image.jpg" alt="Benedict Chacko Mathew" class="w-24 h-24 rounded-full border-4 shadow-md flex-shrink-0 avatar-wave cursor-interactive" :class="isDark ? 'border-gray-700' : 'border-white'">
        <div class="text-center sm:text-left">
            <h1 class="text-2xl sm:text-3xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Benedict Chacko Mathew</h1>
            <p class="text-sm mt-2 max-w-md leading-relaxed cursor-interactive transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                Student @ Viswajyothi College Of Engineering And Technology • 3rd Year CSE • Bug Bounty Hunter • India <span class="emoji-wave inline-block">✌️</span>
            </p>
        </div>
    </header>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8">
        <div class="lg:col-span-2 space-y-12">
            <section>
                <h2 class="text-xl font-bold mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">About Me</h2>
                <div class="space-y-4 leading-relaxed text-sm cursor-interactive transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    <p>I'm a 20-year-old engineering student pursuing a BTech degree in Computer Science and Engineering at Viswajyothi College Of Engineering And Technology, Vazhakulam, Kerala, India.</p>
                    <p>As a passionate developer and cybersecurity enthusiast, I specialize in web development, mobile app development, and ethical hacking. I'm constantly exploring cutting-edge technologies and pushing the boundaries of secure software development.</p>
                    <p>My technical expertise spans across Python, JavaScript, React Native, Vue.js, and various cybersecurity tools including Burp Suite, Metasploit, and Nmap. I enjoy the thrill of discovering vulnerabilities and contributing to a safer digital ecosystem.</p>
                </div>
            </section>

            <!-- Experience Section -->
            <section>
                <div class="experience-container rounded-xl p-6 border transition-colors" :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'">
                    <!-- Custom Switcher -->
                    <div class="experience-switcher relative flex items-center rounded-full p-1 mb-6 border shadow-sm transition-colors" :class="isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'">
                        <div class="absolute h-full w-1/2 bg-blue-500 rounded-full transition-transform duration-300 ease-in-out"
                             :style="{ transform: experienceTab === 'work' ? 'translateX(0%)' : 'translateX(100%)' }">
                        </div>
                        <button @click="experienceTab = 'work'" class="relative w-1/2 py-2 text-sm font-bold text-center transition-colors" :class="experienceTab === 'work' ? 'text-white' : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800')">Work</button>
                        <button @click="experienceTab = 'education'" class="relative w-1/2 py-2 text-sm font-bold text-center transition-colors" :class="experienceTab === 'education' ? 'text-white' : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800')">Education</button>
                    </div>

                    <!-- Timeline Content -->
                    <div class="relative">
                        <transition name="experience-fade" mode="out-in">
                            <div v-if="experienceTab === 'work'" key="work">
                                <div class="timeline-item">
                                    <div class="timeline-icon">FS</div>
                                    <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">Jan 2023 - Present</p>
                                    <h3 class="job-title font-bold text-lg transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Freelance Security Researcher</h3>
                                    <p class="company-name text-sm mb-3 transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Remote • Independent</p>
                                    <ul class="text-sm space-y-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Identified and reported 15+ critical security vulnerabilities (XSS, CSRF, IDOR) across various platforms</li>
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Contributed to securing web applications for 10+ small to medium-sized businesses</li>
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Specialized in OWASP Top 10 vulnerability assessment and penetration testing</li>
                                    </ul>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-icon">WD</div>
                                    <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">Jun 2022 - Dec 2022</p>
                                    <h3 class="job-title font-bold text-lg transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Web Development Intern</h3>
                                    <p class="company-name text-sm mb-3 transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Tech Solutions Inc. • Remote</p>
                                    <ul class="text-sm space-y-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Developed and maintained 5+ client websites using Vue.js and TailwindCSS</li>
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Collaborated with senior developers on debugging and implementing new features</li>
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Improved website performance by 40% through code optimization</li>
                                    </ul>
                                </div>
                            </div>

                            <div v-else key="education">
                                <div class="timeline-item">
                                    <div class="timeline-icon" style="background-color: #4f46e5; color: white; border-color: #4f46e5;">VJ</div>
                                    <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">2023 - 2027 (Expected)</p>
                                    <h3 class="job-title font-bold text-lg transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">B.Tech Computer Science & Engineering</h3>
                                    <p class="company-name text-sm mb-3 transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Viswajyothi College Of Engineering And Technology</p>
                                    <ul class="text-sm space-y-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Focusing on Software Development and Cybersecurity specialization tracks</li>
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Active member of the college's coding and cybersecurity club</li>
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Participated in 8+ CTF competitions and hackathons</li>
                                    </ul>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-icon" style="background-color: #db2777; color: white; border-color: #db2777;">SG</div>
                                    <p class="text-xs mb-1 transition-colors font-mono" :class="isDark ? 'text-cyan-400' : 'text-gray-500'">2021 - 2023</p>
                                    <h3 class="job-title font-bold text-lg transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Higher Secondary Education</h3>
                                    <p class="company-name text-sm mb-3 transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">St. George's HSS Muthalakodam • Computer Science</p>
                                     <ul class="text-sm space-y-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Graduated with 95% in Computer Science and Mathematics</li>
                                        <li class="achievement-item" :class="isDark ? '' : 'list-disc list-inside'">Led the school's programming club and organized coding workshops</li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </section>
        </div>
        
        <div class="space-y-8">
            <section>
                <h2 class="text-xl font-bold mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">Social</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href="https://github.com/The-Peacemaker" target="_blank" rel="noopener noreferrer" class="social-link flex items-center gap-2.5 px-3 py-2.5 group">
                        <svg class="social-icon w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        </svg>
                        <span class="social-link-text text-xs font-medium">GitHub</span>
                    </a>
                    
                    <a href="https://x.com/BenedictChacko" target="_blank" rel="noopener noreferrer" class="social-link flex items-center gap-2.5 px-3 py-2.5 group">
                        <svg class="social-icon w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.29 1.99-2.09z"/>
                        </svg>
                        <span class="social-link-text text-xs font-medium">Twitter</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/benedict-chacko" target="_blank" rel="noopener noreferrer" class="social-link flex items-center gap-2.5 px-3 py-2.5 group">
                        <svg class="social-icon w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                        <span class="social-link-text text-xs font-medium">LinkedIn</span>
                    </a>
                    
                    <a href="mailto:benedictcm1@gmail.com" class="social-link flex items-center gap-2.5 px-3 py-2.5 group">
                        <svg class="social-icon w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        <span class="social-link-text text-xs font-medium">Contact</span>
                    </a>
                </div>
            </section>
            
            <section>
                <h2 class="text-xl font-bold mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">Skills</h2>
                <div class="flex flex-wrap gap-2 items-center cursor-interactive">
                    <img class="h-5" alt="Metasploit" src="https://badgen.net/badge/icon/Metasploit?icon=terminal&label">
                    <img class="h-5" alt="Python" src="https://img.shields.io/badge/-Python-blue">
                    <img class="h-5" alt="JavaScript" src="https://img.shields.io/badge/-Javascript-yellow">
                    <img class="h-5" alt="SQL" src="https://img.shields.io/badge/-SQL-lightgrey">
                    <img class="h-5" alt="Git" src="https://img.shields.io/badge/-Git-critical">
                    <img class="h-5" alt="HTML5" src="https://badgen.net/badge/icon/HTML5?icon=html5&label&color=E34F26">
                    <img class="h-5" alt="CSS3" src="https://badgen.net/badge/icon/CSS3?icon=css3&label&color=1572B6">
                    <img class="h-5" alt="OWASP" src="https://badgen.net/badge/icon/OWASP?icon=owasp&label&color=black">
                    <img class="h-5" alt="BurpSuite" src="https://badgen.net/badge/Burp%20Suite/v2025/orange">
                    <img class="h-5" alt="React Native" src="https://img.shields.io/badge/-React Native-blue">
                    <img class="h-5" alt="Vue" src="https://img.shields.io/badge/-VueJS-61b083">
                    <img class="h-5" alt="VSCODE" src="https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=white">
                    <img alt="Nmap" src="https://img.shields.io/badge/Nmap-4E8DAF?logo=nmap&logoColor=white">
                    <img class="h-5" alt="SQLite" src="https://img.shields.io/badge/-SQLite-64a2c9">
                    <img class="h-5" alt="Figma" src="https://img.shields.io/badge/-Figma-8c5aee">
                </div>
            </section>
        </div>
    </div>
</div>
`;

// Add template to global scope
window.homeTemplate = homeTemplate;
