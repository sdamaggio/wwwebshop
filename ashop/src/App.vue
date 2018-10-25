<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <home></home>
    <contacts></contacts>
  </div>
</template>

<script>
import Home from './components/HomeItem.vue'
import Contacts from './components/ContactsItem.vue'

export default {
  name: 'app',
  components: {
    Home,
    Contacts
  }
}
</script>

<style scoped>

</style>
