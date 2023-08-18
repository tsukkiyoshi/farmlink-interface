// src/store/store.js
import axios from 'axios';

// ... (other imports and setup)

export default new Vuex.Store({
  // ... (other store properties)

  actions: {
    async fetchFarmers({ commit }) {
      try {
        const response = await axios.get('/api/farmers'); // Replace with your API endpoint
        commit('SET_FARMERS', response.data);
      } catch (error) {
        console.error('Error fetching farmers:', error);
      }
    },
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('/api/products'); // Replace with your API endpoint
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
});
