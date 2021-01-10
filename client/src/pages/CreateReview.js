import {CreateReview} from '../store/actions/ReviewActions'
import React from 'react'
import {connect} from 'react-redux'
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles"

const mapStateToProps = ({reviewState}) => {
    return (
        reviewState
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateReview: (formData) => dispatch(CreateReview(formData))
    }
}

const NewReview = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            //come back to this
            console.log('pages/CreateReview: handleSubmit hits. Props: ', props)
        }catch(error){
            console.log('pages/CreateReview: handleSubmit fails.')
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
                <h3>Tell Us About Your Experience</h3>
                <TextField
                id ="standard"
                label ="Title it!"
                />
                <p>figure out a way to do a star rating</p>
                <TextField
                    id = "outlined-multiline-static"
                    label="What happened?"
                    multiline
                    rows = {8}
                    variant ="outlined"
                />
            </form>
        </section>
    )

}
export default connect(mapStateToProps, mapDispatchToProps)(NewReview)