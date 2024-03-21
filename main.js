const prompt = require('prompt-sync')();

const s = prompt('Enter string s: ');
const t = prompt('Enter string t: ');

const sortedS = s.split('').sort().join('');
const sortedT = t.split('').sort().join('');

console.log(`"${s}" and "${t}" are ${sortedS === sortedT ? 'anagrams' : 'not anagrams'}.`);
