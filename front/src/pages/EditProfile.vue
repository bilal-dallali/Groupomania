<script>
export default {
    name: "EditProfile",
}
</script>

<template>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</head>
<body>
    <div class="col-lg-8 w-100">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center mt-2">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="Admin" class="rounded-circle img-edit-profile">
                    <label for="file-input">
                        <i class="text-center bi bi-camera-fill"></i>
                    </label>
                    <input id="file-input" type="file">
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Username</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="John Doe">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="john@example.com">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="(239) 816-9029">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Job</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="Front-end developer">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Website</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="www.bilal-webdeveloper.com">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Github</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="bilal-webdeveloper">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0 mb-576">Linkedin</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="Bilal Dallali">
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9 text-secondary">
                        <input type="button" class="btn btn-primary px-4" value="Save Changes">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</template>

<style scoped>
body
{
    background: #f7f7ff;
    margin-top:20px;
}
.card
{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
    width: 100%;
}
.img-edit-profile
{
    width: 150px;
}
.me-2
{
    margin-right: 0.5rem!important;
}
i.bi
{
    position: relative;
    color: #ECF0F1;
    background-color: #000;
    bottom: 85px;
    border-radius: 50%;
    padding: 7px 8px;
    font-size: 1.25rem;
    cursor: pointer;
    opacity: 0.5;
}
i.bi:hover
{
    opacity: 0.7;
}

@media (max-width: 576px) {
    .mb-576
    {
        padding-bottom: 0.3rem;
    }
}


</style>