import React, { Component } from "react";
import axios from 'axios';
import CheckoutDesign from './CheckoutDesign';
class Checkout extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
          naracka: []          
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/naracki/"+localStorage.getItem("id"))
          .then(response => {
            this.setState({naracka:response.data});
            console.log(response);
          })
      
        }

        render(){
               const naracka=this.state.naracka.map(naracka => {
            //      // console.log(product);a
            //      // total+=product.kolicina*product.produkt.cena;
                 
                 return <CheckoutDesign suma={naracka.suma} kosnica={naracka.kosnica.kosnicaId} key={naracka.narackaId} ime={naracka.korisnik.ime} prezime={naracka.korisnik.prezime} korId={naracka.korisnik.korisnikId} datum={naracka.datum} />
  
                 }
               );
            return (
                  <div>
                  {naracka}
                  </div>
            )
      };
    
}

export default Checkout;