<template>
    <div class="container-sm">
        <PostForm></PostForm>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
</template>

<script>
import { mapState } from "vuex"
import Card from "../../components/ui/card/Card.vue"
import PostForm from "./PostForm.vue"
export default {
    name: "WallPage",
    components: {
        Card,
        PostForm
    },
    mounted: function() {
        console.log(this.$store.state.user)
        if (this.$store.state.user.userId == -1) {
            this.$router.push("/")
            return
        }
        this.$store.dispatch("getUserInfos")
    },
    computed: {
        ...mapState({
            user: "userInfos",
        })
    },
    methods: {
        logout: function() {
            this.$store.commit("logout")
            this.$router.push("/")
        }
    }
}
</script>

<style module>

</style>
