import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ArticleFieldEditor extends Component {
    constructor(props) {
        super(props);

        this.onChangePetName = this.onChangePetName.bind(this);
        this.onChangePetType = this.onChangePetType.bind(this);
        this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
        this.onChangeArticleDescription = this.onChangeArticleDescription.bind(this);

        this.state = {
            authorID: "",
            petName: "",
            petType: "",
            numLikes: 0,
            imgUrl: "",
            articleDescription: ""
        }
    }

    componentDidMount() {
        if (this.props.editorMode === "edit") {
            this.setState({
                authorID: this.props.article.authorID,
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
        article: PropTypes.object
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

    onChangeImageUrl(e) {
        this.setState({
            imageUrl: e.target.value
        });
    }

    onChangeArticleDescription(e) {
        this.setState({
            articleDescription: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <div className="card mt-3 mx-auto" style={{width: "30vw", backgroundColor: "#CDCCB0"}}>
                        <div className="card-header">
                            <h1 className="text-dark text-center">CREATE ARTICLE</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input className="form-control" type="text" name="petName" value={this.state.petName} onChange={this.onChangePetName}  placeholder="Pet Name" required></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="petType" value={this.state.petType} onChange={this.onChangePetType} placeholder="Pet Species" required></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onChangeImageUrl} placeholder="Image URL" required></input>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="petName" value={this.state.articleDescription} onChange={this.onChangeArticleDescription} placeholder="Article Description" required></textarea>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary btn-block" style={{backgroundColor: "#808471", borderColor: "#808471"}}>Create Article</button>    
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
