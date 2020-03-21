import React, { Component } from 'react';
import AuthService from '../auth/AuthService';
import {Link, Route,withRouter, Redirect, BrowserRouter as Router, Switch} from 'react-router-dom';


class Logout extends Component
{
    render()
    {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        this.props.history.push("/login");
        window.location.reload(false);
        return(
            <div>  
            </div>

        )

    }
}
export default withRouter(Logout)
