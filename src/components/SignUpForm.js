import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value
        });
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

    onChangeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    } 

    render() {
        return (
            <form className="my-3">
                <div className="card mx-auto " style={{width: "30vw", backgroundColor: "#CDCCB0"}}>
                    <div className="card-header">
                        <h1 className="text-center text-dark">SIGN UP</h1>
                        <p className="text-center font-italic text-dark">Already have an account? <Link to="/login" className="text-dark font-weight-bold" style={{textDecoration: "none"}}>Login</Link>.</p>
                    </div>
                    <div className="card-body">
                        
                            <div className="form-group">
                                <input className="form-control" type="text" name="fullName" value={this.state.fullName} onChange={this.onChangeFullName} placeholder="Full Name" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email Address" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Password" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword} placeholder="Confirm Password" required/>
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
