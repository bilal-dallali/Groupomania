<script>
import axios from "axios"
export default {
    name: "EditProfile",
    data: function() {
      return {
        file: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        github: "",
        linkedin: "",
        phone: "",
        job: "",
      }
    },
    created () {
        this.username = localStorage.getItem("username")
        this.email = localStorage.getItem("email")
        this.website = localStorage.getItem("website")
        this.github = localStorage.getItem("github")
        this.linkedin = localStorage.getItem("linkedin")
        this.phone = localStorage.getItem("phone")
        this.job = localStorage.getItem("job")
        this.file = localStorage.getItem("file")
    },
    methods: {
        selectPicture() {
            this.file = this.$refs.file.files[0]
        },
        addInfos: async function() {
            const response = await axios.put("http://localhost:3001/users/edit-profile", {
                //token: localStorage.getItem("token"),
                username: this.username,
                email: this.email,
                phone: this.phone,
                job: this.job,
                website: this.website,
                github: this.github,
                linkedin: this.linkedin,
                id: localStorage.getItem("id")
            })
            localStorage.setItem("username", response.data.username)
            localStorage.setItem("email", response.data.email)
            localStorage.setItem("phone", response.data.phone)
            localStorage.setItem("job", response.data.job)
            localStorage.setItem("website", response.data.website)
            localStorage.setItem("github", response.data.github)
            localStorage.setItem("linkedin", response.data.linkedin)
            //window.location.href = ('profile')

            const formData = new FormData()
            formData.append("file", this.file)
            formData.append("id", localStorage.getItem("id"))
            formData.append("token", localStorage.getItem("token"))
            try {
                const response = await axios.put("http://localhost:3001/users/edit-picture", formData)
                //localStorage.getItem("id")
                localStorage.setItem("file", response.data.file)
                window.location.href = ("edit-profile")
            } catch(err) {
                console.log(err)
                window.location.href = ("edit-profile")
            }
            
            
        }
    }
}
</script>

<template>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</head>
<body>
    <div class="col-lg-8 w-100">
        <div class="card">
            <form enctype="multipart/form-data">
            <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center mt-2">
                    <img :src="file" alt="Admin" class="rounded-circle img-edit-profile">
                    <label for="file-input">
                        <i class="text-center bi bi-camera-fill"></i>
                    </label>
                    <input id="file-input" type="file" ref="file" name="file" @change="selectPicture()">
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Username</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="username" type="text" class="form-control">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="email" type="text" class="form-control">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="phone" type="text" class="form-control">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Job</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="job" type="text" class="form-control">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Website</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="website" type="text" class="form-control">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Github</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="github" type="text" class="form-control">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Linkedin</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input v-model="linkedin" type="text" class="form-control">
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9 text-secondary">
                        <input @click="addInfos" type="button" class="btn btn-primary px-4" value="Save Changes">
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
</body>

</template>

<style scoped>
body
{
    background: #f7f7ff;
    margin: 0;
    padding: 0;
}
h1
{
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}
.card
{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
    width: 100%;
}
.img-edit-profile
{
    width: 150px;
    height: 150px;
}
.me-2
{
    margin-right: 0.5rem!important;
}
i.bi
{
    position: relative;
    color: #ECF0F1;
    background-color: #000;
    bottom: 85px;
    border-radius: 50%;
    padding: 7px 8px;
    font-size: 1.25rem;
    cursor: pointer;
    opacity: 0.5;
}
i.bi:hover
{
    opacity: 0.7;
}

@media (max-width: 576px) {
    .mb-576
    {
        padding-bottom: 0.3rem;
    }
}


</style>