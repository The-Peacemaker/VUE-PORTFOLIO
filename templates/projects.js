// Projects Component Template
const projectsTemplate = `
<div class="space-y-4 md:space-y-6">
    <h2 class="text-xl sm:text-2xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Projects</h2>

    <div class="projects-grid grid grid-cols-1 gap-4 md:gap-6">
        <div class="project-card p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-interactive shadow-lg"
             :class="isDark ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'">
            <div class="mb-3 md:mb-4">
                <h3 class="text-lg sm:text-xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">AI-Enabled Visa Status Prediction & Processing Time Estimator</h3>
                <p class="text-xs sm:text-sm transition-colors leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    End-to-end visa processing time prediction system using the EasyVisa dataset (25,480 records), with feature engineering, model training, and production deployment.
                </p>
            </div>
            <div class="mb-3 md:mb-4">
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Python</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'">React</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">Vite</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-100 text-emerald-800'">Flask</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">scikit-learn</span>
                </div>
            </div>
            <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                    <a href="https://github.com/The-Peacemaker/VISA-STATUS-PREDICTION" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm rounded-md font-medium transition-all"
                       :class="isDark ? 'bg-gray-700 text-gray-100 hover:bg-gray-600 border border-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                    <a href="https://visa-status-prediction.netlify.app/" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm rounded-md font-medium transition-all"
                       :class="isDark ? 'bg-blue-600 text-white hover:bg-blue-500 border border-blue-500' : 'bg-blue-500 text-white hover:bg-blue-600 border border-blue-500'">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"></path>
                        </svg>
                        Play
                    </a>
                </div>
                <span class="text-xs sm:text-sm font-medium transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-500'">Mar 2026</span>
            </div>
        </div>

        <div class="project-card p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-interactive shadow-lg"
             :class="isDark ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'">
            <div class="mb-3 md:mb-4">
                <h3 class="text-lg sm:text-xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">The Silent Invigilator - Real-Time Exam Malpractice Detection System</h3>
                <p class="text-xs sm:text-sm transition-colors leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    Real-time, non-intrusive invigilation system for detecting suspicious behavior using head pose, gaze, hand tracking, and YOLOv8 phone detection.
                </p>
            </div>
            <div class="mb-3 md:mb-4">
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Python</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'">OpenCV</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'">MediaPipe</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'">YOLOv8</span>
                </div>
            </div>
            <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                    <a href="https://github.com/The-Peacemaker/Silent-Invigilator" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm rounded-md font-medium transition-all"
                       :class="isDark ? 'bg-gray-700 text-gray-100 hover:bg-gray-600 border border-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                    <a href="https://github.com/The-Peacemaker/Silent-Invigilator" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm rounded-md font-medium transition-all"
                       :class="isDark ? 'bg-blue-600 text-white hover:bg-blue-500 border border-blue-500' : 'bg-blue-500 text-white hover:bg-blue-600 border border-blue-500'">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"></path>
                        </svg>
                        Play
                    </a>
                </div>
                <span class="text-xs sm:text-sm font-medium transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-500'">2026</span>
            </div>
        </div>

        <div class="project-card p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-interactive shadow-lg"
             :class="isDark ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'">
            <div class="mb-3 md:mb-4">
                <h3 class="text-lg sm:text-xl font-bold mb-2 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Stroke Prediction ML Model</h3>
                <p class="text-xs sm:text-sm transition-colors leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
                    Classification pipeline for stroke-risk prediction using Logistic Regression, Decision Tree, and Random Forest with strong recall/precision and SMOTE balancing.
                </p>
            </div>
            <div class="mb-3 md:mb-4">
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'">Python</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'">TensorFlow</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'">Scikit-learn</span>
                    <span class="px-2 py-1 text-xs rounded-full font-medium" :class="isDark ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800'">Pandas</span>
                </div>
            </div>
            <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                    <a href="https://github.com/The-Peacemaker/Stroke-Prediction-ML" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm rounded-md font-medium transition-all"
                       :class="isDark ? 'bg-gray-700 text-gray-100 hover:bg-gray-600 border border-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                    <a href="https://github.com/The-Peacemaker/Stroke-Prediction-ML" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm rounded-md font-medium transition-all"
                       :class="isDark ? 'bg-blue-600 text-white hover:bg-blue-500 border border-blue-500' : 'bg-blue-500 text-white hover:bg-blue-600 border border-blue-500'">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"></path>
                        </svg>
                        Play
                    </a>
                </div>
                <span class="text-xs sm:text-sm font-medium transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-500'">Feb 2025 - Apr 2025</span>
            </div>
        </div>
    </div>
</div>
`;

// Add template to global scope
window.projectsTemplate = projectsTemplate;
