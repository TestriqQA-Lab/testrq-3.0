const fs = require('fs');
const content = fs.readFileSync('src/components/seo/StructuredData.tsx', 'utf-8');
const matches = [...content.matchAll(/export const (\w+)/g)];
console.log('Total exports:', matches.length);
matches.forEach(m => console.log(m[1]));
