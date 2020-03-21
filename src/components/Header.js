import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import Auth from './auth/AuthService'
import {NavBar, Nav,NavDropdown, NavItem} from 'react';
import AuthService from './auth/AuthService';
import AdminHeader from './roleHeaders/AdminHeader'
import UserHeader from './roleHeaders/UserHeader'
class header extends Component {
    state={
        smena:true
    }

    
    render(){

var smena;
if(localStorage.getItem("role")==="ROLE_USER")
{
    smena=<UserHeader/>
    this.setState
    {
        this.state.smena=true;
    }
}
else if(localStorage.getItem("role")===null)
{
    smena=<UserHeader/>
    this.setState
    {
        this.state.smena=true;
    }
}
else{
    smena=<AdminHeader/>
    this.setState
    {
        console.log("smeniv status")
        this.state.smena=false;
    }
}
        return(
            
      <div>
        {smena}

      </div>  
    )
    }

}

export default header;