<script>
import Avatar from "./Avatar.vue"
export default {
    name: "Comment",
    components: {
        Avatar
    }
}
</script>

<template>
    <div class="d-flex gap-1">
        <Avatar />
        <div class="d-flex flex-column comment-text p-1">
            <p>François</p>
            <p>C'est intéressant</p>
        </div>
    </div>
</template>
    
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
