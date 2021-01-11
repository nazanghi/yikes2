import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import {LogOutUser} from '../store/actions/UserActions'
import {connect} from 'react-redux'



const mapStateToProps = ({authState, userState}) => {
  return {
    authState, userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LogOutUser: () => dispatch(LogOutUser())
  }
}


const Nav = (props) => {
    
    const handleLogout = () => {
      props.userState.authenticated = false
    }

    console.log(props)
    return props.userState.authenticated ? (
        <header>
            <nav>
              <Button onClick = {handleLogout()}>
                <NavLink to="/">
                  <h5>Sign Out</h5>
                </NavLink>
              </Button>
              <Button>
                <NavLink to = "/createreview">
                  <h5>Make a new Review</h5>
                </NavLink>
              </Button>
              <Button>
                <NavLink to = "/review">
                  <h5>Browse Reviews</h5>
                </NavLink>
              </Button>
            </nav>
        </header>
        ) : (
        <header>
            <nav>
                <div className="navbar-signing">
                      <Button>
                        <NavLink to="/register">
                            <h5>Sign Up</h5>
                        </NavLink>
                      </Button>
                      <Button>
                        <NavLink to="/login">
                          <h5>Sign In</h5>
                        </NavLink>
                      </Button>
                      <Button>
                        <NavLink to = "/review">
                          <h5>Browse Reviews</h5>
                        </NavLink>
                      </Button>
                </div>
            </nav>
        </header>
        )
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)