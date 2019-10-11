const router = require("express").Router();
const ImagePost = require("../models/imagePost.model");

router.route("/").get((req, res) => {
    ImagePost.find()
        .then(imagePosts => res.json(imagePosts))
        .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/:id").get((req, res) => {
    ImagePost.findById(req.params.id)
        .then(imagePost => res.json(imagePost))
        .catch(err => res.status(400).json("ERROR: " + err));
});

// Finds all images which are linked to the inputted article
router.route("/byArticle/:articleID").get((req, res) => {
    ImagePost.find()
        .then(allImagePosts => {
            let imagePosts = allImagePosts.map((imagePost) => {
                if(imagePost.articleID === req.params.articleID) {
                    return imagePost;
                }
            })
            res.json(imagePosts);
        })
        .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/add").post((req, res) => {
    const articleID = req.body.articleID;
    const imgTitle = req.body.imgTitle;
    const imgDescription = req.body.imgDescription;
    const imgUrl = req.body.imgUrl;

    const newImagePost = new ImagePost({
        articleID,
        imgTitle,
        imgDescription,
        imgUrl
    });

    newImagePost.save()
        .then(() => res.json("Image Post successfully created."))
        .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/update/:id").post((req, res) => {
    ImagePost.findById(req.params.id)
        .then((imagePost) => {
            imagePost.articleID = req.body.articleID;
            imagePost.imgTitle = req.body.imgTitle;
            imagePost.imgDescription = req.body.imgDescription;
            imagePost.imgUrl = req.body.imgUrl;

            imagePost.save()
                .then(() => res.json("Image Post has been updated."))
                .catch(err => res.status(400).json("ERROR: " + err));
        })
        .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/delete/:id").delete((req, res) => {
    ImagePost.findByIdAndDelete(req.params.id)
        .then(() => res.json("Image Post successfully deleted."))
        .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/delete/byArticle/:articleID").delete((req, res) => {
    ImagePost.deleteMany({articleID: req.params.articleID})
    .then(() => res.json("All Image Posts for article " + req.params.articleID + " have been deleted."))
    .catch(err => res.status(400).json("ERROR: " + err));
});

module.exports = router;