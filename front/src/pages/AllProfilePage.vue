<script>
import axios from "axios"
export default {
    name: "ProfilePage",
    data: function() {
      return {
        allProfile: [],
        username: "",
        website: "",
        github: "",
        linkedin: "",
        email: "",
        phone: "",
        job: "",
        role: localStorage.getItem("role")
      }
    },
    created () {
      axios
            .get("http://localhost:3001/users/profile")
            .then(response => {
                for(const allPost of response.data) {
                    this.allProfile.push(allPost)
                }
            })
    },
    methods: {
      deleteUser: async function(id) {
        if(this.role === "admin") {
          await axios.put("http://localhost:3001/users/remove", {
            id: id
          })
          window.location.href = ("all-profile")
        } else {
          console.log(err)
        }
      }
    }
}
</script>

<template>
<div class="container">
    <div :key="index" v-for="(profile, index) in allProfile" class="main-body">
          <div class="row gutters-sm">            
            
            <div class="d-flex flex-column flex-md-row gap-3">
              <div class="card col-md-12">
                
                  <div class="card-body">

                    <img class="mb-4 profile-picture rounded-circle" :src="profile.file" alt="profile picture">
                    <div class="row inline mb-3">
                      <div class="col-sm-3 inline">
                        <img class="me-2 icon-size" src="../assets/svg/username.svg" alt="username logo">
                        <h6 class="mb-0">Username</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{profile.username}}
                      </div>
                    </div>
                    
                    <div class="row inline mb-3">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/email.svg" alt="email logo">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{profile.email}}
                      </div>
                    </div>
                    
                    <div class="row inline mb-3">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/phone.svg" alt="phone logo">
                        <h6 class="mb-0">Phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{profile.phone}}
                      </div>
                    </div>
                    
                    <div class="row inline mb-3">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/job.svg" alt="job logo">
                        <h6 class="mb-0">Job</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{profile.job}}
                      </div>
                    </div>
                    
                    <div class="row inline mb-3">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/world.svg" alt="website logo">
                        <h6 class="mb-0">Website</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{profile.website}}
                      </div>
                    </div>
                    
                    <div class="row inline mb-3">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/github.svg" alt="github Logo">
                        <h6 class="mb-0">Github</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{profile.github}}
                      </div>
                    </div>
                    
                    <div class="row inline mb-3">
                      <div class="col-sm-3 inline">
                        <img class="me-2" src="../assets/svg/linkedin.svg" alt="linkedin Logo">
                        <h6 class="mb-0">Linkedin</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{profile.linkedin}}
                      </div>
                    </div>
                    <button @click="deleteUser(profile.id)" type="submit" class="btn btn-danger">Delete user</button>
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
    width: 100px;
    height: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
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