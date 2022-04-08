<script>
import Comment from "./Comment.vue"
import Avatar from "../Avatar.vue"
import axios from "axios"
export default {
    name: "Card",
    components: {
        Comment,
        Avatar
    },
    data: function() {
      return {
        title: "",
        description: "",
        author: "",
        file: "",
        message: "",
        error: false
      }
    },
    created () {
        axios
            .get("http://localhost:3001/uploads/posts")
            .then(response => {
                console.log(response)
                this.author = response.data[0].author,
                this.title = response.data[0].title,
                this.description = response.data[0].description
            })
    }
}
</script>
<template>
    <div class="card mb-3 m-auto">
        <div class="card-header">
            <img 
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="rounded-circle" 
            alt="Avatar">
            <!--Catherine de la compta-->
            {{author}}
        </div>
        <img src="https://picsum.photos/400/200" alt="card-img-top" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">
                <!--Card title-->
                {{title}}
            </h5>
            <p class="card-text">
                <!--
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Ullam, amet minus maiores rerum quasi natus et 
                voluptates placeat iste asperiores!-->
                {{description}}
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 minutes ago</small></p>
            <Comment></Comment>
            <Comment></Comment>

            <div class="d-flex gap-1">
                <Avatar></Avatar>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username">
                <button type="button" class="btn btn-primary ms-auto">Post</button>
            </div>
        </div>
    </div>
</template>
<style>
@media (min-width: 768px) {
    .card
    {
        width: 70%;
    }
}
.card-header img
{
    width: 50px;
}
</style>