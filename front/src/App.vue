<script>
import LoginPage from "./pages/LoginPage.vue"
import Navbar from "./components/layout/Navbar.vue"

export default {
  name: "App",
  components: {
    LoginPage,
    Navbar
  }
}
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style>

</style>
