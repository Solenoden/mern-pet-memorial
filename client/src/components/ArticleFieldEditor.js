import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

export default class ArticleFieldEditor extends Component {
    constructor(props) {
        super(props);

        this.onChangePetName = this.onChangePetName.bind(this);
        this.onChangePetType = this.onChangePetType.bind(this);
        this.onChangeImgUrl = this.onChangeImgUrl.bind(this);
        this.onChangeArticleDescription = this.onChangeArticleDescription.bind(this);

        this.onChangeImgPostImgTitle = this.onChangeImgPostImgTitle.bind(this);
        this.onChangeImgPostImgUrl = this.onChangeImgPostImgUrl.bind(this);
        this.onChangeImgPostImgDescription = this.onChangeImgPostImgDescription.bind(this);

        this.addArticlePost = this.addArticlePost.bind(this);
        this.editArticlePost = this.editArticlePost.bind(this);

        this.state = {
            petName: "Titanic",
            petType: "Fish",
            numLikes: 0,
            imgUrl: "https://www.fishkeepingworld.com/wp-content/uploads/2018/02/Swordtail.jpg",
            articleDescription: "Titanic couldn't swim with ripped fins. R.I.P Titanic lol.",

            
            imgPosts: [
                {
                    imgTitle: "",
                    imgUrl: "",
                    imgDescription: ""
                }
            ],

            imgTitle: "",
            imgPostImgUrl: "",
            imgDescription: ""
        }
    }

    static propTypes = {
            editorMode: PropTypes.string.isRequired,
            article: PropTypes.object,
            user: PropTypes.object.isRequired,
            getImagePosts: PropTypes.func
    }

    async componentDidMount() {
        if (this.props.editorMode === "edit") {
            this.setState({
                articleID: this.props.article._id,
                petName: this.props.article.petName,
                petType: this.props.article.petType,
                numLikes: this.props.article.numLikes,
                imgUrl: this.props.article.imgUrl,
                articleDescription: this.props.article.articleDescription,
                imgPosts: await this.props.getImagePosts(this.props.article._id)
            });
        }
    }

    // OnChange Handlers
    onChangePetName(e) {
        this.setState({
            petName: e.target.value
        });
    }

    onChangePetType(e) {
        this.setState({
            petType: e.target.value
        });
    }

    onChangeImgUrl(e) {
        this.setState({
            imgUrl: e.target.value
        });
    }

    onChangeArticleDescription(e) {
        this.setState({
            articleDescription: e.target.value
        });
    }

    onChangeImgPostImgTitle(e) {
        this.setState({
            imgTitle: e.target.value
        });
    }

    onChangeImgPostImgUrl(e) {
        this.setState({
            imgPostImgUrl: e.target.value
        });
    }

    onChangeImgPostImgDescription(e) {
        this.setState({
            imgDescription: e.target.value
        });
    }
    // OnSubmit Handlers
    async addArticlePost(e) {
        e.preventDefault();

        const articlePost = {
            authorID: this.props.user.userID,
            numLikes: this.state.numLikes,
            petName: this.state.petName,
            petType: this.state.petType,
            imgUrl: this.state.imgUrl,
            articleDescription: this.state.articleDescription,
        }

        try {
            const res = await axios.post("http://localhost:5000/articlePosts/add", articlePost);
            const articleID = res.data.articleID;

            // Iterate through img posts and add them to the db
            this.state.imgPosts.forEach(async (imgPost) => {
                await axios.post("http://localhost:5000/imagePosts/add", {articleID: articleID, imgTitle: imgPost.imgTitle, imgUrl: imgPost.imgUrl, imgDescription: imgPost.imgDescription});
            });
            

            window.location = "/yourarticles";
        } catch (e) {
            console.log(e);
        }
    }

    async editArticlePost(e) {
        e.preventDefault();

        const articlePost = {
            authorID: this.props.user.userID,
            numLikes: this.state.numLikes,
            petName: this.state.petName,
            petType: this.state.petType,
            imgUrl: this.state.imgUrl,
            articleDescription: this.state.articleDescription,
        }

        try {
            await axios.post("http://localhost:5000/articlePosts/update/" + this.state.articleID, articlePost);

            await axios.delete("http://localhost:5000/imagePosts/delete/byArticle/" + this.state.articleID);

            this.state.imgPosts.forEach(async (imgPost) => {
                await axios.post("http://localhost:5000/imagePosts/add", {articleID: this.state.articleID, imgTitle: imgPost.imgTitle, imgUrl: imgPost.imgUrl, imgDescription: imgPost.imgDescription});
            });

            window.location = "/yourarticles";
        } catch (e) {
            console.log(e);
        }
    }
    // Other Methods
    addImgPost = () => {
        this.setState({
            imgPosts: [...this.state.imgPosts, {
                imgTitle: this.state.imgTitle,
                imgUrl: this.state.imgPostImgUrl,
                imgDescription: this.state.imgDescription
            }],

            imgTitle: "",
            imgPostImgUrl: "",
            imgDescription: ""
        });
    }
    // Other render methods
    renderImagePosts = () => {
        if (this.state.imgPosts) {
            return this.state.imgPosts.map(imgPost => {
                return (
                <div className="w-90 bg-light shadow-sm rounded-lg mb-2 p-2" style={{height: "40px", overflow: "hidden"}}>
                    {imgPost.imgTitle}
                </div>
                )
            })
        } else {
            return (
                <div>None</div>
            )
        }
    }
    // Main render method
    render() {
        return (
            <div>
                <form onSubmit={(this.props.editorMode === "edit") ? this.editArticlePost : this.addArticlePost}>
                    <div className="card my-3 mx-auto" style={{width: "30vw", backgroundColor: "#CDCCB0"}}>
                        <div className="card-header">
                            <h1 className="text-dark text-center">{(this.props.editorMode === "edit") ? "UPDATE ARTICLE" : "CREATE ARTICLE"}</h1>
                        </div>

                        <div className="card-body">
                            <div className="form-group">
                                <input className="form-control" type="text" name="petName" value={this.state.petName} onChange={this.onChangePetName}  placeholder="Pet Name" required></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="petType" value={this.state.petType} onChange={this.onChangePetType} placeholder="Pet Species" required></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.onChangeImgUrl} placeholder="Image URL" required></input>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="articleDescription" value={this.state.articleDescription} onChange={this.onChangeArticleDescription} placeholder="Article Description" required></textarea>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-center">IMAGES</h4>

                                    <div className="form-group">
                                        <input className="form-control" type="text" name="imgPostImgTitle" value={this.state.imgTitle} onChange={this.onChangeImgPostImgTitle} placeholder="Image Title"></input>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="imgPostImgUrl" value={this.state.imgPostImgUrl} onChange={this.onChangeImgPostImgUrl} placeholder="Image URL"></input>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="imgPostImgDescription" value={this.state.imgDescription} onChange={this.onChangeImgPostImgDescription} placeholder="Article Description"></textarea>
                                    </div>
                                    <button className="btn btn-success btn-block" type="button" onClick={this.addImgPost}>Add Image</button>
                                </div>
                                
                                <div className="card-body">
                                    {this.renderImagePosts()}
                                </div>
                            </div>
                        </div>


                        <div className="card-footer">
                            <button className="btn btn-primary btn-block" style={{backgroundColor: "#808471", borderColor: "#808471"}}>{(this.props.editorMode === "edit") ? "Update Article" : "Create Article"}</button>    
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
