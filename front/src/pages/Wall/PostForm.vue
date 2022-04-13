<template>
<form @submit="sendFile" enctype="multipart/form-data">
    
    <div class="message-body mt-2 green">
        {{successfullyPosted}}
    </div>

    <div class="mt-3">
        <input v-model="title" ref="title" class="form-control mb-1" id="title" type="text" placeholder="title">
        <!--<textarea contenteditable="true" class="form-control pb-0 pt-2" data-text="comment" placeholder="Leave a comment here" id=""></textarea>-->
        <textarea v-model="description" ref="description" class="form-control" rows="2" placeholder="description"></textarea>
    </div>

    <div class="d-flex">
        <label for="file-input" class="btn btn-secondary mt-1">Upload File</label>
        <input id="file-input" type="file" ref="file" name="file" @change="selectFile()"/>
        <button type="submit" class="btn btn-primary mt-1 ms-auto badge">Post</button>
    </div>
</form>

    <hr class="dropdown-divider mt-4">
</template>

<style module>

body
{
    background-color: #5f5F5F1a !important;
}
input
{
    display: none;
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
            formData.append("title", this.title)
            formData.append("description", this.description)
            formData.append("author", localStorage.getItem("username"))
            formData.append("authorpicture", localStorage.getItem("file"))
            formData.append("token", localStorage.getItem("token"))
            formData.append("file", this.file, this.file.file)
            try {
                await axios.post("http://localhost:3001/uploads/posts", formData)
            } catch(err) {
                console.log(err)
            }
            window.location.href = ('home')
        },
    }
}

</script>