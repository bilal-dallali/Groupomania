<template>
<form @submit.prevent="upload()" enctype="multipart/form-data">
    <div v-if="message" :class="`message ${error ? 'is-danger' : 'is-success'}`">
        <div class="message-body mt-2">
            {{message}}
        </div>
    </div>
    <div class="mt-3">
        <input v-model="title" class="form-control mb-1" id="title" type="text" placeholder="title">
        <!--<textarea contenteditable="true" class="form-control pb-0 pt-2" data-text="comment" placeholder="Leave a comment here" id=""></textarea>-->
        <textarea v-model="description" class="form-control" rows="2" placeholder="description"></textarea>
    </div>

    <div class="d-flex">
        <label for="file-input" class="btn btn-secondary mt-1">Add File</label>
        <input id="file-input" type="file" ref="file" name="file" />
        <button type="submit.prevent" class="btn btn-primary mt-1 ms-auto badge">Post</button>
    </div>
</form>

    <hr class="dropdown-divider mt-4">
</template>

<style module>
input
{
    display: none;
}
body
{
    background-color: #5f5F5F1a !important;
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
        message: "",
        error: false
      }
    },
    methods: {
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
                author: localStorage.getItem("token")
            }).then(() => {
                this.$router.push("/")
            })
            
        }
    }
}

</script>