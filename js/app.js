// Main Vue.js Application Logic
const { createApp, ref, onMounted, computed, provide, inject } = Vue;

// Define Components using imported templates
const HomeComponent = { 
    template: window.homeTemplate,
    setup() {
        const experienceTab = ref('work');
        const isDark = inject('isDark');
        
        // Avatar reveal state - SIMPLIFIED
        const avatarRevealing = ref(false);
        const avatarTransformed = ref(false);
        const isOnCooldown = ref(false);
        
        const triggerAvatarReveal = () => {
            if (isOnCooldown.value) return;
            
            isOnCooldown.value = true;
            avatarRevealing.value = true;
            
            // Start animation
            setTimeout(() => {
                avatarTransformed.value = !avatarTransformed.value;
                avatarRevealing.value = false;
                
                // Keep cooldown for 4 seconds after transformation
                setTimeout(() => {
                    isOnCooldown.value = false;
                }, 1000);
            }, 800); // Short animation time
        };
        
        const onRevealComplete = () => {
            // Not needed anymore - using setTimeout instead
        };
        
        return { 
            experienceTab, 
            isDark,
            avatarRevealing,
            avatarTransformed,
            isOnCooldown,
            triggerAvatarReveal,
            onRevealComplete
        };
    }
};

const ProjectsComponent = { 
    template: window.projectsTemplate || '<div>Projects template not loaded</div>',
    setup() {
        const isDark = inject('isDark');
        console.log('ProjectsComponent mounted, isDark:', isDark);
        return { isDark };
    }
};

const ResumeComponent = { 
    template: window.resumeTemplate,
    setup() {
        const isDark = inject('isDark');
        return { isDark };
    }
};

const ContactComponent = {
    template: window.contactTemplate,
    setup() {
        const showPopup = inject('showPopup');
        const isDark = inject('isDark');
        
        // Contact form state
        const contactForm = ref({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        const isFormSubmitting = ref(false);
        const formMessage = ref(null);

        const sendMessage = async () => {
            isFormSubmitting.value = true;
            formMessage.value = null;
            
            try {
                // Create form data for Google Forms submission
                const formData = new FormData();
                formData.append('entry.257900800', contactForm.value.name);
                formData.append('entry.1637310755', contactForm.value.email);
                formData.append('entry.2141632832', contactForm.value.message);
                
                // Submit to Google Forms (using fetch with no-cors mode)
                await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSd1VGfIJytEIIcfFz75P_2B_IpBcyCEKO4bPQO1SS0l4GQUOw/formResponse', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });
                
                // Show success popup
                showPopup.value = true;
                
                // Auto-hide popup after 3 seconds
                setTimeout(() => {
                    showPopup.value = false;
                }, 3000);
                
                // Reset form
                contactForm.value = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
                
            } catch (error) {
                console.error('Form submission error:', error);
                // Still show success popup since Google Forms submission might succeed even if we can't verify
                showPopup.value = true;
                
                // Auto-hide popup after 3 seconds
                setTimeout(() => {
                    showPopup.value = false;
                }, 3000);
                
                // Reset form
                contactForm.value = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
            } finally {
                isFormSubmitting.value = false;
            }
        };

        // Add new method for the form submission
        const submitContactForm = sendMessage;

        return { 
            contactForm, 
            isFormSubmitting, 
            formMessage, 
            sendMessage,
            submitContactForm, 
            isDark 
        };
    }
};

// Main App Setup
const app = createApp({
    components: {
        HomeComponent,
        ProjectsComponent,
        ResumeComponent,
        ContactComponent
    },
    setup() {
        // --- STATE ---
        const currentSection = ref('home');
        const portfolioCard = ref(null);
        const cursorDot = ref(null);
        const isDesktop = ref(false);
        const showPopup = ref(false);
        
        // Initialize theme from localStorage or default to dark mode
        const getInitialTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            // Default to dark mode for all new users
            return true;
        };
        
        const isDark = ref(getInitialTheme());

        // Provide the state to child components
        provide('showPopup', showPopup);
        provide('isDark', isDark);

        // --- COMPUTED ---
        const currentSectionComponent = computed(() => {
            switch (currentSection.value) {
                case 'projects': return ProjectsComponent;
                case 'resume': return ResumeComponent;
                case 'contact': return ContactComponent;
                default: return HomeComponent;
            }
        });

        // --- METHODS ---
        const switchSection = (section) => {
            currentSection.value = section;
            
            // Update active nav link class
            setTimeout(() => {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector(`.nav-link[href="#"]:contains("${section.toUpperCase()}")`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }, 0);
            
            // Trigger different title animations based on section
            if (window.animatedTitle) {
                const animationType = {
                    'home': 'sparkle',
                    'projects': 'typewriter', 
                    'resume': 'pulse',
                    'contact': 'sparkle'
                }[section] || 'pulse';
                
                window.animatedTitle.triggerSpecialAnimation(animationType);
            }
        };

        const toggleTheme = () => {
            isDark.value = !isDark.value;
            document.body.className = isDark.value ? 'dark-theme w-full min-h-screen p-4 sm:p-8 md:p-16 isolate' : 'light-theme w-full min-h-screen p-4 sm:p-8 md:p-16 isolate';
            localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
            
            // Update canvas theme if it exists
            if (window.canvasAnimation) {
                window.canvasAnimation.updateTheme(isDark.value);
            }
            
            // Trigger special title animation on theme change
            if (window.animatedTitle) {
                window.animatedTitle.triggerSpecialAnimation('pulse');
            }
        };

        return {
            currentSection,
            portfolioCard,
            cursorDot,
            currentSectionComponent,
            switchSection,
            toggleTheme,
            isDark,
            showPopup,
        };
    }
});

// Initialize the app
app.mount('#app');
