const fs = require('fs');
let data = fs.readFileSync('src/data/packages.ts', 'utf8');
data = data.replace(/id: "(.*?)",/g, 'id: "$1",\n    slug: "$1",\n    faqs: [],');
fs.writeFileSync('src/data/packages.ts', data);
console.log('Fixed packages.ts');
