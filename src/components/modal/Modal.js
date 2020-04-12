import React, { Component } from "react";
import axios from "axios";   
import {Link,withRouter, Redirect, BrowserRouter as Router, Switch} from 'react-router-dom';
 class updateProd extends Component {
    constructor(props)
    {
        console.log(props.location.state.detail)
        console.log(props)
        super(props);
        this.state={
          brend:props.location.state.detail.brend,
          pol:props.location.state.detail.pol,
          model:props.location.state.detail.model,
          cena:props.location.state.detail.cena,
          proizvoditelId:props.location.state.detail.proiz,
            popust:props.location.state.detail.popust,
          slika:props.location.state.detail.slika,
          prId:props.location.state.detail.prId
          
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
            prId:this.state.prId
            // velicina:this.state.velicina,
            // materijal:this.state.materijal
            //kolicina:30
    
        }
        console.log(body);
        axios.patch("http://localhost:8080/updateProduct",body,{headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":"true",
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(response => {
          console.log(response);
          this.props.history.push("/products")
          location.reload();
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmitHandler} brend={this.state.brend} pol={this.state.pol} model={this.state.model} cena={this.state.cena} proizvoditel={this.state.proizvoditel} popust={this.state.popust} slika={this.state.slika}>
                <h3>Update Product</h3>

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
                { <div className="form-group">
                    <label>Popust</label>
                    <input type="text" value={this.state.popust} onChange={(event) => this.setState({popust: event.target.value})} className="form-control"  />
                </div>
                 }
                
                
                <button type="submit"  onSubmit={this.onSubmitHandler} className="btn btn-primary btn-block">Update</button>
            </form>
        );
    }
}
export default withRouter(updateProd)