# PXL Test 
This is a test code sample for PXLWidgets.
It is a two part test. 
1. Anagram Program
2. Museum Site

[Link to Demo](https://laughing-newton-8ef95f.netlify.app/anagram)

## Anagram Program 
The program should take a list of any number of strings and determines which words in the list are exact anagrams of each other.

### Approach 
1. Change each word to lowercase, remove spaces, rearrange the alphabets and join.
2. Creating a key value pair of the characters, the characters are arranged so one key will be created regardless of the number of times it appears.
3. The anagrams will be returned.

## Museum Site
A simple application to display data fetched from the Rijksmuseum API.

### The Museum site has:
1. A state (using Vuex), client-side caching to avoid multiple round trips to the server API.
2. The site is responsive.
3. The application has a very neat and decent UI.
4. Used loadash library for the order by function.

#### Issues Encountered 
1. The best way to use the library as I have never used the loadash library before
2. Focused on the UI as my strong point is `front of the front end`
3. Had issues building on Netlify, so I had to build on local first.

## Working Demo  
This [application](https://laughing-newton-8ef95f.netlify.app/anagram) is hosted on Netlify.

## Project setup on local
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Lints and fixes files
```
npm run lint
```
