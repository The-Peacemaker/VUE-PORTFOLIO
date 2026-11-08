with open('C:\\Users\\bened\\Documents\\VUE-PORTFOLIO/templates/home.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find('class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm cursor-interactive"')
if idx >= 0:
    print('Found at index:', idx)
    print(content[idx:idx+650])
else:
    print('Not found')