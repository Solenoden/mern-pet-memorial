import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImagePostViewer extends Component {
    static propTypes = {
        imagePosts: PropTypes.array.isRequired
    }

    renderImagePosts() {
        return this.props.imagePosts.map((imagePost) => {
            return (
                <div className={"carousel-item " + ((this.props.imagePosts.indexOf(imagePost) === 0) ? "active" : "")}>
                    <div className="d-flex flex-row">
                        <div className="flex-fill w-50 p-3 text-info">
                            <h6 className="mb-3">{imagePost.imgTitle}}</h6>
                            <p>{imagePost.imgDescription}</p>
                        </div>
                        <div className="flex-fill w-50">
                            <img  src={imagePost.imgUrl} alt={imagePost.imgTitle} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (this.props.imagePosts) {
            return (
                <div id="ipv-carousel" className="carousel" >
                    
                    <div className="carousel-inner mx-auto" style={{backgroundColor: "#F1F9FF", height: "40vh", width: "80%"}}>
                        <div className="carousel-item">
                            <div className="d-flex flex-row">
                                <div className="flex-fill w-50 p-3 text-info">
                                    <h6 className="mb-3">IMAGE POST TITLE</h6>
                                    <p>Et anim quis proident culpa anim non et cillum. Magna ex sunt culpa ut exercitation voluptate id sint non aliqua nulla ad. Laborum ut irure velit ipsum elit aute laboris amet occaecat do eiusmod elit dolor. Nulla magna occaecat tempor ea exercitation velit culpa mollit eu laborum sint minim irure proident.</p>
                                </div>
                                <div className="flex-fill w-50">
                                    <img  src="https://nspca.co.za/wp-content/uploads/2019/02/PetsInComplexes.jpg" alt="Los Angeles" />
                                </div>
                            </div>
                        </div>
                        {this.renderImagePosts()}
                    </div>

                    <a className="carousel-control-prev text-dark" href="#ipv-carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon" style={{color: "black"}}></span>
                    </a>
                    <a className="carousel-control-next" style={{color: "black"}} href="#ipv-carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            )
        } else {
            return (
                <img className="mx-auto" style={{width: "200px", height: "200px"}} src="https://previews.123rf.com/images/maryvalery/maryvalery1607/maryvalery160700066/60551155-grave-isolated-old-gravestone-with-cracks-tomb-on-white-background-ancient-rip-granite-plate-with-cr.jpg" alt="Gravestone"/>
            );
        }
    }
}
