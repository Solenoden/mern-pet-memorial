import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImagePostViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imagePosts: []
        }
    }
    
    static propTypes = {
        getImagePosts: PropTypes.func,
        articleID: PropTypes.string
    }

    async componentDidMount() {
        console.log(this.state.imagePosts);
        this.setState({
            imagePosts: await this.props.getImagePosts(this.props.articleID)
        });
        console.log(this.state.imagePosts);
    }

    renderImagePosts() {
        return this.state.imagePosts.map((imagePost) => {
            return (
                <div className={"carousel-item " + ((this.state.imagePosts.indexOf(imagePost) === 0) ? "active" : "")}>
                    <div className="d-flex flex-row">
                        <div className="flex-fill w-50 p-3 text-info">
                            <h6 className="mb-3">{imagePost.imgTitle}</h6>
                            <p>{imagePost.imgDescription}</p>
                        </div>
                        <div className="flex-fill w-50">
                            <img src={imagePost.imgUrl} alt={imagePost.imgTitle} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.state.imagePosts.length);
        if (this.state.imagePosts.length > 0) {
            return (
                <div id="ipv-carousel" className="carousel" >
                    
                    <div className="carousel-inner mx-auto" style={{backgroundColor: "#F1F9FF", height: "40vh", width: "80%"}}>
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
