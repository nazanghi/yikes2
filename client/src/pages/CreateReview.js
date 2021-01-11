import {CreateReview} from '../store/actions/ReviewActions'
import React from 'react'
import {connect} from 'react-redux'
import TextField from "@material-ui/core/TextField"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles"

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
  
const customIcons = {
1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
},
2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
},
3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
},
4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
},
5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
},
};
  
function IconContainer(props) {
const { value, ...other } = props;
return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
value: PropTypes.number.isRequired,
};


const mapStateToProps = ({reviewState}) => {
    return {
        reviewState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateReview: (newReview) => dispatch(CreateReview(newReview))
    }
}

const NewReview = (props) => {

    let formData = {
        inputContent: '',
        inputLink: '',
        inputLocation: '',
        inputRating: '',
        inputTitle: ''
    }

    const handleContentChange = ({target}) => {
        formData.inputContent = target.value
    }
     
    const handleLinkChange = ({target}) => {
        formData.inputLink = target.value
    }
     
    const handleLocationChange = ({target}) => {
        formData.inputLocation = target.value
    }
     
    const handleRatingChange = ({target}) => {
        formData.inputRating = target.value
    }
     
    const handleTitleChange = ({target}) => {
        formData.inputTitle = target.value
    }
     

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(formData)
            props.CreateReview({
                content: formData.inputContent,
                link: formData.inputLink,
                location: formData.inputLocation,
                rating: formData.inputRating,
                title: formData.inputTitle
            })
            props.history.push('/reviews')
            // console.log('pages/CreateReview: handleSubmit hits. Props: ', props)
        }catch(error){
            // console.log('pages/CreateReview: handleSubmit fails.')
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

      //takes location, title, rating, content, link, and tags

    return (
        <section>
            <form onSubmit = {handleSubmit}>

                <p>Once you make a review, it's there. No editing or deleting, buddy.</p>
                <h3>Tell Us About Your Experience</h3>
                <TextField
                id ="standard"
                label ="Title it!"
                onChange = {handleTitleChange}
                />
                <TextField
                id = "standard"
                label = "Where was it?"
                onChange ={handleLocationChange}
                />
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Rate It!</Typography>
                    <Rating
                        name="customized-icons"
                        defaultValue={0}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                        onChange = {handleRatingChange}
                    />
                </Box>
                <TextField
                    id = "outlined-multiline-full-width"
                    label="What happened?"
                    multiline
                    rows = {8}
                    variant ="outlined"
                    onChange = {handleContentChange}
                />
                <TextField
                    id = "standard"
                    label = "Link to a Review"
                    onChange = {handleLinkChange}
                />
                <Button onClick = {handleSubmit}>Submit</Button>
            </form>
        </section>
    )

}
export default connect(mapStateToProps, mapDispatchToProps)(NewReview)