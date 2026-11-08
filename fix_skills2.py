import re

with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO/templates/home.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Old skills section - the grid format with h4/p tags (lines 94-106)
old_skills = '''<section>
                <h2 class="text-lg sm:text-xl font-bold mb-3 md:mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">Skills</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm cursor-interactive">
                    <div><h4 class="font-medium mb-1 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Languages</h4><p class="leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Java &middot; Python &middot; JavaScript/TypeScript (ES6+) &middot; SQL</p></div>
                    <div><h4 class="font-medium mb-1 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Core Java & DSA</h4><p class="leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">OOP, Collections, Exception Handling, JDBC, Multithreading & Concurrency, DI, Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Hashing, Sorting, Searching</p></div>
                    <div><h4 class="font-medium mb-1 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">AI / ML</h4><p class="leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">scikit-learn, TensorFlow, YOLOv8, OpenCV, MediaPipe, NumPy, EDA, Feature Engineering, Cross-Validation</p></div>
                    <div><h4 class="font-medium mb-1 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Databases</h4><p class="leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">MySQL, PostgreSQL, SQL Server, MongoDB, Normalization, Query Optimization</p></div>
                    <div><h4 class="font-medium mb-1 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Frontend</h4><p class="leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">React.js, HTML5, CSS3, Tailwind CSS, Vite, TypeScript</p></div>
                    <div><h4 class="font-medium mb-1 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Tools & Cloud</h4><p class="leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Git, GitHub, Maven, Postman, Docker, Playwright, Azure (ML Studio, Data Factory), Burp Suite, OWASP ZAP</p></div>
                    <div><h4 class="font-medium mb-1 transition-colors" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Practices</h4><p class="leading-relaxed transition-colors" :class="isDark ? 'text-gray-400' : 'text-gray-600'">SDLC, Agile/Scrum, Debugging, JUnit, Regression Testing, API Documentation, OWASP Top 10</p></div>
                </div>
            </section>'''

# New skills section - category-group format with skill-badge items matching resume exactly
new_skills = '''<section>
                <h2 class="text-lg sm:text-xl font-bold mb-3 md:mb-4 pb-2 border-b cursor-interactive transition-colors" :class="isDark ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'">Skills</h2>
                <div class="skills-container cursor-interactive">
                    <div class="category-group">
                        <h3 class="category-title text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Languages</h3>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="skill-icon" alt="Python"><span class="skill-name">Python</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.dev/gh/devicons/devicon/icons/java/java-original.svg" class="skill-icon" alt="Java"><span class="skill-name">Java</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="skill-icon" alt="JavaScript"><span class="skill-name">JavaScript</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sql/sql-original.svg" class="skill-icon" alt="SQL"><span class="skill-name">SQL</span></div>
                    </div>
                    <div class="category-group">
                        <h3 class="category-title text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Databases</h3>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="skill-icon" alt="MySQL"><span class="skill-name">MySQL</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.dev/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" class="skill-icon" alt="PostgreSQL"><span class="skill-name">PostgreSQL</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.dev/gh/devicons/devicon/icons/mssql/mssql-original.svg" class="skill-icon" alt="SQL Server"><span class="skill-name">SQL Server</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.dev/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" class="skill-icon" alt="MongoDB"><span class="skill-name">MongoDB</span></div>
                    </div>
                    <div class="category-group">
                        <h3 class="category-title text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Frontend</h3>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="skill-icon" alt="HTML5"><span class="skill-name">HTML5</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.dev/gh/devicons/devicon/icons/css3/css3-original.svg" class="skill-icon" alt="CSS3"><span class="skill-name">CSS3</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="skill-icon" alt="React.js"><span class="skill-name">React.js</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" class="skill-icon" alt="Tailwind CSS"><span class="skill-name">Tailwind CSS</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vite-original.svg" class="skill-icon" alt="Vite"><span class="skill-name">Vite</span></div>
                    </div>
                    <div class="category-group">
                        <h3 class="category-title text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Tools & Cloud</h3>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="skill-icon" alt="Git"><span class="skill-name">Git</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/github/github-original.svg" class="skill-icon" alt="GitHub"><span class="skill-name">GitHub</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" class="skill-icon" alt="Maven"><span class="skill-name">Maven</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" class="skill-icon" alt="Postman"><span class="skill-name">Postman</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="skill-icon" alt="Docker"><span class="skill-name">Docker</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright-playwright/playwright-original.svg" class="skill-icon" alt="Playwright"><span class="skill-name">Playwright</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft-azure/microsoft-azure-original.svg" class="skill-icon" alt="Azure ML Studio"><span class="skill-name">Azure ML Studio</span></div>
                        <div class="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure-data-factory/azure-data-factory-original.svg" class="skill-icon" alt="Azure Data Factory"><span class="skill-name">Azure Data Factory</span></div>
                        <div class="skill-badge"><svg class="skill-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/><circle cx="12" cy="12" r="2"/></svg><span class="skill-name">Burp Suite</span></div>
                        <div class="skill-badge"><svg class="skill-icon" viewBox="0 0 32 32" fill="none"><defs><linearGradient id="burpGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1"/><stop offset="100%" style="stop-color:#e55527;stop-opacity:1"/></linearGradient></defs><circle cx="16" cy="16" r="14" fill="url(#burpGradient)" stroke="#d14420" stroke-width="1.5"/><rect x="10" y="11" width="12" height="10" rx="2" fill="white" opacity="0.95"/><rect x="12" y="13" width="8" height="2" fill="#ff6b35"/><rect x="12" y="16" width="6" height="1.5" fill="#ff6b35"/><rect x="12" y="18.5" width="4" height="1.5" fill="#ff6b35"/><circle cx="19" cy="14" r="1" fill="#ff6b35"/></svg><span class="skill-name">OWASP ZAP</span></div>
                    </div>
                    <div class="category-group">
                        <h3 class="category-title text-sm font-medium mb-2 transition-colors" :class="isDark ? 'text-gray-300' : 'text-gray-600'">Practices</h3>
                        <div class="skill-badge"><span class="skill-icon-text">SDLC</span></div>
                        <div class="skill-badge"><span class="skill-icon-text">Agile/Scrum</span></div>
                        <div class="skill-badge"><span class="skill-icon-text">Debugging</span></div>
                        <div class="skill-badge"><span class="skill-icon-text">JUnit</span></div>
                        <div class="skill-badge"><span class="skill-icon-text">Regression Testing</span></div>
                        <div class="skill-badge"><span class="skill-icon-text">API Documentation</span></div>
                        <div class="skill-badge"><span class="skill-icon-text">OWASP Top 10</span></div>
                    </div>
                </div>
            </section>'''

if old_skills in content:
    new_content = content.replace(old_skills, new_skills)
    with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO/templates/home.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Skills section replaced successfully')
else:
    print('ERROR: Could not find old skills section')
    # Debug: find skills section
    idx = content.find('class="grid grid-cols-1 md:grid-cols-2')
    if idx >= 0:
        print(f'Found grid format at index {idx}')
        print(content[idx:idx+600])
    else:
        idx2 = content.find('Skills</h2>')
        if idx2 >= 0:
            print(f'Found Skills h2 at index {idx2}')