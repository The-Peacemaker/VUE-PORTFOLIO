with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO/templates/home.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Print first 500 chars
print('First 500 chars:')
print(content[:500])
print()

# Search for category-group with different patterns
import re
# Find all text between <section> and </section>
sections = re.findall(r'<section>(.*?)</section>', content, re.DOTALL)
print('Found', len(sections), 'sections:')
for i, s in enumerate(sections):
    print('Section', i, 'starts with:', s[:60])
    if 'Skills' in s or 'category' in s.lower() or 'heatmap' in s.lower():
        print('  -> Contains Skills/category/heatmap')