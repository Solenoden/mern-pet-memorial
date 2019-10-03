const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articlePostSchema = new Schema({
    authorID: {type: Object, required: true},
    petName: {type: String, required: true},
    petType: {type: String, required: true},
    numLikes: {type: Number, required: true},
    imgUrl: {type: String, required: false},
    articleDescription: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model("ArticlePost", articlePostSchema);