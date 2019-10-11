import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import ArticleListItem from './ArticleListItem';

export default class ArticleList extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        articles: PropTypes.array.isRequired
    }

    // Render methods
    renderArticles = () => {
        return this.props.articles.map((article) => {
            return <ArticleListItem key={this.props.articles.indexOf(article)} article={article}/>
        });
    }

    render() {
        return (
            <div className="card mx-auto rounded-lg shadow-lg h-90" style={{width: "30vw", height: "90%", marginTop: "5%", marginBottom: "5%"}}>
                <div className="card-header">
                    <h1 className="text-center text-dark">YOUR ARTICLES</h1>
                </div>
                <div className="card-body p-2">
                {this.renderArticles()}
                </div>
                <div className="card-footer">
                    <Link to="/article/new" style={{textDecoration: "none"}}><button className="btn btn-primary btn-block" style={{backgroundColor: "#808471", borderColor: "#808471"}}>New Memorial Article</button></Link>
                </div>
            </div>
        )
    }
}
