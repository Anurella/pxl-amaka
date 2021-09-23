'use strict';

console.log("Hello this works");

let inputs: string[] = ['rope', 'pore', 'repo', 'red rum', 'murder', 'listen', 'silent', 'endeavour',];

function groupAnagrams(words: string[]): string[] {

    let exactAnagram: {} = {},
        groupedAnagrams = [];

    for (let word of words) {
        // change each word to lowercase 
        // remove spaces 
        //  rearrange the alphabets and join
        let characters = word.toLowerCase().replace(/[^a-z\d]/g, "").split('').sort().join('');
        //  creating a key value pair of the characters
        // since the characters have arranged it means only one key would be created 
        // regardless of the number of times it appears. 
        // if the key already exists push an empty araay 
        exactAnagram[characters] = exactAnagram[characters] || [];
        // add the original word to the arranged characters
        exactAnagram[characters].push(word);
    }
    for (let ea in exactAnagram) {
        groupedAnagrams.push(exactAnagram[ea]);
    }
    return groupedAnagrams;
}

console.table(groupAnagrams(inputs));