exports.getAllPosts = async (req, res, next) => {
    res.send("Get all posts route")
}

exports.createNewPost = async (req, res, next) => {
    req.send("Create New Post Route")
}

exports.getPostById = async (req, res, next) => {
    res.send("Gest Post By ID Route")
}