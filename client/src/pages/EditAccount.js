import {EditAccount} from '../store/actions/AccountActions'
import React from 'react'
import {connect} from 'react-redux'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";


const mapStateToProps = ({accountState}) => {
    return (
        accountState
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        EditAccount: (formData) => dispatch(EditAccount(formData))
    }
}

const NewAccountDetails = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            // props.createAccount({
            //     username: props.accountState.username,
            //     job: props.accountState.job,
            //     about: props.accountState.about
            // })
            props.history.push('/')
        } catch(error) {
            // console.log('Pages/CreateAccount: handleSubmit Fails')
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
                <h3>Edit Your Profile</h3>
                <TextField                
                    id="standard"
                    label="What Do You Do?"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Tell Us About Yourself"
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </form>
            <Button>Su`bmit</Button>
        </section>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(NewAccountDetails)