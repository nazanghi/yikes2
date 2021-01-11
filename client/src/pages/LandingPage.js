import {Link} from "react-router-dom"
import {Button} from 'react-md'

const LandingPage = (props) => {
    return (
        <section>
            <h1>Welcome to Yikes</h1>
            <Link to = {`/reviews/`}>
                <h2>Browse Reviews</h2>
            </Link>
            <Link to ={`/register/`}>
            <h2>Or Create an Account</h2>
            </Link>
        </section>
    )
}

export default LandingPage