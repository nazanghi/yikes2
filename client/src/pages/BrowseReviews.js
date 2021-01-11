import {GetAllReviews, DeleteReview} from '../store/actions/ReviewActions'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = ({reviewState})=> {
    return {
        reviewState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAllReviews: () => dispatch(GetAllReviews()),
        DeleteReview: (reviewId) => dispatch(DeleteReview(reviewId)) 
    }
}

const AllReviews = (props) => {
    
    useEffect(()=> {
        props.GetAllReviews()
    }, [])

    return <section>
    {/* {console.log(props.reviewState)} */}
    {props.reviewState.reviews.length > 0 ? (
        <div className = "reviews-grandparent">
        <h1>Reviews</h1>
            <div style = {{
                display: 'flex-grid',
                flexWrap: 'wrap'
            }}>

                {props.reviewState.reviews.map((review, index) => (
                    <div key = {index} 
                    style = {{
                        display: 'flex-grid',
                        flexDirection: 'row',
                        margin: '5px',
                        alignItems: 'grid',
                        border: '1px solid black',
                        borderRadius: '4px',
                        maxWidth: '5'
                    }}>
                        <h3>{review.title}</h3>
                        <h5>{review.location}</h5>
                        <p>{review.rating}</p>
                        <p>{review.content}</p>
                        <a>{review.link}</a>
                    </div>
                ))}
                </div>
            </div>
            ) : (
                <h1>No Reviews... yet.</h1>
                )
            }
    </section>
}

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews)