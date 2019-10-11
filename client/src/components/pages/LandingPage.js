import React, { Component } from 'react'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center mt-5">MERN Pet Memorial</h1>
                <h6 className="text-center font-italic ">A resting place for your pet's memories</h6>

                <div id="homeCarousel" className="carousel slide mt-5" data-ride="carousel" style={{backgroundColor: "#CDCCB0", marginBottom: "20vh"}}>

                <ul className="carousel-indicators">
                  <li className="item1 active"></li>
                  <li className="item2"></li>
                  <li className="item3"></li>
                </ul>
                
                <div className="carousel-inner mx-auto" role="listbox" style={{width: "70vw", height: "60vh"}}>
                  <div className="carousel-item active">
                    <img className="img img-responsive" src="https://3.bp.blogspot.com/-xDnkdWjuAW0/W_go_3FWaaI/AAAAAAAABWo/J4V8O4p52TEVtxwS7EB_0KzqypKhKLbYQCHMYCw/s1600/new-albany-dog-park.jpg" alt="Pets 1"/>
                  </div>
                  <div className="carousel-item">
                    <img className="img img-responsive" src="https://3.bp.blogspot.com/-gV8N-NqNEgU/W_gpAchGMQI/AAAAAAAABWw/pEGR96LhyV8j0wZOPGHkufXmx1Hj-LisQCHMYCw/s1600/happy-family-and-pet-dog-autumn-portrait-stock-image-image-of.jpg" alt="Pets 2"/>
                  </div>
                  <div className="carousel-item">
                    <img className="img img-responsive" src="https://3.bp.blogspot.com/-xl1IRhpC9A0/W_go_CMCTjI/AAAAAAAABWg/iiu55KHWtagy09ru95tON6_K1dEA5IOiwCHMYCw/s1600/home-%25E2%2580%2594-pawmegranate%25E2%2584%25A2.jpg" alt="Pets 3"/>
                  </div>
                </div>

                <a className="carousel-control-prev">
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next">
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
        )
    }
}
