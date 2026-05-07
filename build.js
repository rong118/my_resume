const fs = require('fs');
const path = require('path');

if (!fs.existsSync('docs')) fs.mkdirSync('docs');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

copyDir('public/css', 'docs/css');
copyDir('public/images', 'docs/images');
fs.copyFileSync('public/terminal-full-animation.html', 'docs/index.html');
console.log('Built docs/ for GitHub Pages deployment.');
