<template>
  <div class="product">
    <h2>Product {{productNumber}}</h2>
    <p>Here you can read about the product</p>
  </div>
</template>


<script>
  export default {
    name: 'product',
    data() {
      return {
        productNumber: 1
      }
    }
  }
</script>

<style scoped>

</style>
