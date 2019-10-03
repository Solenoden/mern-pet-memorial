import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="d-flex flex-row px-4 pt-4 text-white" style={{backgroundColor: "#3E3E37", height: "20vh"}}>
            <div className="d-flex flex-column mr-5">
                <h5><Link to="/" className="text-white" style={{textDecoration: "none"}}>PET MEMORIAL</Link></h5>
                <p>@ PetMemorial 2019</p>
            </div>

            <ul className="mr-5"style={{listStyle: "none"}}>
                <li><Link to="/about" className="text-white" style={{textDecoration: "none"}}>About Us</Link></li>
                <li><Link to="/" className="text-white" style={{textDecoration: "none"}}>Contact</Link></li>
                <li>Terms and Conditions</li>
            </ul>

            <div className="d-flex flex-column">
                <h6>Useful Links:</h6>
                <ul style={{listStyle: "none"}}>
                    <li>MERN Aquarium</li>
                </ul>
            </div>
        </footer>
    )
}
