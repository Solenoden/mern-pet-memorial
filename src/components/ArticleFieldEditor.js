import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

export default class ArticleFieldEditor extends Component {
    constructor(props) {
        super(props);

        this.onChangePetName = this.onChangePetName.bind(this);
        this.onChangePetType = this.onChangePetType.bind(this);
        this.onChangeImageUrl = this.onChangeImgUrl.bind(this);
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

            imgPost: {
                imgTitle: "",
                imgUrl: "",
                imgDescription: ""
            }
        }
    }

    componentDidMount() {
        if (this.props.editorMode === "edit") {
            this.setState({
                articleID: this.props.article._id,
                petName: this.props.article.petName,
                petType: this.props.article.petType,
                numLikes: this.props.article.numLikes,
                imgUrl: this.props.article.imgUrl,
                articleDescription: this.props.article.articleDescription,
            });
        }
    }


    static propTypes = {
        editorMode: PropTypes.string.isRequired,
        article: PropTypes.object,
        user: PropTypes.object.isRequired
    }

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
            imgPost: {
                imgTitle: e.target.value,
                imgUrl: this.state.imgPost.imgUrl,
                imgDescription: this.state.imgPost.imgDescription
            }
        });
    }

    onChangeImgPostImgUrl(e) {
        this.setState({
            imgPost: {
                imgTitle: this.state.imgPost.imgTitle,
                imgUrl: e.target.value,
                imgDescription: this.state.imgPost.imgDescription
            }
        });
    }

    onChangeImgPostImgDescription(e) {
        this.setState({
            imgPost: {
                imgTitle: this.state.imgPost.imgTitle,
                imgUrl: this.state.imgPost.imgUrl,
                imgDescription: e.target.value
            }
        });
    }

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
            await axios.post("http://localhost:5000/articlePosts/add", articlePost);

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

            window.location = "/yourarticles";
        } catch (e) {
            console.log(e);
        }
    }

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
                                        <input className="form-control" type="text" name="imgPostImgTitle" value={this.state.imgPost.imgTitle} onChange={this.onChangeImgPostImgTitle} placeholder="Image Title"></input>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="imgPostImgUrl" value={this.state.imgPost.imgUrl} onChange={this.onChangeImgPostImgUrl} placeholder="Image URL"></input>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="imgPostImgDescription" value={this.state.imgPost.imgDescription} onChange={this.onChangeImgPostImgDescription} placeholder="Article Description"></textarea>
                                    </div>
                                    <button className="btn btn-success btn-block" type="button">Add Image</button>
                                </div>
                                
                                <div className="card-body">
                                    
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
