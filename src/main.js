import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { injectGlobal } from 'vue-styled-components';
import './assets/scss/old.scss';

injectGlobal`
        @charset "utf-8";

        *,
        *::before,
        *::after {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            position: relative;
        }

        body {
            min-height: 100vh;
            scroll-behavior: smooth;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
            height: 100%;
            font-display: swap;
            margin: 0;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        ul,
        ol,
        li,
        p,
        pre,
        blockquote,
        figure,
        figcaption,
        hr,
        dl,
        dd {
            margin: 0;
            padding: 0
        }

        ul {
            list-style: none
        }

        a {
            text-decoration: none
        }

        input,
        textarea,
        select,
        button {
            color: inherit;
            font: inherit;
            letter-spacing: inherit;
            padding: 0;
        }

        *,
        button:active,
        button:visited,
        button:focus {
            outline: none;
            border: none
        }

        img {
            display: block;
            max-width: 100%
        }

        [hidden] {
            opacity: 0;
            visibility: hidden
        }

        noscript {
            display: block;
            margin-bottom: 1em;
            margin-top: 1em
        }

        select {
            -webkit-appearance: none;
            -moz-appearance: none;
        }

        select::-ms-expand {
            display: none;
        }

        [tabindex="-1"] {
            outline: none !important
        }

        @media(prefers-reduced-motion:reduce),
        (update: slow) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important
            }
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: auto;
            margin: 0;
            padding: 0;
            border: 0;
            clip: rect(0 0 0 0);
            overflow: hidden;
            white-space: nowrap
        }

        .clearfix::after {
            content: " ";
            display: block;
            clear: both
        }

        .clearfix {
            display: flow-root
        }

        :root {
            --white: hsl(0, 0%, 100%);
            --black: hsl(0, 0%, 7%);
            --grash-100: hsl(90, 12%, 10%);
            --grash-200: hsl(90, 43%, 30%);
            --grash-300: hsl(90, 93%, 24%);
            --grash-400: hsl(90, 20%, 75%);
            --grash-500: hsl(96, 12%, 93%);
            --spacing-20: 20px;
            --spacing-10: 10px;
        }

        html, body {
        height: 100%;
    }

        html {
            font-size: clamp(14px, calc(.7rem + .35vw), 20px);
        }

        body {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            color: var(--grash-100);
        }

        a {
            color: inherit;
        }

        a:focus,
        button:focus {
            outline: 1px solid var(--grash-300);
            outline-offset: 2px;
        }
   
    
`;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
