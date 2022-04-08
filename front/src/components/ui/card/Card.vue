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
        allArticles: [],
        title: [],
        description: [],
        author: [],
        file: "",
        message: "",
        error: false
      }
    },
    created () {
        axios
            .get("http://localhost:3001/uploads/posts")
            .then(response => {
                console.log("bonjour")
                console.log(response.data)
                for(const allPost of response.data) {
                    this.allArticles.push(allPost)
                }
                //this.author = response.data[0].author,
                //this.title = response.data.title,
                //this.description = response.data.description
            })
    }
}
</script>
<template>
    <div :key="index" v-for="(article, index) in allArticles" class="card mb-3 m-auto">
        
        <div class="card-header flex-start">
            <img 
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="rounded-circle me-2" 
            alt="Avatar">
            {{article.author}}
        </div>
        <img src="https://picsum.photos/400/200" alt="card-img-top" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">
                {{article.title}}
            </h5>
            <p class="card-text">
                {{article.description}}
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