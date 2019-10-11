const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagePostSchema = new Schema({
    articleID: {type: String, required: true},
    imgTitle: {type: String, required: true},
    imgDescription: {type: String, required: true},
    imgUrl: {type: String, required: true}
});

const ImagePost = mongoose.model("ImagePost", imagePostSchema);

module.exports = ImagePost;