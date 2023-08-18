// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    farmers: [],
    products: [],
  },
  mutations: {
    SET_FARMERS(state, farmers) {
      state.farmers = farmers;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchFarmers({ commit }) {
      // Simulate fetching data from API
      const farmers = [
        { id: 1, name: 'Farm A', location: 'City A' },
        { id: 2, name: 'Farm B', location: 'City B' },
        // ... other farmers
      ];
      commit('SET_FARMERS', farmers);
    },
    fetchProducts({ commit }) {
      // Simulate fetching data from API
      const products = [
        { id: 1, name: 'Apple', price: '$1.00' },
        { id: 2, name: 'Carrot', price: '$0.50' },
        // ... other products
      ];
      commit('SET_PRODUCTS', products);
    },
  },
  getters: {
    getFarmers(state) {
      return state.farmers;
    },
    getProducts(state) {
      return state.products;
    },
  },
});
