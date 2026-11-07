// Resume Component Template
const resumeTemplate = `
<div class="space-y-6">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 class="text-2xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Resume</h2>
        <a href="src/Benedict_Resume.pdf?v=2026" download="Benedict_Chacko_Mathew_Resume.pdf" 
           class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-interactive shadow-md"
           :class="isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download
        </a>
    </div>

    <!-- Resume Preview Card -->
    <div class="resume-preview-card rounded-xl p-6 transition-all duration-300 shadow-lg border"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        
        <!-- Header Section -->
        <div class="text-center mb-6 pb-6 border-b transition-colors" :class="isDark ? 'border-gray-700' : 'border-gray-200'">
            <h1 class="text-2xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Benedict Chacko Mathew</h1>
            <p class="text-lg font-medium mb-3 transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Software Engineer (Java / Spring Boot) | AI/ML | Security Researcher</p>
            <div class="flex flex-wrap justify-center gap-4 text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13zM7 6a1 1 0 100 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h4a1 1 0 100-2H7z" clip-rule="evenodd"></path>
                    </svg>
                    +91-6282031325
                </span>
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
                    linkedin.com/in/benedict-chacko
                </span>
                <span class="flex items-center gap-1">
                    github.com/The-Peacemaker
                </span>
            </div>
        </div>

        <!-- Professional Summary -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10A8 8 0 114 3.46V3a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2H4.73A6 6 0 1018 10z" clip-rule="evenodd"></path>
                </svg>
                Professional Summary
            </h2>
            <p class="text-sm leading-relaxed transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                Final-year B.Tech Computer Science (Class of 2027, CGPA 8.5/10.0) with strong foundations in Java, OOP, DSA, SQL, REST APIs and Spring Boot, plus hands-on full-stack and AI/ML experience. Open-source contributor to Google Bazel (merged Java security fix, OSVRP-acknowledged) and Jupyter Notebook (merged routing fix, v7.7.0). Internships at Infosys Springboard (ML + full-stack) and Edunet Foundation (Azure + TensorFlow CNN, 92% accuracy); disclosed 15+ vulnerabilities across 20+ bug-bounty programs. Cyber Security Lead mentoring 100+ students. Seeking entry-level Software Engineer roles.
            </p>
            <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <span class="text-xs px-2 py-1 rounded-full font-semibold text-center" :class="isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'">2 OSS Merges</span>
                <span class="text-xs px-2 py-1 rounded-full font-semibold text-center" :class="isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'">25,480 Records</span>
                <span class="text-xs px-2 py-1 rounded-full font-semibold text-center" :class="isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'">92% CNN Accuracy</span>
                <span class="text-xs px-2 py-1 rounded-full font-semibold text-center" :class="isDark ? 'bg-cyan-900/50 text-cyan-300' : 'bg-cyan-100 text-cyan-700'">15+ Vuln Reports</span>
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
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Expected: May 2027 | CGPA: 8.5/10.0 | No Active Backlogs</p>
                    <p class="text-xs mt-1 transition-colors" :class="isDark ? 'text-gray-500' : 'text-gray-500'">Coursework: DSA, OOP, Java Programming, DBMS, OS, Computer Networks, Software Engineering (SDLC, Agile), ML, AI • Class XII (St. George HSS, Muthalakodam): 95.7% – 2023 | Class X: 98.0% – 2021</p>
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
                <div class="border-l-4 border-violet-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI/ML Intern</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-violet-400' : 'text-violet-600'">Infosys Springboard • Remote</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">February 2026 - April 2026</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Developed visa-approval classifier on 25,480-record EasyVisa dataset (23 features); EDA, preprocessing, feature engineering; model selection with 5-fold CV, shipped Random Forest as best model</li>
                        <li>• Exposed model via Flask REST APIs with React 18 + Vite analytics UI; Agile delivery with API documentation</li>
                    </ul>
                </div>
                <div class="border-l-4 border-green-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Freelance Web Developer & Security Researcher</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-green-400' : 'text-green-600'">Freelance Experience • Remote</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">January 2023 - Present</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Delivered responsive web apps with React, JavaScript and Vue.js for clients</li>
                        <li>• Disclosed 15+ vulnerabilities (XSS, CSRF, IDOR, SQLi) following OWASP Top 10; security-tested 20+ programs with Burp Suite and OWASP ZAP</li>
                    </ul>
                </div>
                <div class="border-l-4 border-cyan-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI & Azure Cloud Intern</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">Edunet Foundation • Remote</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">June 2025 - August 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Built ML lifecycle on Azure (ML Studio, Data Factory) — versioning and retraining; TensorFlow CNN: 92% accuracy, 20% faster inference</li>
                        <li>• Automated Python ingestion pipeline for 100K+ images; cloud deployment with reporting</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Open Source Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001 1h1.555a1 1 0 00.555-1.832L10 10.5v-.5a1 1 0 00-1-1h-.445zM7 12a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                Open Source Contributions
            </h2>
            <div class="space-y-4">
                <div class="border-l-4 border-blue-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Google Bazel — 2026</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Open Source Contributor & Security Researcher • Remote</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Fixed CWE-522 credential leak in ProxyHelper (Java) with host-port-scoped ConcurrentHashMap + requestor fallback; JUnit isolation tests; merged into bazelbuild/bazel (dc50161), Google OSVRP-acknowledged</li>
                    </ul>
                </div>
                <div class="border-l-4 border-cyan-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Jupyter Notebook — 2026</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">Open Source Contributor • Remote</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Fixed tree-view misrouting where paths containing a notebooks folder were intercepted as file-open routes (404) by anchoring opener route regex (TypeScript); Playwright regression test; merged into jupyter/notebook (7903), v7.7.0, fixing #7216</li>
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
                <div class="border-l-4 border-blue-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">SentinelMesh – Infra Monitoring Platform</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Java, Spring Boot, Kafka, gRPC, Docker, Redis, PostgreSQL | 2026</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Architected Spring Boot microservices with Kafka, Redis, PostgreSQL, gRPC and Docker; 60-sec correlation windows with SSE live dashboards; validated on 350+ synthetic events at &lt;10s end-to-end latency</li>
                        <li>• Added Isolation Forest + rule engine for DDoS, auth-abuse and resource-leak detection; applied DI, concurrency and JUnit testing</li>
                    </ul>
                </div>
                <div class="border-l-4 border-amber-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Silent Invigilator – Exam Malpractice Detection</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-amber-400' : 'text-amber-600'">Python, YOLOv8, OpenCV, MediaPipe | 2026</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Built real-time detector flagging phone use, gaze deviation, multi-person frames and head movement via YOLOv8, face counting, 3D head pose and iris tracking (OpenCV, MediaPipe, NumPy)</li>
                        <li>• Added anomaly scoring with structured JSON reports for review</li>
                    </ul>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Visa Prediction Platform</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'">Python, Flask, React, scikit-learn | Mar 2026</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Production-style full-stack app serving sklearn model via Flask REST APIs; React 18 + Vite UI with real-time predictions, confidence scores and trend analytics; deployed on Netlify/Vercel (capstone from Infosys Springboard internship)</li>
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
                <div><h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Languages</h4><p class="text-xs leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Java • Python • JavaScript/TypeScript (ES6+) • SQL</p></div>
                <div><h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Core Java & DSA</h4><p class="text-xs leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">OOP • Collections • Exception Handling • JDBC • Multithreading & Concurrency • Dependency Injection • Arrays • Strings • Linked Lists • Stacks • Queues • Trees • Hashing • Sorting • Searching</p></div>
                <div><h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Backend</h4><p class="text-xs leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Spring Boot • Spring MVC • REST APIs • Hibernate/JPA • Flask • Microservices • Kafka • gRPC • Redis</p></div>
                <div><h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">AI / ML</h4><p class="text-xs leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">scikit-learn • TensorFlow • YOLOv8 • OpenCV • MediaPipe • NumPy • EDA • Feature Engineering • Cross-Validation</p></div>
                <div><h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Databases</h4><p class="text-xs leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">MySQL • PostgreSQL • SQL Server • MongoDB • Normalization • Query Optimization</p></div>
                <div><h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Frontend</h4><p class="text-xs leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">React.js • HTML5 • CSS3 • Tailwind CSS • Vite • TypeScript</p></div>
                <div><h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Tools & Cloud</h4><p class="text-xs leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Git • GitHub • Maven • Postman • Docker • Playwright • Azure (ML Studio, Data Factory) • Burp Suite • OWASP ZAP</p></div>
                <div><h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Practices</h4><p class="text-xs leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">SDLC • Agile/Scrum • Debugging • JUnit • Regression Testing • API Documentation • OWASP Top 10</p></div>
            </div>
        </div>

        <!-- Certifications & Achievements Section -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-3 transition-colors flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Achievements & Leadership
            </h2>
            <div class="mb-4 flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Applied Generative AI — Infosys Springboard 2025</span>
                <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">OpenAI GPT-3 — Infosys 2025</span>
                <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Google Cloud Foundations & GenAI 2025</span>
                <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'">Power Automate — Microsoft Learn 2025</span>
            </div>
            <div class="space-y-2">
                <div class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Serving as Cyber Security Lead for the campus MuLearn Community, leading peer-learning initiatives and hands-on security programs</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Coordinated and mentored campus technical events, coding competitions, and hackathons, including 5+ workshops engaging 100+ student participants</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Delivered technical sessions on vibe coding, cybersecurity, bug bounty, web design, and blockchain through campus organizations and department programs</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">Identified and responsibly disclosed 15+ security vulnerabilities across multiple platforms, receiving official acknowledgments from bug bounty programs</p>
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
