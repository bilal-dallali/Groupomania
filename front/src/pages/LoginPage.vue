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

        <div>{{loginMessage}}</div>

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

        <div class="form-floating invalid mb-2" v-if="mode == 'login'">
          <!--invalid email address or password-->
          {{ invalidLogin }}
        </div>

        <div class="form-floating invalid mb-2" v-if="mode == 'create'">
          <!--invalid email already used-->
          {{ invalidRegister }}
        </div>

        <button @click.prevent="login()" class="w-100 btn btn-lg btn-primary" :class="{'disabled' : !validatedFields}" type="submit" v-if="mode == 'login'">
          Sign in
        </button>

        <button @click.prevent="register()" class="w-100 btn btn-lg btn-primary" :class="{'disabled' : !validatedFields}" type="submit" v-else>
          <span v-if="status == 'loading'">Creating an account</span>
          <span v-else>Create account</span>
        </button>

        </form>
    </main>
</template>



<script>
import axios from "axios"

export default {
    name: "LoginPage",
    data: function() {
      return {
        mode: "login",
        email: "",
        username: "",
        password: "",
        invalidLogin: "",
        invalidRegister: "",
        loginMessage: ""
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
    },
    methods: {
      switchToCreateAccount: function() {
        this.mode = 'create'
      },
      switchToLogin: function() {
        this.mode = 'login'
      },
      register: async function() {
        const response = await axios.post("http://localhost:3001/users/signup", {
          username: this.username,
          email: this.email,
          password: this.password
        })
        if(this.username == "" && this.email == "" && this.password == "") {
          console.log("Something went wrong")
        } else {
          window.location.href = ('login')
          this.loginMessage = "account created you can login now"
        }
      },
      login: async function() {
        const response = await axios.post("http://localhost:3001/users/login", {
          email: this.email,
          password: this.password
        })
        if (!response.data.token) {
          this.invalidLogin = "Invalid email address or password !"
        } else {
          this.$router.push("/")
        }
        localStorage.clear()
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("username", response.data.result[0].username)
        localStorage.setItem("email", response.data.email)
        localStorage.setItem("id", response.data.result[0].id)
        localStorage.setItem("phone", response.data.result[0].phone)
        localStorage.setItem("job", response.data.result[0].job)
        localStorage.setItem("website", response.data.result[0].website)
        localStorage.setItem("github", response.data.result[0].github)
        localStorage.setItem("linkedin", response.data.result[0].linkedin)
        localStorage.setItem("file", response.data.result[0].file)
      },
    },
    mounted() {
      
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

.invalid
{
  color: red;
  font-weight: 500;
  font-size: 0.8rem;
}


@media (min-width: 768px) {
    .bd-placeholder-img-lg 
    {
      font-size: 3.5rem;
    }
}
</style>