import React, { Component } from "react";
import axios from 'axios';
import {Link, Route, Redirect, BrowserRouter as Router, Switch} from 'react-router-dom';
import Wishlist from "../Wishlist/Wishlist";
 class Login extends Component {
   constructor(props)
   {
       super(props);
   
       this.state={
        kname:'',
        pass:'',
        bool:false
    }
   }
   
    
   LoginEventHandler = (e) =>
    {
        e.preventDefault();
        console.log("zdr")
        const najava={
            kname:this.state.kname,
            pass:this.state.pass
        };
        console.log(najava);
        axios.post("http://localhost:8080/user",najava,{headers:{
            'Content-Type': 'application/json'
        }})
        .then(response => {
            console.log(response);
            localStorage.setItem("kname",response.data.username),
            localStorage.setItem("id",response.data.id),
            localStorage.setItem("uloga",response.data.uloga),
            
            console.log(response.data.uloga)
            if(response.data.uloga === 'administrator')
            {
                console.log(this.props)
            }      
        });
    }
    render() {  
        return (
            <form onSubmit={this.LoginEventHandler}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" value={this.state.kname} onChange={(event) => this.setState({kname: event.target.value})} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.pass} onChange={(event) => this.setState({pass: event.target.value})} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button  type="submit" id="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Want to <Link to={"/signup"} href="#">register first?</Link>
                </p>
            </form>
        );
    }
}
export default Login;