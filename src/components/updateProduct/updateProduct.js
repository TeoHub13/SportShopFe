import React, { Component } from "react";
import axios from 'axios';
import UpdateDesign from './updateDesign'
import Products from '../products/Products';
import Button from '../button/Button'

import {Link,withRouter, Redirect, BrowserRouter as Router, Switch} from 'react-router-dom';

import { Route } from "react-router";
class UpdateProduct extends Component
{
    constructor(props)
    {
        super(props);
        // var today = new Date(),
        //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state={
          products: [],
          showComponent: false,
        //   date:date
        }
        //this.onClickEventHandler=this.onClickEventHandler.bind(this);
    }

    onClickEventHandler = (e) =>
    {
        const body ={
        
             brend:e.target.attributes.getNamedItem("brend").value,
            
             popust:e.target.attributes.getNamedItem("popust").value,

             slika:e.target.attributes.getNamedItem("src").value,
            
            model:e.target.attributes.getNamedItem("model").value,
            
            prId:e.target.attributes.getNamedItem("prid").value,

            pol:e.target.attributes.getNamedItem("pol").value,
            
           cena:e.target.attributes.getNamedItem("cena").value,
            
            proiz:e.target.attributes.getNamedItem("proiz").value
        }
        
        console.log(body);



        this.props.history.push({
            pathname: '/updateForm',
            search: '?query=abc',
            state: { detail:body }
          })
       // const body={
        //     proba:e.target.attributes.getNamedItem("proba").value
        // }
        // this.props.history.push({
        //     pathname: '/updateForm',
        //     search: '?query=abc',
        //     state: { detail: body  }
        //   })
        
    //   console.log("zdr");
    //     this.setState({
    //         showComponent: true,
    //     })
    }

    componentDidMount() {
          axios({
            method: "get",
            url: "http://localhost:8080/products",
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
        // checkOutHandler= (e) =>
        // {
        //     const body={
        //     datum:Date.parse(e.target.attributes.getNamedItem("date").value),
        //     suma:e.target.attributes.getNamedItem("vkupno").value
        //     }
        //     axios.post("http://localhost:8080/naracki/"+e.target.attributes.getNamedItem("kosnica").value,body,{headers: {
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Credentials":"true",
        //       'Content-Type': 'application/json',
        //       'Authorization' : 'Bearer ' + localStorage.getItem("token")
        //     }}
        //   ).then( () => {
        //     alert("uspesno kupena kosncica");
        //     window.location.reload();
        //              }
        //    )
        //   .catch(error=>console.log(error));        
        //   }
        
    //     deleteProductFromCartHandler = (e) =>
    //     {
          
    // e.preventDefault();
    //          console.log(e.target);
    //         // console.log("zdr");
    //         const body=
    //         {
              
    //             kosnica:e.target.attributes.getNamedItem("idk").value,
            
    //             produkt:parseInt(e.target.attributes.getNamedItem("idp").value),
              
    //             magacin:e.target.attributes.getNamedItem("idm").value,

    //             kolicina:parseInt(e.target.attributes.getNamedItem("kol").value)
            
    //           }
    //         console.log(body)
    //           let arr=this.state.products.filter(prod => {
    //             console.log(prod.produkt.produktId)
    //             console.log(body.produkt);
    //      //       console.log("ha ha ha check out the bizzare")
    //             return prod.produkt.produktId !== body.produkt
              
    //           })
    //           this.setState({
    //             products:arr
    //           })
    //           console.log(this.state);
    //           console.log("heyo")
    //         // axios.delete("http://localhost:8080/kosnica",{data:body},{headers: {
    //         //   "Access-Control-Allow-Origin": "*",
    //         //   "Access-Control-Allow-Credentials":"true",
    //         //   'Content-Type': 'application/json',
    //         //   'Authorization' : 'Bearer ' + localStorage.getItem("token")
    //         // }}

    //         axios.delete("http://localhost:8080/kosnica", {
    //           headers: {
    //             "Access-Control-Allow-Origin": "*",
    //           "Access-Control-Allow-Credentials":"true",
    //           'Content-Type': 'application/json',
    //           'Authorization' : 'Bearer ' + localStorage.getItem("token")
    //           },
    //           data: {
    //             kosnica:e.target.attributes.getNamedItem("idk").value,
            
    //             produkt:parseInt(e.target.attributes.getNamedItem("idp").value),
              
    //             magacin:e.target.attributes.getNamedItem("idm").value,

    //             kolicina:parseInt(e.target.attributes.getNamedItem("kol").value)
    //           }
    //         }




    //       ).then( () => {
    //                  }
    //        )
    //       .catch(error=>console.log(error));        
    //         }
            
        
          
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
                //total+=product.kolicina*product.produkt.cena;
                //kosnica=product.kosnica.kosnicaId;
                //ime=product.kosnica.korisnik.ime;
               // prezime=product.kosnica.korisnik.prezime;
                //korId=product.kosnica.korisnik.korisnikId;
                return <UpdateDesign click={this.onClickEventHandler} key={product.produktId} pol={product.pol} cena={product.cena} proiz={product.proizvoditel.proizvoditelId} prid={product.produktId}  brend={product.brend} model={product.model} slika={product.slika} popust={product.popust}/>

              }
            );
          return (
                <div>
                {products}
                {/* <h3>Za naplata:{total} MKD</h3>
                <button type="button" date={this.state.date} onClick={this.checkOutHandler}  vkupno={total} kosnica={kosnica}   className="btn btn-outline-warning">Checkout</button> */}
                </div>
          )
    };
}
export default withRouter(UpdateProduct)