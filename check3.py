with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO/templates/home.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all section tags with their positions
import re
for m in re.finditer(r'<section[^>]*>.*?</section>', content, re.DOTALL):
    start = m.start()
    end = m.end()
    section_text = content[start:end]
    # Get a summary
    summary = section_text[:100].replace('\n', ' ')
    print('Section at', start, '-', summary)
    if 'Skills' in section_text:
        print('  -> Contains Skills')
    if 'gh-heatmap-section' in section_text:
        print('  -> Contains heatmap-section')
    if 'category-group' in section_text:
        print('  -> Contains category-group')