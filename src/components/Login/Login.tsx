import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="login-cont">
                <div className="login-header">
                    <span className="reg-header-title">Sign In</span>
                </div>
                <LoginForm />
             </div>
        );
    }
}

export default Login;