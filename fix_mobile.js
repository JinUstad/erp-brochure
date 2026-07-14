const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace exact class names with responsive variants
content = content.replace(/\bp-12\b/g, 'p-6 md:p-12');
content = content.replace(/\bp-8\b/g, 'p-5 md:p-8');
content = content.replace(/\bp-6\b/g, 'p-4 md:p-6');
content = content.replace(/\btext-6xl\b/g, 'text-4xl md:text-6xl');
content = content.replace(/\btext-5xl\b/g, 'text-3xl md:text-5xl');
content = content.replace(/\btext-4xl\b/g, 'text-2xl md:text-4xl');
content = content.replace(/\bsm:grid-cols-2 lg:grid-cols-4\b/g, 'md:grid-cols-2 lg:grid-cols-4');
content = content.replace(/\bsm:grid-cols-2 md:grid-cols-3\b/g, 'md:grid-cols-2 lg:grid-cols-3');
content = content.replace(/\btext-3xl\b/g, 'text-2xl md:text-3xl'); // Specifically for the prices and stats
// The stats are "text-3xl font-bold" -> "text-2xl md:text-3xl font-bold"

// Wait, text-3xl md:text-5xl contains text-3xl, so the second regex might replace it again!
// Let's do it carefully.
let newContent = fs.readFileSync(filePath, 'utf8');

const replacements = [
  { regex: /\bp-12\b/g, replacement: 'p-6 md:p-12' },
  { regex: /\bp-8\b/g, replacement: 'p-5 md:p-8' },
  // Let's not touch p-6 globally to avoid messing up small elements, but p-6 is mostly cards
  { regex: /\btext-6xl\b/g, replacement: 'text-4xl md:text-6xl' },
  { regex: /\btext-5xl\b/g, replacement: 'text-3xl md:text-5xl' },
  { regex: /\btext-4xl\b/g, replacement: 'text-2xl md:text-4xl' },
  { regex: /\bsm:grid-cols-2\b/g, replacement: 'md:grid-cols-2' }, // upgrading sm breakpoints to md to ensure 1 column on all phones
];

replacements.forEach(({ regex, replacement }) => {
  newContent = newContent.replace(regex, replacement);
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully updated page.tsx with responsive classes.');
