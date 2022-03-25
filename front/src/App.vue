<script>
import LoginPage from "./pages/LoginPage.vue"
import RegisterPage from "./pages/RegisterPage.vue"
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
body
{
  background-color: #5f5f5f1a !important;
}
</style>
