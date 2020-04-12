import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
import axios from "axios";
 class SignUp extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          ime:'',
          prezime:'',
          mail:'',
          username:'',
          password:'',
          role:'ROLE_USER'
        }
    }
    onSubmitHandler = (e) =>
    {
        e.preventDefault();
        console.log(this.state.ime);
        console.log(this.state.username);
        console.log(this.state.password);
        
        const body ={
            ime:this.state.ime,
            prezime:this.state.prezime,
            mail:this.state.mail,
            korisnickoIme:this.state.username,
            lozinka:this.state.password,
            uloga:this.state.role
    
        }
        console.log(body);
        axios.post("http://localhost:8080/users",body,{headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":"true",
            'Content-Type': 'application/json',
            //'Authorization' : 'Bearer ' + localStorage.getItem("token")
          }})
        .then(response => {
          console.log(response);
          this.props.history.push("/login")
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmitHandler} ime={this.state.ime} prezime={this.state.prezime} mail={this.state.mail} user={this.state.username} pass={this.state.password} role={this.state.role}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" value={this.state.ime} onChange={(event) => this.setState({ime: event.target.value})} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" value={this.state.prezime} onChange={(event) => this.setState({prezime: event.target.value})} className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={this.state.mail} onChange={(event) => this.setState({mail: event.target.value})} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} className="form-control" placeholder="Enter password" />
                </div>
                
                {/* <div className="form-group">
                    <label>Role</label>
                    <hr/>
                    <span>Korisnik</span><input type="radio" className="klasa" name="role"  value="user" placeholder="Enter role" />
                    <hr/>
                    <span>Admin</span><input type="radio" className="klasa" name="role" value="admin" placeholder="Enter role" />
               
                </div> */}
                <button type="submit"  onSubmit={this.onSubmitHandler} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/login"}>login?</Link>
                </p>
            </form>
        );
    }
}
export default withRouter(SignUp);