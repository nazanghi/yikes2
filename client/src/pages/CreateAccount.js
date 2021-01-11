import {CreateAccount} from '../store/actions/AccountActions'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";


const mapStateToProps = ({accountState, userState}) => {
    return {
        userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateAccount: (formData) => dispatch(CreateAccount(formData))
    }
}

const NewAccount = (props) => {

    let formData = {
        username: '',
        job: '',
        about: ''
    }

    const handleUsernameChange = ({target}) => {
        formData.username = target.value
    }
     
    const handleJobChange = ({target}) => {
        formData.job = target.value
    }
     
    const handleAboutChange = ({target}) => {
        formData.about = target.value
    }
     

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            props.CreateAccount({
                user_id: props.userState.userInfo.id,
                username: formData.username,
                job: formData.job,
                about: formData.about
            })
            props.history.push('/createreview')
        } catch(error) {
            console.log('Pages/CreateAccount: handleSubmit Fails')
            throw error
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
    


    return (
        <section>
            <form onSubmit = {handleSubmit}>
                <h3>Create Your Profile</h3>
                <TextField                
                id="standard"
                label="Pick a Username"
                defaultValue=""
                onChange= {handleUsernameChange}
                />
                <TextField                
                    id="standard"
                    label="What Do You Do?"
                    onChange={handleJobChange}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Tell Us About Yourself"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={handleAboutChange}
                />
            </form>
            <Button onClick = {handleSubmit}>Submit</Button>
        </section>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(NewAccount)