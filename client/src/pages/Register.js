import {createUser} from '../store/actions/UserActions'
import {changeEmailInput, changePasswordInput} from '../store/actions/AuthActions'
import React  from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";


const mapStateToProps = ({authState, userState}) => {
    return {
        authState, userState
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            changeEmailInput: (input) => dispatch(changeEmailInput(input)),
            changePasswordInput: (input) => dispatch(changePasswordInput(input)),
            createUser: (formData) => dispatch(createUser(formData))
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

const Register = (props) => {

    const handleEmailChange = ({target}) => {
        props.changeEmailInput(target.value)
        console.log(props.authState)
    }

    const handlePasswordChange= ({target}) => {
        props.changePasswordInput(target.value)
    }

    const handleAuthenticated = () => {
        props.userState.authenticated = true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            props.createUser({
                email: props.authState.inputEmail,
                password: props.authState.inputPassword
            })
            handleAuthenticated()
            props.history.push('/createaccount')

        } catch(error) {
            console.log('Pages/Register: handleSubmit Fails')
            throw error
        }
    }

    return (
        <section>
            <form onSubmit = {handleSubmit}>
                <h3>Sign Up</h3>
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
                <Button 
                    type ="submit" 
                    theme="primary" 
                    themetype="contained" 
                    disableElevation
                    onClick = {handleSubmit}
                >
                    Set Up Your Account
                </Button>
            </form>
        </section>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)