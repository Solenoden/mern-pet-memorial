import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePostViewer from "./ImagePostViewer";

export default class ArticleViewer extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        getImagePosts: PropTypes.func
    }

    getAuthorName(id) {
        return "Sarah";
    }

    render() {
        return (
            <div style={{}}>
                <div className="card p-3 mx-auto bg-light rounded-lg shadow-lg my-5" style={{width: "50vw", height: "80%"}}>
                    <h1 className="text-center text-dark">{this.props.article.petName}</h1>
                    <span style={{position: "absolute", right:"15px", marginTop: "15px"}}>{"LIKES " + this.props.article.numLikes}</span>
                        
                    <h6 className="text-center text-dark">{"By " + this.getAuthorName(this.props.article.authorID)}</h6>
                    <img className="mx-auto my-4" style={{height: "200px", width: "200px"}} src={this.props.article.imgUrl} alt="Pet Portrait"/>
                    <p className="w-50 mx-auto mb-5" style={{lineHeight: "2rem"}}>
                        {this.props.article.articleDescription}
                    </p>

                    <ImagePostViewer getImagePosts={this.props.getImagePosts} articleID={this.props.article._id}/>
                </div>
            </div>
        );
    }
}
