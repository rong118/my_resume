const ejs = require('ejs');
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

ejs.renderFile('views/index.ejs', {}, {}, (err, html) => {
  if (err) throw err;
  fs.writeFileSync('docs/index.html', html);
  console.log('Generated docs/index.html');
});

copyDir('public/css', 'docs/css');
copyDir('public/images', 'docs/images');
console.log('Copied assets to docs/');
