# PXL Test 
This is a test code sample for PXLWidgets.
It is a two part test. 
1. Anagram Program
2. Museum Site

[Link to Test](/)

## Anagram Program 
The program should take a list of any number of strings and determines which words in the list are exact anagrams of each other. 
1. Users to see a list of at least 100 dog images by default when they load the application.  
2. Users be able to click on a dog image and be routed to a page where there’s more information about the dog.
3. Users should be able to search for a dog via their breeds.

### The SPA is expected to have:
1. The application should mandatorily use a state machine (use Vuex).
2. Good loading indicator or mechanism on the SPA so that users can know that they are expecting a response instead of a blank page.
3. Lazy loading of the images (In simple & clear terms, images that the user can’t see shouldn’t be loaded until the user scrolls down to them)
4. Client-side caching to avoid multiple round trips to the server API.
5. The application should be responsive.
6. The codebase should be component based, clean, maintainable and reusable.
7. The application should have a very neat and decent UI.

#### Issues Encountered 
1. The api that generates random images regardless of the breed has a maximum amount of 50 as the number of random images it can send. I refactored the application to load a default breed so I could fetch 100 images.

## Working Demo  
This [application](https://amazing-pare-62e287.netlify.app/) is hosted on Netlify.

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
### Image Loader 
[VueClazy](https://github.com/matheusgrieger/vue-clazy-load/blob/d8a99185ea7e84e6288f5531a9bc5150c5f70081/example/assets/css/main.css) was used to monitor when the image loaded fully.
