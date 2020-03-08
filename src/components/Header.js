import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class header extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <Link to={"/"}   className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/products"} className="nav-link">Products</Link>
                        </li>
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
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        <Link to={"/login"} className="btn btn-outline-info my-2 my-sm-0" >Login</Link>
                    </form>
                </div>
            </nav>
        )
    }
}

export default header;