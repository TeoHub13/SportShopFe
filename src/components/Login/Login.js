import React, { Component } from "react";
import axios from 'axios';
import {Link, Route, Redirect, BrowserRouter as Router, Switch} from 'react-router-dom';
import Wishlist from "../Wishlist/Wishlist";
import AuthService from '../auth/AuthService'
 class Login extends Component {
   constructor(props)
   {
       super(props);
   
       this.state={
        kname:'',
        pass:'',
        bool:false
    }
     //   this.LoginEventHandler = this.LoginEventHandler.bind(this)
       // this.Auth=new AuthService();
   }
   
    
   LoginEventHandler = (e) =>
    {
        e.preventDefault();
        console.log("zdr")
        const najava={
            kname:this.state.kname,
            pass:this.state.pass
        };
        //console.log(najava);
        // Promise.all([
        //      axios.post("http://localhost:8080/user",najava,{headers:{
        //     'Content-Type': 'application/json'

        // }}),
        //     axios.post('http://localhost:8080/authenticate',najava,{headers:{
        //         'Content-Type': 'application/json'
    
        //     }})
        //   ]).then(([prv, vtor]) => {
        //       console.log(prv),
        //       console.log(vtor)
        //     // do something with both responses
        //   });
        axios.post("http://localhost:8080/authenticate",najava,{headers:{
            'Content-Type': 'application/json'

        }})
        .then(response => {
            console.log(response);
            localStorage.setItem("token",response.data.token);
           // localStorage.setItem("kname",response.data.username),
           // localStorage.setItem("id",response.data.id),
           // localStorage.setItem("uloga",response.data.uloga),
            
            // console.log(response.data.uloga)
            // if(response.data.uloga === 'administrator')
            // {
            //     console.log(this.props)
            // }      

        });
        


        // this.Auth.login(this.state.kname,this.state.pass)
        // .then(res =>{
        //    this.props.history.replace('/');
        // })
        // .catch(err =>{
        //     alert(err);
        // })

    }
    // componentWillMount(){
    //     if(this.Auth.loggedIn())
    //         this.props.history.replace('/');
    // }
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