'use strict';
console.log("Hello this works");
var inputs = ['rope', 'pore', 'repo', 'red rum', 'murder', 'listen', 'silent', 'endeavour',];
function groupAnagrams(words) {
    var exactAnagram = {}, groupedAnagrams = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        // change each word to lowercase 
        // remove spaces 
        //  rearrange the alphabets and join
        var characters = word.toLowerCase().replace(/[^a-z\d]/g, "").split('').sort().join('');
        //  crating a key value pair of the characters
        // since the characters have arranged it means only one key would be created 
        // regardless of the number of times it appears. 
        // if the key already exists push an empty araay 
        exactAnagram[characters] = exactAnagram[characters] || [];
        // add the original word to the arranged characters
        exactAnagram[characters].push(word);
    }
    for (var ea in exactAnagram) {
        groupedAnagrams.push(exactAnagram[ea]);
    }
    return groupedAnagrams;
}
console.table(groupAnagrams(inputs));
