import React, { Component } from "react";
import axios from 'axios';
import Products from './products/Products';
class Obleka extends Component {
    constructor(props)
  {
      super(props);
      this.state={
        products: [],
        kolicina: null
      }
  }
  componentDidMount() {
  

  
      axios({
        method: "get",
        url: "http://localhost:8080/obleka",
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
  onStarEventHandler = (e) =>
  {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.attributes.getNamedItem("value").value)
   // console.log(e.target.value);
    const rejting={
      rejting:e.target.attributes.getNamedItem("value").value
    }
    console.log(rejting);
    axios.post("http://localhost:8080/users/"+e.target.id,rejting,{headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials":"true",
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem("token")
    }}
  ).then(response => {
            console.log(response.data);
            alert("uspesno rejtuvanje");

        }).catch(error =>
          console.log(error));
  }
  onClickEventHandler = (e) =>
  { 
    e.preventDefault();
    // if(localStorage.getItem("id")==null)
    // {
    //   alert("najavi se!!");
    // }
    console.log(e.target)
    console.log(e.target.id)
    const kolicina=
    {
      kolicina:e.target.attributes.getNamedItem("kol").value
  };
    console.log(kolicina)
      axios.post("http://localhost:8080/users/kosnica/product/"+e.target.id,kolicina
      ,{headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials":"true",
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("token")
      }})
    .then(response => {
        console.log(response);   
    }).catch(error =>
      alert("nema tolkava kolicina na zaliha"))
    
     // console.log(error));
// const data={
//   kolicina:null
// }
// console.log("zdravo")

// axios.post("localhost:8080/cors")
// .then(response=>console.log(response))
// .catch(error=>console.log(error))
  }

  WishlistEventHandler=(e) =>
  {
      e.preventDefault();
      const popust=
      {
        popust: false
      }
      axios.post("http://localhost:8080/users/wishlist/product/"+e.target.id,popust,{headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials":"true",
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("token")
      }})
      .then(response=>{
        console.log(response);
      }).catch(error=>console.log(error));

  }
  render(){
    //let brojac = 1;
    const products=this.state.products.map(product => {
      //console.log(product.slika)
      return <Products  ime="Add to Cart" star={this.onStarEventHandler} wish={this.WishlistEventHandler} click={this.onClickEventHandler}    slika={product.slika} kol={this.state.kolicina}  id={product.produktId} key={product.produktId} model={product.model}  cena={product.cena} brend={product.brend}/>
      //brojac++;
    }

    );
  return (
   <div>
       {products}
   </div>
  );
  }
}


export default Obleka;