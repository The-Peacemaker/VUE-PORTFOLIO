// Main Vue.js Application Logic
const { createApp, ref, onMounted, computed, provide, inject } = Vue;

// Define Components using imported templates
const HomeComponent = { 
    template: window.homeTemplate,
    setup() {
        const experienceTab = ref('work');
        const isDark = inject('isDark');
        return { experienceTab, isDark };
    }
};

const ProjectsComponent = { 
    template: window.projectsTemplate,
    setup() {
        const isDark = inject('isDark');
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
                // Simulate form submission (replace with actual API call)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Reset form
                contactForm.value = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
                
                formMessage.value = {
                    type: 'success',
                    text: 'Message sent successfully! I\'ll get back to you soon.'
                };
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    formMessage.value = null;
                }, 5000);
                
            } catch (error) {
                formMessage.value = {
                    type: 'error',
                    text: 'Failed to send message. Please try again or contact me directly.'
                };
            } finally {
                isFormSubmitting.value = false;
            }
        };

        return { 
            contactForm, 
            isFormSubmitting, 
            formMessage, 
            sendMessage, 
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
        const isDark = ref(false);

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
        };

        const toggleTheme = () => {
            isDark.value = !isDark.value;
            document.body.className = isDark.value ? 'dark-theme w-full min-h-screen p-4 sm:p-8 md:p-16 isolate' : 'light-theme w-full min-h-screen p-4 sm:p-8 md:p-16 isolate';
            localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
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
