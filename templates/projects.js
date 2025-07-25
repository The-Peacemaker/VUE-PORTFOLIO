// Projects Component Template
const projectsTemplate = `
<div class="space-y-6">
    <h2 class="text-2xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Project 1: Portfolio Website -->
        <div class="project-card p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-interactive shadow-lg"
             :class="isDark ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'">
            <div class="mb-4">
                <h3 class="text-xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Portfolio Website</h3>
                <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    A modern, responsive portfolio website built with Vue.js 3 and TailwindCSS, featuring glassmorphism design, dark/light theme switching, and interactive 3D effects.
                </p>
            </div>
            
            <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Vue.js 3</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">TailwindCSS</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Glassmorphism</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">JavaScript</span>
                </div>
            </div>
            
            <div class="flex justify-between items-center">
                <a href="https://github.com/The-Peacemaker/portfolio" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center gap-2 text-sm font-medium hover:underline transition-colors" 
                   :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source
                </a>
                <span class="text-sm font-medium transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-500'">2024</span>
            </div>
        </div>

        <!-- Project 2: Bug Bounty Automation Tool -->
        <div class="project-card p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-interactive shadow-lg"
             :class="isDark ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'">
            <div class="mb-4">
                <h3 class="text-xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Bug Bounty Automation Tool</h3>
                <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    Python-based automation tool for bug bounty hunting that performs reconnaissance, vulnerability scanning, and report generation with integrated OWASP methodologies.
                </p>
            </div>
            
            <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Python</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'">Security</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">OWASP</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Automation</span>
                </div>
            </div>
            
            <div class="flex justify-between items-center">
                <a href="https://github.com/The-Peacemaker/bug-bounty-tool" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center gap-2 text-sm font-medium hover:underline transition-colors" 
                   :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source
                </a>
                <span class="text-sm font-medium transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-500'">2023</span>
            </div>
        </div>

        <!-- Project 3: Mobile App Security Scanner -->
        <div class="project-card p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-interactive shadow-lg"
             :class="isDark ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'">
            <div class="mb-4">
                <h3 class="text-xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Mobile Security Scanner</h3>
                <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    React Native application for analyzing Android APK files to identify potential security vulnerabilities, permissions analysis, and malware detection.
                </p>
            </div>
            
            <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">React Native</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Android</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'">Security</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">Static Analysis</span>
                </div>
            </div>
            
            <div class="flex justify-between items-center">
                <a href="https://github.com/The-Peacemaker/mobile-scanner" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center gap-2 text-sm font-medium hover:underline transition-colors" 
                   :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source
                </a>
                <span class="text-sm font-medium transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-500'">2023</span>
            </div>
        </div>

        <!-- Project 4: CTF Platform -->
        <div class="project-card p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-interactive shadow-lg"
             :class="isDark ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'">
            <div class="mb-4">
                <h3 class="text-xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">CTF Challenge Platform</h3>
                <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    Full-stack web application for hosting Capture The Flag cybersecurity competitions with real-time scoring, team management, and challenge deployment.
                </p>
            </div>
            
            <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Vue.js</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Python</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'">SQLite</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">WebSockets</span>
                </div>
            </div>
            
            <div class="flex justify-between items-center">
                <a href="https://github.com/The-Peacemaker/ctf-platform" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center gap-2 text-sm font-medium hover:underline transition-colors" 
                   :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source
                </a>
                <span class="text-sm font-medium transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-500'">2022</span>
            </div>
        </div>
    </div>

    <!-- Additional Projects Section -->
    <div class="mt-8 pt-6 border-t transition-colors" :class="isDark ? 'border-gray-700' : 'border-gray-200'">
        <h3 class="text-lg font-semibold mb-4 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Other Notable Projects</h3>
        <div class="space-y-3">
            <div class="flex justify-between items-center p-4 rounded-lg transition-colors" :class="isDark ? 'bg-gray-800' : 'bg-gray-50'">
                <div>
                    <h4 class="font-medium transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Vulnerability Assessment Scripts</h4>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Collection of Python scripts for automated penetration testing</p>
                </div>
                <a href="https://github.com/The-Peacemaker/scripts" target="_blank" rel="noopener noreferrer" 
                   class="text-sm font-medium hover:underline transition-colors" 
                   :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                    View →
                </a>
            </div>
            
            <div class="flex justify-between items-center p-4 rounded-lg transition-colors" :class="isDark ? 'bg-gray-800' : 'bg-gray-50'">
                <div>
                    <h4 class="font-medium transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">College Management System</h4>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Web-based student information management system</p>
                </div>
                <a href="https://github.com/The-Peacemaker/college-mgmt" target="_blank" rel="noopener noreferrer" 
                   class="text-sm font-medium hover:underline transition-colors" 
                   :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                    View →
                </a>
            </div>
        </div>
    </div>
</div>
`;

// Add template to global scope
window.projectsTemplate = projectsTemplate;
