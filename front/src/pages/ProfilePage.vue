<script>
import axios from "axios"
export default {
    name: "ProfilePage",
    data: function() {
      return {
        username: "",
        website: "",
        github: "",
        linkedin: "",
        email: "",
        phone: "",
        job: "",
      }
    },
    created () {
      this.email = localStorage.getItem("email")
      this.username = localStorage.getItem("username")
      this.website = localStorage.getItem("website")
      this.github = localStorage.getItem("github")
      this.linkedin = localStorage.getItem("linkedin")
      this.phone = localStorage.getItem("phone")
      this.job = localStorage.getItem("job")
      this.file = localStorage.getItem("file")
    },
}
</script>

<template>
<div class="container">
    <div class="main-body">
          <div class="row gutters-sm">            
            <div class="card col-md-12 mb-3">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img :src="file" alt="Admin" class="rounded-circle profile-picture">
                    <div class="mt-3">
                      <h4>{{username}}</h4>
                      <p class="text-secondary mb-1">{{job}}</p>
                      <a href="/edit-profile">
                        <button class="btn btn-primary">Edit</button>
                      </a>
                      <!--<button class="btn btn-outline-primary">Message</button>-->
                    </div>
                  </div>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row gap-3">
              <div class="card col-md-12">
                
                  <div class="card-body">
                    <div class="row inline">
                      <div class="col-sm-3 inline">
                        <img class="me-2 icon-size" src="../assets/svg/username.svg" alt="username logo">
                        <h6 class="mb-0">Username</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{username}}
                      </div>
                    </div>
                    <hr>
                    <div class="row inline">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/email.svg" alt="email logo">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{email}}
                      </div>
                    </div>
                    <hr>
                    <div class="row inline">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/phone.svg" alt="phone logo">
                        <h6 class="mb-0">Phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{phone}}
                      </div>
                    </div>
                    <hr>
                    <div class="row inline">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/job.svg" alt="job logo">
                        <h6 class="mb-0">Job</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{job}}
                      </div>
                    </div>
                    <hr>
                    <div class="row inline">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/world.svg" alt="website logo">
                        <h6 class="mb-0">Website</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{website}}
                      </div>
                    </div>
                    <hr>
                    <div class="row inline">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/github.svg" alt="github Logo">
                        <h6 class="mb-0">Github</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{github}}
                      </div>
                    </div>
                    <hr>
                    <div class="row inline">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/linkedin.svg" alt="linkedin Logo">
                        <h6 class="mb-0">Linkedin</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{linkedin}}
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-12">
                        <a class="btn btn-info " target="__blank" href="/edit-profile">Edit</a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
body
{
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body
{
  padding: 15px;
}

.card
{
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card
{
  position: relative;
  display: block;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body
{
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm
{
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col, .gutters-sm > [class*=col-]
{
  padding-right: 8px;
  padding-left: 8px;
}

.mb-3, .my-3
{
  margin-bottom: 1rem !important;
}

.bg-gray-300
{
  background-color: #e2e8f0;
}

.h-100
{
  height: 100% !important;
}

.shadow-none
{
  box-shadow: none !important;
}

.row.gutters-sm > *
{
  padding: 0;
}
:root
{
  --gap: 5rem;
}

.row.gutters-sm > .d-flex
{
  --gap: 5rem;
  gap: var(--gap) !important;
}

.row.gutters-sm > .d-flex.gap-1
{
  --gap: 0.25rem;
}
.row.gutters-sm > .d-flex.gap-2
{
  --gap: 0.5rem;
}
.row.gutters-sm > .d-flex.gap-3
{
  --gap: 1rem;
}
.row.gutters-sm > .d-flex.gap-4
{
  --gap: 2rem;
}
.row.gutters-sm > .d-flex.gap-5
{
  --gap: 4rem;
}
.inline
{
  display: flex;
  align-items: center;
}
.profile-picture
{
  width: 150px;
  height: 150px;
}


@media (min-width: 768px) {
  .col-md-4
  {
    width: calc(33.33333333% - var(--gap) / 2);
  }
  .col-md-8
  {
    width: calc(66.66666667% - var(--gap) / 2);
  }
}

</style>