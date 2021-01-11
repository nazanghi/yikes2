import {Link} from "react-router-dom"
import {Button} from 'react-md'

const LandingPage = (props) => {
    return (
        <section>
            <h1>Welcome to Yikes</h1>
            <Link to = {`/reviews/`}>
                <h2>Browse Reviews</h2>
            </Link>
            <h2>Or Create an Account</h2>
        </section>
    )
}

export default LandingPage