<template>
<div class="main-div">
    <div :key="index" v-for="(article, index) in allArticles" class="card mb-3">
        
        <div class="card-header flex-start">
            <img 
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="rounded-circle me-2" 
            alt="Avatar">
            {{article.author}}
        </div>
        
        <img :src="article.file" alt="card-img-top" class="card-img-top img">
        
        <div class="card-body">
            <h5 class="card-title">
                {{article.title}}
            </h5>
            <p class="card-text">
                {{article.description}}
            </p>
            <!--
            <p class="card-text"><small class="text-muted">Last updated 3 minutes ago</small></p>
            -->
            <Comment></Comment>
            <div class="d-flex gap-1">
                <Avatar></Avatar>
                <input v-model="comment" type="text" class="form-control" placeholder="comment" aria-label="Username">
                <button @click="uploadComment()" type="button" class="btn btn-primary ms-auto">Post</button>
            </div>
        </div>
    </div>
</div>

</template>

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
                for(const allPost of response.data) {
                    this.allArticles.push(allPost)
                }
            })
    },
    methods: {
        uploadComment: async function() {
            await axios.post("http://localhost:3001/uploads/comments", {
                author: localStorage.getItem("username"),
                comment: this.comment,
                token: localStorage.getItem("token"),
            }).then(() => {
                this.$router.push("/")
                window.location.href = ('home')
            })
        }
    }
}
</script>

<style>

@media (min-width: 768px) {
    .card
    {
        width: 60%;
    }
}
.card-header img
{
    width: 50px;
}
.img
{
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.main-div
{
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
}

@media (max-width: 768px) {
    .card
    {
        width: 100%;
    }
}
</style>