import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthenticationService from '../todo-app/authentication/AuthenticationService'

class AuthenticatedRoute extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isAuthorized();
        if(isUserLoggedIn) 
            return <Route {...this.props}/>
        return <Redirect to="/login" />
    }
}

export default AuthenticatedRoute;