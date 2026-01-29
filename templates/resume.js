// Resume Component Template
const resumeTemplate = `
<div class="space-y-6">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 class="text-2xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Resume</h2>
        <a href="src/Benedict_Chacko_Mathew_Resume_SWE.pdf" download="Benedict_Chacko_Mathew_Resume_SWE.pdf" 
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
            <p class="text-lg font-medium mb-2 transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Software Engineer | AI/ML Developer | Security Researcher</p>
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
                    Thodupuzha, Kerala, India
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
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Viswajyothi College Of Engineering And Technology, Vazhakulam</p>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Expected: May 2027 | CGPA: 8.5/10</p>
                    <p class="text-xs mt-1 transition-colors" :class="isDark ? 'text-gray-500' : 'text-gray-500'">Coursework: Data Structures & Algorithms, Machine Learning, Deep Learning, DBMS, Computer Networks, OS, AI, Software Engineering</p>
                </div>
            </div>
        </div>

        <!-- Experience Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                Work Experience
            </h2>
            <div class="space-y-4">
                <div class="border-l-4 border-green-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Freelance Web Developer & Security Researcher</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-green-400' : 'text-green-600'">Freelance Experience • Remote</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">January 2023 - Present</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Developed and deployed 5+ responsive websites using HTML, CSS, JavaScript, React, and Vue.js, increasing user engagement by 35%</li>
                        <li>• Identified and responsibly disclosed 15+ security vulnerabilities (XSS, CSRF, IDOR, SQL Injection) adhering to OWASP Top 10</li>
                        <li>• Conducted comprehensive penetration testing for 20+ programs using Burp Suite and OWASP ZAP</li>
                    </ul>
                </div>
                <div class="border-l-4 border-cyan-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI & Azure Cloud Intern</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">Edunet Foundation • Remote</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">June 2025 - August 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Deployed scalable ML solutions on Microsoft Azure using Azure ML Studio for model lifecycle management</li>
                        <li>• Architected cloud-native computer vision system with custom CNNs achieving 92% accuracy</li>
                        <li>• Automated dataset ingestion workflows using Azure Data Factory and Python for 100K+ images</li>
                    </ul>
                </div>
                <div class="border-l-4 border-blue-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Data Science & Machine Learning Intern</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Techmaghi • Ernakulam, Kerala</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">June 2025 - July 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Engineered predictive analytics models using Python, TensorFlow, and scikit-learn achieving 90% accuracy</li>
                        <li>• Optimized data preprocessing pipelines with Pandas and NumPy, reducing data cleaning time by 30%</li>
                        <li>• Deployed ML models into production using RESTful APIs (FastAPI) and Docker for 10K+ daily predictions</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Projects Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clip-rule="evenodd"></path>
                </svg>
                Project Experience
            </h2>
            <div class="space-y-3">
                <div class="border-l-4 border-purple-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Stroke Prediction ML Model</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-purple-400' : 'text-purple-600'">Python, TensorFlow, Scikit-learn, Pandas | Feb 2025 - Apr 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Built ML classification system with 85%+ recall and 82% precision for stroke prediction</li>
                        <li>• Implemented SMOTE to handle 1:10 class imbalance, reducing false negatives by 40%</li>
                    </ul>
                </div>
                <div class="border-l-4 border-red-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">BloodFinder - Emergency Blood Donation Platform</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-red-400' : 'text-red-600'">Node.js, Express.js, MongoDB | Oct 2025 - Nov 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Built full-stack platform with 6 collections, 577+ records serving 500+ users</li>
                        <li>• Implemented RESTful API with 20+ endpoints, JWT auth, and RBAC for 12 facilities</li>
                    </ul>
                </div>
                <div class="border-l-4 border-orange-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Client Website - ACM International</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-orange-400' : 'text-orange-600'">Wix, JavaScript, HTML5, CSS3 | Jul 2025 - Aug 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Designed responsive website with 200+ monthly visitors and 25+ enrollment inquiries</li>
                        <li>• Implemented SEO optimization improving search rankings by 3 positions</li>
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
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'">Java</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">C++</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'">SQL</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'">TypeScript</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Web Development</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'">React.js</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Vue.js</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-lime-900 text-lime-200' : 'bg-lime-100 text-lime-800'">Node.js</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'">Express.js</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800'">FastAPI</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-100 text-emerald-800'">Django</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">AI & Machine Learning</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'">TensorFlow</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'">PyTorch</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Scikit-learn</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">Pandas</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">OpenCV</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Cloud & DevOps</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'">AWS</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Azure</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-sky-900 text-sky-200' : 'bg-sky-100 text-sky-800'">Docker</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'">Kubernetes</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'">CI/CD</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Databases</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">MySQL</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">MongoDB</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">Firebase</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'">Redis</span>
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
            </div>
        </div>

        <!-- Certifications Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Certifications
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Applied Generative AI - Infosys Springboard (2025)</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">OpenAI GPT-3 for Developers - Infosys Springboard (2025)</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Google Cloud Computing & Generative AI - Google Cloud (2025)</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Power Automate Integration - Microsoft Learn (2025)</p>
                </div>
            </div>
        </div>

        <!-- Achievements Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                Achievements & Leadership
            </h2>
            <div class="space-y-2">
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Organized 5+ technical workshops and hackathons engaging 100+ student participants</p>
                </div>
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Responsibly disclosed 15+ security vulnerabilities with official bug bounty acknowledgments</p>
                </div>
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Led programming bootcamps for 50+ students covering Python, DSA, and OSINT techniques</p>
                </div>
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Contributed to 5+ open-source cybersecurity tools with 100+ commits and 3 merged PRs</p>
                </div>
                <div class="flex items-start gap-3">
                    <span class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Mentored 10+ students in Cybersecurity and AI projects through implementation and deployment</p>
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
