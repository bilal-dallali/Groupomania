<script>
export default {
    name: "Wall"
}
</script>

<template>
    <h1>WALL</h1>
    <div class="container-sm">
        <div class="form-floating">
            <textarea contenteditable class="form-control" placeholder="Leave a comment here" id="floatingTextarea">
            </textarea>
            <label for="floatingTextarea">Comments</label>
        </div>

        <div class="d-flex">
            <label for="file-input" class="btn btn-secondary mt-1">Add File</label>
            <input class="display-none" id="file-input" type="file">
            <button type="button" class="btn btn-primary mt-1 ms-auto">Post</button>
        </div>
    </div>
</template>

<style>
.display-none
{
    display: none;
}
</style>
