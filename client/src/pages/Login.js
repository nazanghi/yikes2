import {getUser} from '../store/actions/UserActions'
import {changeEmailInput, changePasswordInput} from '../store/actions/AuthActions'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


const mapStateToProps = ({authState}) => {
    return (
        authState
        )
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            changeEmailInput: (input) => dispatch(changeEmailInput(input)),
            changePasswordInput: (input) => dispatch(changePasswordInput(input)),
            getUser: (formData) => dispatch(getUser(formData))
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch"
      }
    }
  }));

const LoginPage = (props) => {

    const handleEmailChange = ({target}) => {
        props.changeEmailInput(target.value)
    }

    const handlePasswordChange= ({target}) => {
        props.changePasswordInput(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            props.createUser({
                email: props.authState.inputEmail,
                password: props.authState.inputPassword
            })
            props.history.push('/home')
        } catch(error) {
            console.log('Pages/login: handleSubmit Fails')
            throw error
        }
    }

    return (
        <section>
            <form onSubmit = {handleSubmit}>
                <h3>Welcome Back</h3>
                <TextField
                required
                id="standard-required"
                label="Email"
                defaultValue=""
                onChange={handleEmailChange}
                />
                <TextField
                required
                id="standard-required"
                label="Password"
                defaultValue=""
                type="password"
                onChange={handlePasswordChange}
                />
            </form>
        </section>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)