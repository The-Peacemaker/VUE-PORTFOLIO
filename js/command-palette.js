class CommandPalette {
    constructor() {
        this.isOpen = false;
        this.commands = [];
        this.filteredCommands = [];
        this.selectedIndex = 0;
        this.overlay = null;
        this.input = null;
        this.list = null;
        this.launcher = null;
        this.init();
    }

    init() {
        this.buildUI();
        this.registerCommands();
        this.bindEvents();
        this.renderList();
    }

    registerCommands() {
        this.commands = [
            {
                title: 'Go: Home',
                description: 'Jump to your home section',
                keywords: 'home intro profile',
                action: () => window.portfolioActions?.goTo('home')
            },
            {
                title: 'Go: Projects',
                description: 'Open your project showcase',
                keywords: 'projects portfolio work',
                action: () => window.portfolioActions?.goTo('projects')
            },
            {
                title: 'Go: Resume',
                description: 'Open resume highlights',
                keywords: 'resume cv experience',
                action: () => window.portfolioActions?.goTo('resume')
            },
            {
                title: 'Go: Contact',
                description: 'Open contact form',
                keywords: 'contact mail message',
                action: () => window.portfolioActions?.goTo('contact')
            },
            {
                title: 'Theme: Toggle',
                description: 'Switch between dark and light mode',
                keywords: 'theme dark light mode',
                action: () => window.portfolioActions?.toggleTheme()
            },
            {
                title: 'Resume: Download',
                description: 'Download latest resume PDF',
                keywords: 'download resume pdf',
                action: () => window.portfolioActions?.downloadResume()
            },
            {
                title: 'Open: GitHub',
                description: 'Visit your GitHub profile',
                keywords: 'github code repos',
                action: () => window.open('https://github.com/The-Peacemaker', '_blank', 'noopener,noreferrer')
            },
            {
                title: 'Open: LinkedIn',
                description: 'Visit your LinkedIn profile',
                keywords: 'linkedin social',
                action: () => window.open('https://www.linkedin.com/in/benedict-chacko', '_blank', 'noopener,noreferrer')
            },
            {
                title: 'Open: KTU Calculator',
                description: 'Launch live CGPA calculator',
                keywords: 'ktu cgpa calculator live',
                action: () => window.open('https://ktucalculator.netlify.app/', '_blank', 'noopener,noreferrer')
            }
        ];

        this.filteredCommands = [...this.commands];
    }

    buildUI() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'cmdk-overlay';
        this.overlay.innerHTML = `
            <div class="cmdk-panel" role="dialog" aria-modal="true" aria-label="Portfolio Command Palette">
                <div class="cmdk-header">
                    <span class="cmdk-kicker">NEURAL DECK</span>
                    <span class="cmdk-shortcut">Ctrl + K</span>
                </div>
                <div class="cmdk-input-wrap">
                    <svg class="cmdk-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <circle cx="11" cy="11" r="7"></circle>
                        <path d="M21 21l-4.3-4.3"></path>
                    </svg>
                    <input class="cmdk-input" type="text" placeholder="Search commands, sections, actions..." autocomplete="off" />
                </div>
                <ul class="cmdk-list" role="listbox"></ul>
                <div class="cmdk-footer">Enter: run  •  Esc: close  •  Arrow keys: navigate</div>
            </div>
        `;

        document.body.appendChild(this.overlay);

        this.input = this.overlay.querySelector('.cmdk-input');
        this.list = this.overlay.querySelector('.cmdk-list');

        this.launcher = document.createElement('button');
        this.launcher.type = 'button';
        this.launcher.className = 'cmdk-launcher';
        this.launcher.setAttribute('aria-label', 'Open command palette');
        this.launcher.title = 'Open command palette';
        this.launcher.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M4 7h16"></path>
                <path d="M4 12h10"></path>
                <path d="M4 17h7"></path>
                <circle cx="18" cy="12" r="3"></circle>
            </svg>
        `;
        document.body.appendChild(this.launcher);
    }

    bindEvents() {
        document.addEventListener('keydown', (e) => {
            const isCommandK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k';
            if (isCommandK) {
                e.preventDefault();
                this.toggle();
                return;
            }

            if (!this.isOpen) return;

            if (e.key === 'Escape') {
                e.preventDefault();
                this.close();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredCommands.length - 1);
                this.renderList();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
                this.renderList();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                this.runSelected();
            }
        });

        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });

        this.launcher.addEventListener('click', () => this.toggle());

        this.input.addEventListener('input', () => {
            this.filterCommands(this.input.value.trim().toLowerCase());
        });
    }

    filterCommands(query) {
        if (!query) {
            this.filteredCommands = [...this.commands];
            this.selectedIndex = 0;
            this.renderList();
            return;
        }

        this.filteredCommands = this.commands.filter((command) => {
            const searchable = `${command.title} ${command.description} ${command.keywords}`.toLowerCase();
            return searchable.includes(query);
        });

        this.selectedIndex = 0;
        this.renderList();
    }

    runSelected() {
        const command = this.filteredCommands[this.selectedIndex];
        if (!command) return;

        command.action();
        this.close();
    }

    renderList() {
        if (!this.list) return;

        if (this.filteredCommands.length === 0) {
            this.list.innerHTML = '<li class="cmdk-empty">No commands found</li>';
            return;
        }

        this.list.innerHTML = this.filteredCommands
            .map((command, index) => {
                const activeClass = index === this.selectedIndex ? 'is-active' : '';
                return `
                    <li class="cmdk-item ${activeClass}" data-index="${index}" role="option" aria-selected="${index === this.selectedIndex}">
                        <div class="cmdk-item-title">${command.title}</div>
                        <div class="cmdk-item-desc">${command.description}</div>
                    </li>
                `;
            })
            .join('');

        this.list.querySelectorAll('.cmdk-item').forEach((item) => {
            item.addEventListener('mouseenter', () => {
                const idx = Number(item.getAttribute('data-index'));
                this.selectedIndex = idx;
                this.renderList();
            });

            item.addEventListener('click', () => {
                const idx = Number(item.getAttribute('data-index'));
                this.selectedIndex = idx;
                this.runSelected();
            });
        });
    }

    open() {
        this.isOpen = true;
        this.overlay.classList.add('is-open');
        this.input.value = '';
        this.filterCommands('');
        setTimeout(() => this.input.focus(), 10);
    }

    close() {
        this.isOpen = false;
        this.overlay.classList.remove('is-open');
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CommandPalette();
});
