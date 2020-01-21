import React, { Component } from "react";

function Message (props) {
    if (props.isLoggedIn) {
        return <h1>Welcome Back !!!</h1>
    } else {
        return <h1>Please Loggin Frist !!!!</h1>
    }
}

function Login (props) {
    return (
        <button onClick={props.checkInfo}>LOgin</button>
    )
}

function Logout (props) {
    return (
        <button onClick={props.checkInfo}>Logout</button>
    )
}

class LoginConditional extends Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }


    handleLogout() {
        this.setState({isLoggedIn: false})
    }
    handleLogin() {
        this.setState({isLoggedIn: true})
    }

    render() {
        return (
            <div>
                <h1>Conditional Rendering</h1>
                <Message isLoggedIn = {this.state.isLoggedIn}/>
                {
                    (this.state.isLoggedIn)
                        ?
                        (<Logout checkInfo = {this.handleLogout}/>)
                        :
                        (<Login checkInfo = {this.handleLogin}/>)
                }
            </div>
        );
    }
}

export default LoginConditional;
