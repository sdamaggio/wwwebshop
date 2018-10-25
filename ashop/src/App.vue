<template>
  <div id="app">
    <img src="./assets/logo.png">
    <home></home>
  </div>
</template>

<script>
import Home from './components/HomeItem.vue'
import Shop from './components/ShopItem.vue'
import Contacts from './components/ContactsItem.vue'
import Admin from './components/AdminItem.vue'
import Product from './components/ProductItem.vue'

export default {
  name: 'app',
  components: {
    Home,
    Shop,
    Contacts,
    Admin,
    Product
  }
}
</script>

<style scoped>

</style>
