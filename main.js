const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isAnagram(s, t) {
    // If the lengths of the strings are not the same, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Create frequency maps for both strings
    const frequencyS = {};
    const frequencyT = {};

    // Populate frequency map for string s
    for (let char of s) {
        frequencyS[char] = (frequencyS[char] || 0) + 1;
    }

    // Populate frequency map for string t
    for (let char of t) {
        frequencyT[char] = (frequencyT[char] || 0) + 1;
    }

    // Compare frequency maps
    for (let char in frequencyS) {
        if (frequencyS[char] !== frequencyT[char]) {
            return false;
        }
    }

    return true;
}

rl.question('Enter string s: ', (s) => {
    rl.question('Enter string t: ', (t) => {
        const result = isAnagram(s, t);
        console.log(`"${s}" and "${t}" are anagrams: ${result}`);
        rl.close();
    });
});
