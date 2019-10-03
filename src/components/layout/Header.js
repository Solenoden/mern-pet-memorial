import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
               <header className="fixed-top d-flex flex-row p-2 text-white" style={{backgroundColor: "#3E3E37", height: "10vh"}}>
                    <h5 className="my-auto ml-2"><Link to="/" className="text-white" style={{textDecoration: "none"}}>Pet Memorial</Link></h5>
                    <ul className="d-flex flex-row ml-5 my-auto" style={{textDecoration: "none", listStyle: "none", height: "fit-content"}}>
                        <li className="mr-3 my-auto"><Link to="/about" className="text-white" style={{textDecoration: "none"}}>ABOUT</Link></li>
                        <li className="mr-3 my-auto"><Link to="/" className="text-white" style={{textDecoration: "none"}}>CONTACT</Link></li>
                        <li className="mr-3">
                            <div className="dropdown">
                                <button className="btn btn-link dropbtn text-white" style={{textDecoration: "none"}}>ARTICLES</button>
                                <div className="dropdown-content">
                                    <Link to="/" style={{textDecoration: "none"}}>ALL ARTICLES</Link>
                                    <Link to="/yourarticles" style={{textDecoration: "none"}}>YOUR ARTICLES</Link>
                                    <Link to="/" style={{textDecoration: "none"}}>RANDOM ARTICLE</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="ml-auto mr-2 my-auto"><Link to="/login" className="text-dark" style={{textDecoration: "none"}}><button className="btn btn-light" type="button">Login</button></Link></div>  
                </header> 
                <div style={{backgroundColor: "#3E3E37", height: "10vh"}}>
                </div>
            </div>
            
        )
    }
}
