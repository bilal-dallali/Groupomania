<script>
export default {
    name: "Avatar",
    data: function() {
      return {
        file: localStorage.getItem("file"),
      }
    },
}
</script>

<template>
    <img :src="file" alt="card-img-top" class="card-img-top rounded-circle shadow-4">
</template>

<style scoped>
img
{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>