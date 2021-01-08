import {createUser} from '../store/actions/UserActions'
import {changeEmailInput, changePasswordInput} from '../store/actions/AuthActions'
import {CreateAccount} from '../store/actions/AccountActions'
import React, {useEffect}  from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, TextField} from 'react-md'

const mapStateToProps = ({authState}) => {
    return (
        authState
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeEmailInput: (input) => dispatch(changeEmailInput(input)),
        changePasswordInput: (input) => dispatch(changePasswordInput(input)),
        createUser: (formData) => dispatch(createUser(formData))
    }
}

const Register = (props) => {

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
            props.history.push('/login')
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
                    placeholder="EMAIL"
                    title="EMAIL"
                    name="email"
                    type="email"
                    onChange={handleEmailChange}
                />
                <TextField
                    placeholder="password"
                    title="password"
                    name="password"
                    type="password"
                    onChange={handlePasswordChange}
                />
            </form>
        </section>
    )
}