// Resume Component Template
const resumeTemplate = `
<div class="space-y-6">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 class="text-2xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Resume</h2>
        <a href="src/Benedict_Resume.pdf" download="Benedict_Chacko_Mathew_Resume.pdf" 
           class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-interactive shadow-md"
           :class="isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download Resume
        </a>
    </div>

    <!-- Resume Preview Card -->
    <div class="resume-preview-card rounded-xl p-6 transition-all duration-300 shadow-lg border"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        
        <!-- Header Section -->
        <div class="text-center mb-6 pb-6 border-b transition-colors" :class="isDark ? 'border-gray-700' : 'border-gray-200'">
            <h1 class="text-2xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Benedict Chacko Mathew</h1>
            <p class="text-lg font-medium mb-2 transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Computer Science Engineering Student & Security Researcher</p>
            <div class="flex flex-wrap justify-center gap-4 text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    benedictcm1@gmail.com
                </span>
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                    </svg>
                    Kerala, India
                </span>
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    github.com/The-Peacemaker
                </span>
            </div>
        </div>

        <!-- Education Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"></path>
                </svg>
                Education
            </h2>
            <div class="space-y-3">
                <div class="border-l-4 border-blue-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Bachelor of Technology - Computer Science & Engineering</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Viswajyothi College Of Engineering And Technology</p>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">2023 - 2027 (Expected) | Current CGPA: 8.2/10</p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Higher Secondary Education - Computer Science</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-purple-400' : 'text-purple-600'">St. George's HSS Muthalakodam</p>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">2021 - 2023 | Score: 95%</p>
                </div>
            </div>
        </div>

        <!-- Experience Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                Experience
            </h2>
            <div class="space-y-4">
                <div class="border-l-4 border-green-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Freelance Security Researcher</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-green-400' : 'text-green-600'">Independent • Remote</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">January 2023 - Present</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Identified and reported 15+ security vulnerabilities across various platforms</li>
                        <li>• Specialized in OWASP Top 10 vulnerability assessment and penetration testing</li>
                        <li>• Contributed to securing web applications for 10+ businesses</li>
                    </ul>
                </div>
                <div class="border-l-4 border-blue-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI/ML Research Intern</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Techmaghi • On Site</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">June 2025 - July 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Developed machine learning models for predictive analytics using Python and TensorFlow</li>
                        <li>• Implemented data preprocessing pipelines and feature engineering techniques</li>
                        <li>• Improved model accuracy through hyperparameter optimization and ensemble methods</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Skills Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Technical Skills
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Programming Languages</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Python</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">JavaScript</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'">SQL</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'">HTML/CSS</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Security Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'">Burp Suite</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">Metasploit</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Nmap</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'">OWASP ZAP</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Frameworks & Libraries</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Vue.js</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">React Native</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'">TailwindCSS</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'">SQLite</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Other Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'">Git</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">VS Code</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">Figma</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'">Linux</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Achievements Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                Achievements & Certifications
            </h2>
            <div class="space-y-2">
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Participated in Several CTF competitions with top 10 rankings in college-level events</p>
                </div>
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Successfully reported and got acknowledged for critical security vulnerabilities</p>
                </div>
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Active contributor to college's Tech and coding clubs</p>
                </div>
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Led programming workshops and technical sessions for junior students</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Additional Info -->
    <div class="mt-6 p-4 rounded-lg transition-colors" :class="isDark ? 'bg-gray-800' : 'bg-gray-50'">
        <p class="text-sm text-center transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            This resume is also available as a PDF download. For the most current version or to discuss opportunities, please feel free to reach out via email or LinkedIn.
        </p>
    </div>
</div>
`;

// Add template to global scope
window.resumeTemplate = resumeTemplate;
