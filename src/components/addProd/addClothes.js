import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
export default class addClothes extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          brend:'',
          pol:'',
          model:'',
          cena:'',
          proizvoditelId:'',
            popust:0,
          slika:'',
          velicina:'',
          materijal:''
        }
    }
    onSubmitHandler = (e) =>
    {
        e.preventDefault();
        const body ={
            brend:this.state.brend,
            pol:this.state.pol,
            model:this.state.model,
            cena:this.state.cena,
            proizvoditelId:this.state.proizvoditelId,
            popust:this.state.popust,
            slika:this.state.slika,
            velicina:this.state.velicina,
            materijal:this.state.materijal
            //kolicina:30
    
        }
        console.log(body);
        axios.post("http://localhost:8080/addclothes",body,{headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":"true",
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(response => {
          console.log(response);
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmitHandler} brend={this.state.brend} pol={this.state.pol} model={this.state.model} cena={this.state.cena} proizvoditel={this.state.proizvoditel} popust={this.state.popust} slika={this.state.slika}>
                <h3>Add Product</h3>

                <div className="form-group">
                    <label>Brend</label>
                    <input type="text" value={this.state.brend} onChange={(event) => this.setState({brend: event.target.value})} className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Pol</label>
                    <input type="text" value={this.state.pol} onChange={(event) => this.setState({pol: event.target.value})} className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Model</label>
                    <input type="text" value={this.state.model} onChange={(event) => this.setState({model: event.target.value})} className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Cena</label>
                    <input type="text" value={this.state.cena} onChange={(event) => this.setState({cena: event.target.value})} className="form-control"  />
                </div>
                <div className="form-group">
                    <label>Proizvoditel</label>
                    <input type="number" value={this.state.proizvoditelId} onChange={(event) => this.setState({proizvoditelId: event.target.value})} className="form-control"  />
                </div>
                
                <div className="form-group">
                    <label>Slika</label>
                    <input type="text" value={this.state.slika} onChange={(event) => this.setState({slika: event.target.value})} className="form-control"  />
                </div>
                <div className="form-group">
                    <label>Velicina</label>
                    <input type="text" value={this.state.velicina} onChange={(event) => this.setState({velicina: event.target.value})} className="form-control"  />
                </div>
                <div className="form-group">
                    <label>Materijal</label>
                    <input type="text" value={this.state.materijal} onChange={(event) => this.setState({materijal: event.target.value})} className="form-control"  />
                </div>
                
                {/* <div className="form-group">
                    <label>Role</label>
                    <hr/>
                    <span>Korisnik</span><input type="radio" className="klasa" name="role"  value="user" placeholder="Enter role" />
                    <hr/>
                    <span>Admin</span><input type="radio" className="klasa" name="role" value="admin" placeholder="Enter role" />
               
                </div> */}
                <button type="submit"  onSubmit={this.onSubmitHandler} className="btn btn-primary btn-block">Add</button>
            </form>
        );
    }
}