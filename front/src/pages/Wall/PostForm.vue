<script>
export default {
    name: "PostForm"
}
</script>

<template>
    <div class="form-floating mt-4">
        <textarea contenteditable class="form-control" placeholder="Leave a comment here" id="floatingTextarea">
        </textarea>
        <label for="floatingTextarea">Comments</label>
    </div>

    <div class="d-flex">
        <label for="file-input" class="btn btn-secondary mt-1">Add File</label>
        <input id="file-input" type="file" />
        <button type="button" class="btn btn-primary mt-1 ms-auto badge">Post</button>
    </div>

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