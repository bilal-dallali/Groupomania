<script>
export default {
    name: "LoginPage",
    /*
    data() {
        return {
            username: "",
            password: "",
            error: ""
        }
    },
    methods: {
        login() {
            if (this.username === "admin" && this.password === "admin") {
                this.$router.push("/")
            } else {
                this.error = "Invalid credentials"
            }
        }
    }*/
}
</script>

<template>
    <main class="form-signin">
        <form>
        <img class="mb-2 d-block mx-auto main-logo" src="../../images/icon.svg" alt="main logo">
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="username">
            <label for="username">Username</label>
        </div>

        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="email">
            <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
    </main>
</template>


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

@media (min-width: 768px) {
    .bd-placeholder-img-lg 
    {
      font-size: 3.5rem;
    }
}
</style>