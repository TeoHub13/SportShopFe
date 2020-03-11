import React, { Component } from "react";
import WishlistDesign from './WishlistDesign'
import axios from 'axios';
class Wishlist extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
          products: [], 
        }
    }
    componentDidMount() {
        // axios.get("http://localhost:8080/products/users/wishlist")
        //   .then(response => {
        //     this.setState({products:response.data});
        //     console.log(response);
        //   })

          axios({
            method: "get",
            url: "http://localhost:8080/products/users/wishlist",
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
        deleteProductFromWishHandler = (e) =>
        {
          
             e.preventDefault();
            console.log(e.target);
            console.log("zdr");
            const body=
            {
                korisnik:localStorage.getItem("id"),

                produkt:parseInt(e.target.attributes.getNamedItem("idp").value)
              

              }
              let arr=this.state.products.filter(prod =>{
                return prod.produktId !== body.produkt
              })
              this.setState({
                products:arr
              })
            //   console.log(body);
            //   var arr=[... this.state.products];
            // var index=arr.indexOf(body.produkt);
            // if(index !== -1)
            // {
            //   arr.splice(index,1);
            //   this.setState({products:arr});
            //   console.log("asdsadsadsad asdasd")
            //   console.log(arr)
            // }
 
            axios.delete("http://localhost:8080/wishlist/"+localStorage.getItem("id"),{data:body},{headers:{
              'Content-Type': 'application/json'
          }}
          ).then( response  => {
              console.log(response);
                     }
           )
          .catch(error=>console.log(error));        
            }
        
        render(){
            // let total=0;
            // console.log("zdravo")
            // console.log(this.state.products);
              const products=this.state.products.map(product => {
                 // console.log(product);a
              //    total+=product.kolicina*product.produkt.cena;
                  return <WishlistDesign  obj={product} clicked={this.deleteProductFromWishHandler} idp={product.produktId} slika={product.slika} key={product.produktId} model={product.model}  cena={product.cena} brend={product.brend}/>
                 }
              );
            return (
                  <div>
                  {products}
                  </div>
            )
      };

}
export default Wishlist;