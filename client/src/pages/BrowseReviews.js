import {GetAllReviews} from '../store/actions/ReviewActions'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = ({reviewState})=> {
    return {
        reviewState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAllReviews: () => dispatch(GetAllReviews())
    }
}

const AllReviews = (props) => {
    
    useEffect(()=> {
        props.GetAllReviews()
    }, [])

    return <div className = "reviews-grandparent">
            <h1>Reviews</h1>
            {props.reviewState.reviews.map((review, index) => (
                <div key = {index}>
                    <h3>{review.title}</h3>
                    <h5>{review.location}</h5>
                    <p>{review.rating}</p>
                    <p>{review.content}</p>
                    <a>{review.link}</a>
                </div>
            ))}
        </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(AllReviews)