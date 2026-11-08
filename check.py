with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO/templates/home.js', 'r', encoding='utf-8') as f:
    content = f.read()

print('category-group in content:', 'category-group' in content)
print('gh-heatmap-section in content:', 'gh-heatmap-section' in content)
print('About Me in content:', 'About Me' in content)
print('Building secure in content:', 'Building secure' in content)

idx1 = content.find('class="category-group"')
idx2 = content.find('<section id="gh-heatmap-section"')
print('category-group at index:', idx1)
print('heatmap-section at index:', idx2)

if idx1 >= 0 and idx2 >= 0:
    print('Heatmap after category-group:', idx2 > idx1)
else:
    print('Could not compare positions')

# Also check the section order more carefully
# Find all section tags
import re
sections = re.findall(r'<section[^>]*>', content)
print('Total section tags found:', len(sections))
for i, s in enumerate(sections):
    if 'Skills' in s or 'gh-heatmap' in s:
        print('Section', i, ':', s[:80])