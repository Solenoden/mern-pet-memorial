const router = require("express").Router();
let ArticlePost = require("../models/articlePost.model");
// Routes
router.route("/").get((req, res) => {
    ArticlePost.find()
    .then(articlePosts => res.json(articlePosts))
    .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/:id").get((req, res) => {
    ArticlePost.findById(req.params.id)
    .then(articlePost => res.json(articlePost))
    .catch(err => res.status(400).json("ERROR: " + err));
});

// Find all article posts belonging to the selected user
router.route("/byUser/:userID").get((req, res) => {
    ArticlePost.find({authorID: req.params.userID})
    .then(articlePosts => res.json(articlePosts))
    .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/add").post((req, res) => {
    const authorID = req.body.authorID;
    const petName = req.body.petName;
    const petType = req.body.petType;
    const numLikes = req.body.numLikes;
    const imgUrl = req.body.imgUrl;
    const articleDescription = req.body.articleDescription;

    const newArticlePost = new ArticlePost({
        authorID,
        petName,
        petType,
        numLikes,
        imgUrl,
        articleDescription
    });

    newArticlePost.save()
    .then(() => res.json({articleID: newArticlePost._id}))
    .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/update/:id").post((req, res) => {
    ArticlePost.findById(req.params.id)
    .then((articlePost) => {
        articlePost.authorID = req.body.authorID;
        articlePost.petName = req.body.petName;
        articlePost.numLikes = req.body.numLikes;
        articlePost.petType = req.body.petType;
        articlePost.imgUrl = req.body.imgUrl;
        articlePost.articleDescription = req.body.articleDescription;

        articlePost.save()
        .then(() => res.json("Article post updated."))
        .catch(err => res.status(400).json("ERROR: " + err));
    })
    .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/delete/:id").delete((req, res) => {
    ArticlePost.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted."))
    .catch(err => res.status(400).json("ERROR: " + err));
});
//
module.exports = router;