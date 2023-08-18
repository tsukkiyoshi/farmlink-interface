<template>
    <div>
      <h2>Farmers</h2>
      <ul>
        <li v-for="farmer in farmers" :key="farmer.id">
          {{ farmer.name }} - {{ farmer.location }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getFarmers']),
    },
    created() {
      this.$store.dispatch('fetchFarmers');
    },
  };
  </script>
  