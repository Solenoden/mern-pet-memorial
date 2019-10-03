import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class ArticleListItem extends Component {
    state = {
        article: {}
    }

    static propTypes = {
        article: PropTypes.object
    }

    render() {
        return (
            <div className="d-block p-2 mb-2 bg-light">
                <div className="d-flex flex-row">
                    <span className="font-weight-bold text-dark mr-auto my-auto" style={{height: "fit-content"}}>Pet Name (2000 - 2010)</span>
                    <button className="btn btn-light">X</button>
                    <button className="btn btn-light">:</button>
                </div>
            </div>
        )
    }
}
