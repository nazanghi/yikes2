import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
//will need to import pages once they are made
import Layout from '../components/Layout'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import Register from '../pages/Register'
import EditAccount from '../pages/EditAccount'
import CreateReview from '../pages/CreateReview'
import EditReview from '../pages/EditReview'

const Router = () => {

    return (
        <div>
            <Switch>
                <Layout>
                    <Route
                        exact path = "/"
                        component = {LandingPage}
                        />
                    <Route
                        path = "/home"
                        component = {Home}
                    />
                    <Route
                        exact path = "/register"
                        component = {Register}
                        />
                    <Route
                        path = "/login"
                        component = {Login}
                    />
                    <Route
                        path = "/createaccount"
                        component = {CreateAccount}
                    />
                    <Route
                        path = "/editaccount"        
                        component = {EditAccount}
                    />
                    {/* <Route
                        path = "/reviews"
                        component= {BrowseReviews}
                    /> */}
                    <Route
                        path = "/createreview"
                        component = {CreateReview}
                    />
                    <Route
                        path = "/editreview"
                        component = {EditReview}
                    />
                </Layout>
            </Switch>
        </div>
        
        )
    }
    
export default Router