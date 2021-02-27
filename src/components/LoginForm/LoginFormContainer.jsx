import React, {useState} from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunk} from "../../store/reducers/loginReducer";
import {Redirect} from "react-router";

const LoginFormContainer = ({userLogin, loginThunk}) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const onLoginChange = (event) => {
        setLogin(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        loginThunk(login, password)
    }
    if (userLogin) {
        return <Redirect to='/search'/>
    }
    return <LoginForm passwordValue={password} loginValue={login} onSubmit={onSubmit}
                      onPasswordChange={onPasswordChange} onLoginChange={onLoginChange}/>
}
const mapStateToProps = (state) => {
    return {
        userLogin: state.login.user.login
    }
}
const LoginFormContainerConnect = connect(mapStateToProps, {loginThunk})(LoginFormContainer)
export default LoginFormContainerConnect;