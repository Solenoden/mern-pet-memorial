import React, { Component } from 'react'

export default class AboutPage extends Component {
    render() {
        return (
            <div className="container" style={{height: "70vh"}}>
                <div className="jumbotron" style={{backgroundColor: "#CDCCB0"}}>
                    <h1 className="text-center">MERN Pet Memorial</h1>
                </div>
                

                <div className="d-flex flex-row my-5">
                    <div className="flex-fill mr-3 ">
                        <h1>ABOUT US</h1>
                        <p className="w-75">This website was created with the purpose of cementing and applying my knowledge of ReactJS and front-end development. This website will allow you to memorialise your deceased pets so that their memory may live on.</p>
                    </div>
                    <div className="flex-fill">
                        <h1>CONTACT US</h1>
                        <p className="w-75">
                        Feel free to contact us on any of our social media or via email to make suggestions or provide feedback on our website.
                        <br />Email: mernpetmemorial@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
