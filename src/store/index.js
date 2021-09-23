import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersistence from 'vuex-persist'; // for cache

Vue.use(Vuex);

// using vue persist
// save the dogList
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({
        artCollection: state.artCollection,
    }),
});

let apiKey = process.env.VUE_APP_STUDIO_KEY;

export default new Vuex.Store({
    state: {
        artCollection: [],
    },
    plugins: [vuexLocal.plugin],
    getters: {
        curCollection(state) {
            return state.artCollection;
        },
    },
    mutations: {
        createCollection(state, list) {
            state.artCollection = list;
        },
        searchedCollection(state, list) {
            state.artCollection = list;
        },
        // initialiseList(state) {
        // }
    },
    actions: {
        async getCollection({ commit }) {
            try {
                let response = await axios.get(
                    `https://www.rijksmuseum.nl/api/en/collection/?key=${apiKey}&culture=en&imgonly=true&s&ps=12&p=0`
                );
                commit('createCollection', response.data);
            } catch (error) {
                console.log(error);
                commit('createCollection', []);
            }
        },
        async searchCollection({ commit }, criteria) {
            try {
                let response = await axios.get(
                    `https://www.rijksmuseum.nl/api/en/collection/?key=${apiKey}&culture=en&imgonly=true&q=${criteria}&s&ps=12&p=0`
                );
                commit('searchedCollection', response.data);
            } catch (error) {
                console.log(error);
                commit('searchedCollection', []);
            }
        },
        async getArtDetails({ context }, objNumber) {
            try {
                let response = await axios.get(
                    `https://www.rijksmuseum.nl/api/en/collection/${objNumber}?key=${apiKey}`
                );
                return response.data;
            } catch (error) {
                console.log(error);
                context;
            }
        },
    },
    modules: {},
});
