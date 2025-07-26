// Contact Component Template
const contactTemplate = `
<div class="space-y-6">
    <h2 class="text-2xl font-bold cursor-interactive transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Get In Touch</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold mb-4 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Contact Information</h3>
                <div class="space-y-4">
                    <div class="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-interactive"
                         :class="isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                             :class="isDark ? 'bg-blue-600' : 'bg-blue-500'">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-medium transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Email</h4>
                            <a href="mailto:benedictcm1@gmail.com" class="text-sm transition-colors hover:underline" 
                               :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                                benedictcm1@gmail.com
                            </a>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-interactive"
                         :class="isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                             :class="isDark ? 'bg-green-600' : 'bg-green-500'">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-medium transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Location</h4>
                            <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Kerala, India</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-interactive"
                         :class="isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                             :class="isDark ? 'bg-purple-600' : 'bg-purple-500'">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-medium transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Professional Focus</h4>
                            <p class="text-sm transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Security Research & Web Development</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Social Links -->
            <div>
                <h3 class="text-lg font-semibold mb-4 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Connect With Me</h3>
                <div class="flex flex-wrap gap-4">
                    <a href="https://github.com/The-Peacemaker" target="_blank" rel="noopener noreferrer" 
                       class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border"
                       :class="isDark ? 'bg-gray-800 border-gray-700 hover:border-gray-600 text-white' : 'bg-white border-gray-200 hover:border-gray-300 text-gray-900'">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                    
                    <a href="https://www.linkedin.com/in/benedict-chacko" target="_blank" rel="noopener noreferrer" 
                       class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border"
                       :class="isDark ? 'bg-gray-800 border-gray-700 hover:border-gray-600 text-white' : 'bg-white border-gray-200 hover:border-gray-300 text-gray-900'">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </a>
                    
                    <a href="https://x.com/BenedictChacko" target="_blank" rel="noopener noreferrer" 
                       class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border"
                       :class="isDark ? 'bg-gray-800 border-gray-700 hover:border-gray-600 text-white' : 'bg-white border-gray-200 hover:border-gray-300 text-gray-900'">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.29 1.99-2.09z"/>
                        </svg>
                        Twitter
                    </a>
                </div>
            </div>
        </div>

        <!-- Contact Form -->
        <div>
            <h3 class="text-lg font-semibold mb-4 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Send a Message</h3>
            <form @submit.prevent="submitContactForm" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-700'">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        v-model="contactForm.name"
                        required
                        class="w-full px-4 py-2 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        :class="isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'"
                        placeholder="Your full name">
                </div>
                
                <div>
                    <label for="email" class="block text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-700'">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        v-model="contactForm.email"
                        required
                        class="w-full px-4 py-2 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        :class="isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'"
                        placeholder="your.email@example.com">
                </div>
                
                <!-- Subject dropdown hidden
                <div>
                    <label for="subject" class="block text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-700'">Subject</label>
                    <select 
                        id="subject" 
                        v-model="contactForm.subject"
                        required
                        class="w-full px-4 py-2 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        :class="isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'">
                        <option value="">Select a subject</option>
                        <option value="freelance">Freelance Project</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="job">Job Opportunity</option>
                        <option value="security">Security Research</option>
                        <option value="general">General Inquiry</option>
                    </select>
                </div>
                -->
              
                <div>
                    <label for="message" class="block text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-700'">Message</label>
                    <textarea 
                        id="message" 
                        v-model="contactForm.message"
                        required
                        rows="5"
                        class="w-full px-4 py-2 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        :class="isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'"
                        placeholder="Tell me about your project or inquiry..."></textarea>
                </div>
                
                <button 
                    type="submit"
                    :disabled="isFormSubmitting"
                    class="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    :class="isDark ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-offset-gray-900' : 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-offset-white'">
                    <span v-if="!isFormSubmitting" class="flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Send Message
                    </span>
                    <span v-else class="flex items-center justify-center gap-2">
                        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </span>
                </button>
            </form>
        </div>
    </div>

    <!-- Additional Information -->
    <div class="mt-8 p-6 rounded-xl transition-colors border"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'">
        <h3 class="text-lg font-semibold mb-3 transition-colors" :class="isDark ? 'text-white' : 'text-gray-900'">Heiii I'm Looking For</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
                <h4 class="font-medium transition-colors" :class="isDark ? 'text-blue-400' : 'text-blue-600'">🚀 Freelance Projects</h4>
                <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Web development, security audits, and penetration testing projects</p>
            </div>
            <div class="space-y-2">
                <h4 class="font-medium transition-colors" :class="isDark ? 'text-green-400' : 'text-green-600'">🤝 Collaboration</h4>
                <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Open source contributions and cybersecurity research partnerships</p>
            </div>
            <div class="space-y-2">
                <h4 class="font-medium transition-colors" :class="isDark ? 'text-purple-400' : 'text-purple-600'">💼 Internships</h4>
                <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Summer internships in cybersecurity or full-stack development</p>
            </div>
            <div class="space-y-2">
                <h4 class="font-medium transition-colors" :class="isDark ? 'text-orange-400' : 'text-orange-600'">🎓 Mentorship</h4>
                <p class="text-sm transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Guidance from experienced professionals in security research</p>
            </div>
        </div>
    </div>
</div>
`;

// Add template to global scope
window.contactTemplate = contactTemplate;
