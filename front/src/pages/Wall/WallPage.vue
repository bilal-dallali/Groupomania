<template>
    <div class="container-sm">
        <PostForm></PostForm>
        <Card></Card>
    </div>
</template>

<script>
import Card from "../../components/ui/card/Card.vue"
import PostForm from "./PostForm.vue"
export default {
    name: "WallPage",
    components: {
        Card,
        PostForm
    },
    
}
</script>

<style module>

</style>
