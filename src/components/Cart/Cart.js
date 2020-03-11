import React, { Component } from "react";
import axios from 'axios';
import Products from '../products/Products';
import CartDesign from './CartDesign.js'
import Button from '../button/Button'
import { Route } from "react-router";
import { Link } from "react-router-dom";
class Cart extends Component
{
    constructor(props)
    {
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state={
          products: [],
          date:date
          
        }
    }
    componentDidMount() {
      // const data={
      //   token:localStorage.getItem("token")
      //     }
        // axios.get("http://localhost:8080/kosnica",{data},{headers:{ 
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Credentials":"true",
        //   'Content-Type': 'application/json',
        //   'Authorization' : 'Bearer ' + localStorage.getItem("token")
        //   }})
        //   .then(response => {
        //     this.setState({products:response.data});
        //     console.log(response);
        //   })

          axios({
            method: "get",
            url: "http://localhost:8080/kosnica",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials":"true",
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + localStorage.getItem("token")
            },
          }).then(response => {
            this.setState({products:response.data});
            console.log(response);
          });
      

      
        }
        checkOutHandler= (e) =>
        {
            const body={
            datum:Date.parse(e.target.attributes.getNamedItem("date").value),
            suma:e.target.attributes.getNamedItem("vkupno").value
            }
            axios.post("http://localhost:8080/naracki/"+localStorage.getItem("id")+"/"+e.target.attributes.getNamedItem("kosnica").value,body,{headers:{
              'Content-Type': 'application/json'
          }}
          ).then( () => {
            alert("uspesno kupena kosncica");
            window.location.reload();
                     }
           )
          .catch(error=>console.log(error));        
          }
        
        deleteProductFromCartHandler = (e) =>
        {
          
    e.preventDefault();
             console.log(e.target);
            // console.log("zdr");
            const body=
            {
              
                kosnica:e.target.attributes.getNamedItem("idk").value,
            
                produkt:parseInt(e.target.attributes.getNamedItem("idp").value),
              
                magacin:e.target.attributes.getNamedItem("idm").value,

                kolicina:parseInt(e.target.attributes.getNamedItem("kol").value)
            
              }
            console.log(body)
              let arr=this.state.products.filter(prod => {
                console.log(prod.produkt.produktId)
                console.log(body.produkt);
         //       console.log("ha ha ha check out the bizzare")
                return prod.produkt.produktId !== body.produkt
              
              })
              this.setState({
                products:arr
              })
              console.log(this.state);
              console.log("heyo")
            axios.delete("http://localhost:8080/kosnica/"+localStorage.getItem("id"),{data:body},{headers:{
              'Content-Type': 'application/json'
          }}
          ).then( () => {
                     }
           )
          .catch(error=>console.log(error));        
            }
            
        
          
        render(){
          let total=0;
          let kosnica='';
          let ime='';
          let prezime='';
          let korId='';
          console.log("zdravo")
          console.log(this.state.products);
            const products=this.state.products.map(product => {
               // console.log(product);a
                total+=product.kolicina*product.produkt.cena;
                kosnica=product.kosnica.kosnicaId;
                ime=product.kosnica.korisnik.ime;
                prezime=product.kosnica.korisnik.prezime;
                korId=product.kosnica.korisnik.korisnikId;
                return <CartDesign total={total}  obj={product} clicked={this.deleteProductFromCartHandler} kolicina={product.kolicina}  idk={product.kosnica.kosnicaId} idm={product.magacin.magacinId}  idp={product.produkt.produktId} slika={product.produkt.slika} key={product.produkt.produktId} model={product.produkt.model}  cena={product.produkt.cena} brend={product.produkt.brend} magacin={product.magacin.imeMagacin}/>

              }
            );
          return (
                <div>
                {products}
                <h3>Za naplata:{total}ден</h3>
                <button type="button" date={this.state.date} onClick={this.checkOutHandler}  vkupno={total} kosnica={kosnica}   className="btn btn-outline-warning">Checkout</button>
                </div>
          )
    };
}
export default Cart