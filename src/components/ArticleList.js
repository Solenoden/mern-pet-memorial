import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import ArticleListItem from './ArticleListItem';

export default class ArticleList extends Component {
    state = {
        articles: [
            {},
            {},
            {},
            {}
        ]
    }

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    renderArticles = () => {
        return this.state.articles.map((article) => {
            return <ArticleListItem article={article}/>
        });
    }

    render() {
        return (
            <div className="card mx-auto mt-3" style={{width: "30vw", backgroundColor: "#CDCCB0"}}>
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
