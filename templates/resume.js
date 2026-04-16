// Resume Component Template
const resumeTemplate = `
<div class="space-y-6">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 class="text-2xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Resume</h2>
        <a href="src/Benedict_Resume.pdf" download="benedict_resume.pdf" 
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
            <p class="text-lg font-medium mb-3 transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Full-Stack Developer | AI/ML Practitioner | Security Researcher</p>
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
                Full-stack developer, AI/ML practitioner, and security researcher building responsive web applications, cloud-based AI solutions, and production-ready ML workflows. Built multiple websites, conducted 20+ penetration tests, and delivered applied ML solutions across React, Node.js, Python, Microsoft Azure, Docker, and modern security tooling.
            </p>
            <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <span class="text-xs px-2 py-1 rounded-full font-semibold text-center" :class="isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'">20+ Pentests</span>
                <span class="text-xs px-2 py-1 rounded-full font-semibold text-center" :class="isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'">25,480 Records</span>
                <span class="text-xs px-2 py-1 rounded-full font-semibold text-center" :class="isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'">92% CV Accuracy</span>
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
                    <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Expected: May 2027 | CGPA: 8.5/10.0</p>
                    <p class="text-xs mt-1 transition-colors" :class="isDark ? 'text-gray-500' : 'text-gray-500'">Relevant Coursework: Data Structures & Algorithms, Machine Learning, Deep Learning, Database Management Systems, Computer Networks, Operating Systems, Artificial Intelligence, Software Engineering</p>
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
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">February 2026 - Present</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Built a visa processing time prediction platform on the EasyVisa dataset with 25,480 records and domain-aware temporal labels</li>
                        <li>• Performed EDA and feature engineering across 23 engineered columns to improve model signal quality</li>
                        <li>• Trained models with 5-fold cross-validation, selected Random Forest Regressor, and deployed using React 18, Vite, Flask, Netlify, and Vercel</li>
                    </ul>
                </div>
                <div class="border-l-4 border-green-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Freelance Web Developer & Security Researcher</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-green-400' : 'text-green-600'">Freelance Experience • Remote</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">January 2023 - Present</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Developed and deployed responsive websites and web applications using HTML, CSS, JavaScript, React, and Vue.js across client, personal, and competition projects</li>
                        <li>• Identified and responsibly disclosed 15+ security vulnerabilities (XSS, CSRF, IDOR, SQL Injection) across web applications, adhering to OWASP Top 10</li>
                        <li>• Conducted comprehensive penetration testing for 20+ programs using Burp Suite and OWASP ZAP, delivering actionable remediation reports</li>
                    </ul>
                </div>
                <div class="border-l-4 border-cyan-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI & Azure Cloud Intern</h3>
                    <p class="text-sm font-medium transition-colors" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">Edunet Foundation • Remote</p>
                    <p class="text-sm transition-colors mb-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">June 2025 - August 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Deployed scalable machine learning solutions on Microsoft Azure, utilizing Azure ML Studio to manage model lifecycles, versioning, and automated retraining pipelines</li>
                        <li>• Architected cloud-native computer vision system implementing custom CNNs with TensorFlow for image classification, achieving 92% accuracy and improving speed by 20%</li>
                        <li>• Automated dataset ingestion workflows using Azure Data Factory and Python scripts, streamlining training for 100K+ images</li>
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
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI-Enabled Visa Status Prediction & Processing Time Estimator</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-blue-400' : 'text-blue-600'">Python, React, Vite, Flask, scikit-learn | March 2026</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Built an end-to-end visa processing time prediction system using the EasyVisa dataset with 25,480 records covering preprocessing, feature engineering, modeling, and deployment</li>
                        <li>• Created a React + Vite frontend and Flask backend with Netlify and Vercel deployment, enabling live predictions, confidence scoring, trend analytics, and prediction history</li>
                        <li>• Selected Random Forest Regressor after 5-fold cross-validation and packaged a reusable prediction engine with scaler and milestone outputs</li>
                    </ul>
                </div>
                <div class="border-l-4 border-amber-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">The Silent Invigilator - Real-Time Exam Malpractice Detection System</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-amber-400' : 'text-amber-600'">Python, OpenCV, MediaPipe, YOLOv8 | 2026</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Built a real-time, non-intrusive exam invigilation system to flag phone usage, gaze aversion, multiple-person presence, abnormal head movement, and suspicious hand gestures</li>
                        <li>• Implemented face counting, 3D head-pose estimation, iris-ratio gaze tracking, hand tracking, posture monitoring, and YOLOv8 phone detection using OpenCV and MediaPipe</li>
                        <li>• Added temporal behavior analysis with anomaly scoring and a dashboard showing risk level, live status indicators, alerts, FPS, and JSON report generation</li>
                    </ul>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4">
                    <h3 class="font-semibold transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Stroke Prediction ML Model</h3>
                    <p class="text-xs transition-colors mb-1" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'">Python, TensorFlow, Scikit-learn, Pandas | Feb 2025 - Apr 2025</p>
                    <ul class="text-sm space-y-1 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                        <li>• Architected a machine learning classification system using Logistic Regression, Decision Tree, and Random Forest models to predict stroke probability with 85%+ recall and 82% precision</li>
                        <li>• Conducted extensive EDA with Matplotlib and Seaborn to identify 12+ key risk factors for medical stakeholders</li>
                        <li>• Implemented SMOTE to handle severe 1:10 class imbalance and reduce false negatives in critical health predictions</li>
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
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-pink-900 text-pink-200' : 'bg-pink-100 text-pink-800'">HTML5</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'">CSS3</span>
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
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-rose-900 text-rose-200' : 'bg-rose-100 text-rose-800'">Flask</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800'">FastAPI</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-100 text-emerald-800'">Django</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-violet-900 text-violet-200' : 'bg-violet-100 text-violet-800'">RESTful APIs</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-sky-900 text-sky-200' : 'bg-sky-100 text-sky-800'">GraphQL</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">AI & Machine Learning</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'">TensorFlow</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-fuchsia-900 text-fuchsia-200' : 'bg-fuchsia-100 text-fuchsia-800'">Keras</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'">PyTorch</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Scikit-learn</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">Pandas</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'">NumPy</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">SciPy</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-lime-900 text-lime-200' : 'bg-lime-100 text-lime-800'">XGBoost</span>
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
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Databases & Storage</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">MySQL</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">MongoDB</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">Firebase</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'">Redis</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-slate-700 text-slate-200' : 'bg-slate-100 text-slate-800'">SQL Server</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Computer Vision & Data Viz</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-100 text-emerald-800'">OpenCV</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'">YOLOv8</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'">CNNs</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-pink-900 text-pink-200' : 'bg-pink-100 text-pink-800'">Matplotlib</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-violet-900 text-violet-200' : 'bg-violet-100 text-violet-800'">Seaborn</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'">Plotly</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Tableau</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">Power BI</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Security Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'">Burp Suite</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">Metasploit</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">Nmap</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'">OWASP ZAP</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-sky-900 text-sky-200' : 'bg-sky-100 text-sky-800'">Wireshark</span>
                    </div>
                </div>
                <div>
                    <h4 class="font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Core Competencies</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'">System Design</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Agile/Scrum</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">API Development</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">Model Deployment</span>
                        <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'">Technical Documentation</span>
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
                Achievements & Leadership
            </h2>
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
