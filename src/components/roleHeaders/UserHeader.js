
import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {NavBar, Nav,NavDropdown, NavItem} from 'react';
import AuthService from '../auth/AuthService';
class  UserHeader extends Component
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
            this.state.smena=false
        }
        flag=<form className="form-inline mt-2 mt-md-0 ml-3">
        <Link to={"/login"} className="btn btn-outline-info my-2 my-sm-0" >Login</Link>
    
    </form>    
}
    else
    {
        this.setState
        {
            this.state.smena=true
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
                <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Products
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <Link to={"/products"} className="dropdown-item">All products</Link>
      <Link to={"/patiki"} className="dropdown-item" >Shoes</Link>
      <Link to={"/obleka"} className="dropdown-item" >Clothes</Link>
      <Link to={"/accessories"} className="dropdown-item" >Accessories</Link>
      
    </div>
  </li>
                    {/* <li className="nav-item">
                        <Link to={"/products"} className="nav-link">Products</Link>
                    </li>  */}

                    <li className="nav-item ">
                        <Link to={"/kosnica"} className="nav-link">Cart</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={"/wishlist"} className="nav-link">Wishlist</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={"/naracka"} className="nav-link">Checkouts</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={"/rating"} className="nav-link">Ratings</Link>
                    </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0 ml-3">
                    <Link to={"/signup"} className="btn btn-outline-info my-2 my-sm-0" >Sign Up</Link>
                </form>
               {flag}
               
                
            </div>
        </nav>
    
)
}
}
export default UserHeader;