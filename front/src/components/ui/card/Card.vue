<template>
<div class="main-div">
    <div :key="index" v-for="(article, index) in allArticles" class="card mb-3">
        <div class="card-header d-flex justify-content-between align-items-center">
            <div>
                <img 
                :src="article.authorpicture" class="rounded-circle me-2 avatar" 
                alt="Avatar">
                {{article.author}}
            </div>
            <div type="button" @click="deletePost(article.idUploads)" class=""><img src="../../../../src/assets/svg/delete.svg" alt="delete-icon" class="align-items-center delete-icon"></div>
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
            <!--<h6>{{article.idUploads}}</h6>-->
            
            <div :key="index" v-for="(comments, index) in allComments" class="d-flex gap-1">
        
                <div class="d-flex flex-column comment-text p-1">
                    <p>{{comments.author}}</p>
                    <p>{{comments.comment}}</p>
                    
                </div>
            </div>

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
        allComments: [],
        title: [],
        description: [],
        author: [],
        file: "",
        message: "",
        error: false,
        role: localStorage.getItem("role"),
        //idUploads: article.idUploads,
      }
    },
    created () {
        axios
            .get("http://localhost:3001/uploads/posts")
            .then(response => {
                for(const allPost of response.data) {
                    this.allArticles.push(allPost)
                    console.log(response.data)
                }
            })
        axios
            .get("http://localhost:3001/uploads/comments")
            .then(res => {
                for(const allPost of res.data) {
                    this.allComments.push(allPost)
                }
            })
    },
    methods: {
        uploadComment: async function() {
            await axios.post("http://localhost:3001/uploads/comments", {
                author: localStorage.getItem("username"),
                //idPost: this.idUploads,
                comment: this.comment,
                token: localStorage.getItem("token"),
                avatar: localStorage.getItem("file")
            }).then(() => {
                this.$router.push("/")
                window.location.href = ('home')
            })
        },
        deletePost: async function(idUploads) {
            
            if(this.role === "admin") {
                await axios.put("http://localhost:3001/uploads/delete-posts", {
                    idUploads : idUploads
            })
                window.location.href = ("home")
            } else {
                console.log(err)
            }
            //window.location.href = ("home")
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
    width: 40px;
    height: 40px;
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

.comment-text
{
    background-color: #e9ecef;
    border-radius: 5px;
    width: 100%;
}
.card-body > .d-flex
{
    margin-bottom: 1em;
}
.d-flex p
{
    margin-bottom: 0;
}
.d-flex p:nth-child(1)
{
    font-weight: 500;
}
.delete-icon
{
    padding-top: 10px;
    padding-left: 22px;
    cursor: pointer;
}

</style>