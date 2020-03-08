import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

class  Admin extends Component {
    render()
    {       
            return(

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/products"} className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={"/kosnica"} className="nav-link">Cart</Link>
                        </li>
                        </ul>
                </div>                

            );
    }
}


export default Admin;