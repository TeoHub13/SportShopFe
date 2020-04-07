
import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {NavBar, Nav,NavDropdown, NavItem} from 'react';
import AuthService from '../auth/AuthService';
class  AdminHeader extends Component
{
    constructor() {
        super();
        this.Auth = new AuthService();
        this.state={
            dali:this.Auth.loggedIn(),
            smena:true
        }
    }
    render()
    {
    var flag;
    if(!this.Auth.loggedIn())
    {
        this.setState
    {
        this.state.smena=true
    }
        flag=<form className="form-inline mt-2 mt-md-0 ml-3">
        <Link to={"/login"} className="btn btn-outline-info my-2 my-sm-0" >Login</Link>
    
    </form>    
}
    else
    {
        this.setState
        {
            this.state.smena=false
        }
        flag=<form className="form-inline mt-2 mt-md-0 ml-3">
        <Link to={"/logout"} className="btn btn-outline-info my-2 my-sm-0" >Logout</Link>
    
    </form>
    
    }
    return(
        
        <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
        
            <Link to={"/"}   className="navbar-brand">Home</Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item">
                        <Link to={"/products"} className="nav-link">Products</Link>
                    </li>  */}
                    <li className="nav-item ">
                        <Link to={"/admin"} className="nav-link">AddShoes</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={"/addclothes"} className="nav-link">addClothes</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={"/addaccessories"} className="nav-link">addAccessories</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={"/stats"} className="nav-link">Statistics</Link>
                    </li>
                    
                </ul>
                <form className="form-inline mt-2 mt-md-0 ml-3">
                    <Link to={"/signupAdmin"} className="btn btn-outline-info my-2 my-sm-0" >Sign Up Admin</Link>
                </form>
               {flag}
               
                
            </div>
        </nav>
    
)
}
}
export default AdminHeader;