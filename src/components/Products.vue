<!-- src/components/Products.vue -->
<template>
    <div>
      <h2>Products</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Apple', price: '$1.00' },
          { id: 2, name: 'Carrot', price: '$0.50' },
          // ... other products
        ],
      };
    },
  };
  </script>
  