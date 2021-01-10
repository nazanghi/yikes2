import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default ({/**take auth props */}) => {
    return (
        // <header>
        //     <nav>
        //         <NavLink
        //         to="/"
        //         onClick={() => { localStorage.clear() }}
        //         >
        //         <h3>Sign Out</h3>
        //         </NavLink>
        //         <h1 className ="nav-title"><NavLink to="/reviews">Yikes</NavLink></h1>
        //     </nav>
        // </header>
        // ) : (
        <header>
            <nav>
                <div className="navbar-signing"></div>
                <div className={useStyles().root}>
                    <Button variant="outlined" color="gray">
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