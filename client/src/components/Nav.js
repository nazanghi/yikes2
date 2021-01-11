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
                <NavLink
                  to="/"
                  onClick={handleLogout()}
                >
                <h3>Sign Out</h3>
                </NavLink>
                <h1 className ="nav-title"><NavLink to="/reviews">Browse Reviews</NavLink></h1>
            </nav>
        </header>
        ) : (
        <header>
            <nav>
                <div className="navbar-signing">
                      <Button>
                          <NavLink to="/register">
                              <h3>Sign Up</h3>
                          </NavLink>
                      </Button>
                  <NavLink to="/login">
                    <h3>Sign In</h3>
                  </NavLink>
                  <h1 className="nav-title"><a href='/'>Yikes</a></h1>
                </div>
            </nav>
        </header>
        )
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)