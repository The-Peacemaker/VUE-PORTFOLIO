with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO/templates/home.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Print the Skills section and what follows
idx = content.find('<section', 8679)
if idx >= 0:
    # Print from Skills section to end of file (or next major section)
    print(content[8679:12000] if len(content) > 12000 else content[8679:])