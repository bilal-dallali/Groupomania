<template>
    <main class="form-signin">
        <form>
        <img class="mb-2 d-block mx-auto main-logo" src="../../images/icon.svg" alt="main logo">
        <h1 class="h3 mb-3 fw-normal" v-if="mode == 'login'">Please sign in</h1>
        <h1 class="h3 mb-3 fw-normal" v-if="mode == 'create'">Please register</h1>

        <p class="create-account" v-if="mode == 'login'">Don't have an acccount ?
          <span @click="switchToCreateAccount()">
            Create an account
          </span>
        </p>

        <p class="create-account" v-else>Already have an account ?
          <span @click="switchToLogin()">
            Sign in
          </span>
        </p>

        <div class="form-floating" v-if="mode == 'create'">
            <input v-model="username" name="username" type="text" class="form-control" id="floatingInput" placeholder="username">
            <label for="floatingInput">Username</label>
        </div>

        <div class="form-floating">
            <input v-model="email" name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating">
            <input v-model="password" name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>

        <div class="form-floating" v-if="mode == 'login' && status == 'error_login'">
          invalid email address or password
        </div>
        <div class="form-floating" v-if="mode == 'create' && status == 'error_create'">
          invalid email already used
        </div>
<!--
        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        -->
        <button v-on:click="login()" class="w-100 btn btn-lg btn-primary" :class="{'disabled' : !validatedFields}" type="submit" v-if="mode == 'login'">
          <span v-if="status == 'loading'">Signing in...</span>
          <span v-else>Sign in</span>
        </button>

        <button @click="createAccount()" class="w-100 btn btn-lg btn-primary" :class="{'disabled' : !validatedFields}" type="submit" v-else>
          <span v-if="status == 'loading'">Creating an account</span>
          <span v-else>Create account</span>
        </button>
<!--
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        -->
        </form>
    </main>
</template>



<script>
import { mapState } from 'vuex'
import axios from "axios"

export default {
    name: "LoginPage",
    data: function() {
      return {
        mode: "login",
        email: "",
        username: "",
        password: "",
      }
    },
    computed: {
      validatedFields: function() {
        if (this.mode == 'create') {
          if (this.email != "" && this.username != "" && this.password != "") {
            return true
          } else {
            return false
          }
        } else {
          if (this.email != "" && this.password != "") {
            return true
          } else {
            return false
          }
        }
      },
      //...mapState(['status'])
    },
    methods: {
      switchToCreateAccount: function() {
        this.mode = 'create'
      },
      switchToLogin: function() {
        this.mode = 'login'
      },
      //login() {
      //  if (this.email === "admin@contact.com" && this.password === "admin") {
      //    this.$router.push("/")
      //  } else {
      //    this.error = "Invalid credentials"
      //  }
      //},
      login: function() {
        axios.post("http://localhost:3001/users/login", {
          email: "obiwan.kenobi@gmail.com",
          password: "highground"
        }).then(response => console.log(response))
      },
      
      
    },
    mounted() {
      axios.get("http://localhost:3001/users/login")
      .then(Response => {
        console.log(Response)
      })
    }
}
</script>


<style>
html,
body
{
  height: 100%;
}

body
{
  align-items: center;
  padding-bottom: 40px;
}

.main-logo
{
  width: 120px;
  height: 120px;
}

.form-signin 
{
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox
{
  font-weight: 400;
}

.form-signin .form-floating:focus-within
{
  z-index: 2;
}

.form-signin input[type="email"]
{
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"]
{
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img 
{
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.create-account
{
  font-size: 14px;
}

.create-account span
{
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}


@media (min-width: 768px) {
    .bd-placeholder-img-lg 
    {
      font-size: 3.5rem;
    }
}
</style>