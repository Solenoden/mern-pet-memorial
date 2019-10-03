import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: "",
            password: ""
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <form className="my-3">
                <div className="card mx-auto " style={{width: "30vw", backgroundColor: "#CDCCB0"}}>
                    
                    <div className="card-header">
                        <h1 className="text-center text-dark">LOGIN</h1>
                        <p className="text-center font-italic text-dark">Don't have an account? <Link to="/signup" className="text-dark font-weight-bold" style={{textDecoration: "none"}}>Sign Up</Link>.</p>
                    </div>
                    
                    <div className="card-body">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email Address" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Password" required/>
                            </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-light btn-block text-white" style={{backgroundColor: "#808471", borderColor:"#808471"}}>LOGIN</button>
                    </div>
                    </div>
            </form>
        )
    }
}
