import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export default class ArticleListItem extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    async deleteArticle(articleID) {
        try {
            await axios.delete("http://localhost:5000/articlePosts/delete/" + articleID);
        } catch(e) {
            console.log(e);
        }

        window.location = "/yourarticles";
    }

    render() {
        return (
            <div className="d-block p-2 mb-2 rounded-lg shadow-sm" style={{backgroundColor: "#AAAF97"}}>
                <div className="d-flex flex-row">
                    <Link className="font-weight-bold text-dark flex-fill my-auto" to={"/article/view/" + this.props.article._id}><span style={{height: "fit-content"}}>{this.props.article.petName}</span></Link>
                    <button className="btn btn-light" style={{width: "35px"}} name="deleteArticle" onClick={this.deleteArticle.bind(this, this.props.article._id)}>X</button>
                    <Link to={"/article/edit/" + this.props.article._id}><button className="btn btn-light ml-2" style={{width: "35px"}} name="editArticle">:</button></Link>
                </div>
            </div>
        )
    }
}
