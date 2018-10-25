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

export default {
  name: 'app',
  components: {
    Home,
    Shop,
    Contacts
  }
}
</script>

<style scoped>

</style>
