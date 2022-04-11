<template>
<form @submit.prevent="sendFile()" enctype="multipart/form-data">
    
    <div class="message-body mt-2 green">
        {{successfullyPosted}}
    </div>

    <div class="mt-3">
        <input v-model="title" class="form-control mb-1" id="title" type="text" placeholder="title">
        <!--<textarea contenteditable="true" class="form-control pb-0 pt-2" data-text="comment" placeholder="Leave a comment here" id=""></textarea>-->
        <textarea v-model="description" class="form-control" rows="2" placeholder="description"></textarea>
    </div>

    <div class="d-flex">
        <label for="file">Upload File</label>
        <input type="file" ref="file" @change="selectFile()"/>
        <button @click="upload()" type="submit.prevent" class="btn btn-primary mt-1 ms-auto badge">Post</button>
    </div>
</form>

    <hr class="dropdown-divider mt-4">
</template>

<style module>

body
{
    background-color: #5f5F5F1a !important;
}
.green
{
    color: green;
}


</style>

<script>
import axios from "axios"

export default {
    name: "PostForm",
    data: function() {
      return {
        title: "",
        description: "",
        file: "",
        successfullyPosted: "",
        errorPosted: "",
        error: false
      }
    },
    methods: {
        selectFile() {
            this.file = this.$refs.file.files[0]
        },
        async sendFile() {
            const formData = new FormData()
            formData.append("file", this.file)
            try {
                await axios.post("http://localhost:3001/uploads/posts", formData)
            } catch(err) {
                console.log(err)
            }
            
        },
        //fileUpload: function() {
        //    axios.post("http://localhost:3001/uploads/images", {
        //        file: this.file
        //    }).then(() => {
        //        this.router.push("/login")
        //    })
        //},
        upload: async function() {
            await axios.post("http://localhost:3001/uploads/posts", {
                title: this.title,
                description: this.description,
                //filename: this.file,
                author: localStorage.getItem("username"),
                token: localStorage.getItem("token")
            }).then(() => {
                this.$router.push("/")
                //window.location.href = ('home')
                this.successfullyPosted = "Published successfully"
            })
            
        }
    }
}

</script>