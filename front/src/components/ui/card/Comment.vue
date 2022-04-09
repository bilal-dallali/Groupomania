<template>
    <div :key="index" v-for="(article, index) in allComments" class="d-flex gap-1">
        <Avatar />
        <div class="d-flex flex-column comment-text p-1">
            <p>{{article.author}}</p>
            <p>{{article.comment}}</p>
        </div>
    </div>
</template>

<script>
import Avatar from "../Avatar.vue"
import axios from "axios"
export default {
    name: "Comment",
    components: {
        Avatar
    },
    data: function() {
      return {
        allComments: [],
        author: "",
        comment: ""
      }
    },
    created () {
        axios
            .get("http://localhost:3001/uploads/comments")
            .then(response => {
                //console.log(response.data)
                for(const allPost of response.data) {
                    this.allComments.push(allPost)
                }
            })
        //axios
        //    .get("http://localhost:3001/uploads/posts")
        //    .then(response => {
        //        console.log(response.data)
        //    })
    },
}
</script>
    
<style scoped>
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
</style>
