with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO/templates/home.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Check 1: About Me section starts with 'Building secure'
idx = content.find('<p>Building secure')
if idx >= 0:
    print('Fix #1: About Me starts with building secure text')
else:
    print('Fix #1 MISSING: About Me does not start with building secure text')

# Check 2: Skills section has category-group
idx = content.find('class="category-group"')
if idx >= 0:
    print('Fix #2: Skills section has category-group format')
else:
    print('Fix #2 MISSING: Skills section does not have category-group')

# Check 3: Heatmap at bottom after Skills
skills_idx = content.find('<section>')
heatmap_idx = content.find('<section id="gh-heatmap-section"')
if heatmap_idx > skills_idx:
    print('Fix #3: Heatmap section is after Skills section')
else:
    print('Fix #3 MISSING: Heatmap not after Skills')

# Check 4: CSS classes
with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO\\css\\styles.css', 'r') as f:
    css = f.read()
for cls in ['.category-group', '.category-title', '.gh-cell', '.gh-heatmap-section']:
    if cls in css:
        print('Fix #4: CSS class ' + cls + ' found')
    else:
        print('Fix #4 MISSING: CSS class ' + cls + ' not found')

# Check 5: No duplication of hero text in About Me section
about_me_start = content.find('<h2>About Me</h2>')
hero_text_pos = content.find('Final-year B.Tech CSE student')
if about_me_start >= 0 and hero_text_pos >= 0:
    if hero_text_pos > about_me_start:
        print('Fix #5 MISSING: Hero text appears in About Me section (duplicated)')
    else:
        print('Fix #5: Hero text NOT duplicated in About Me section')
else:
    print('Fix #5?: Could not verify duplication')