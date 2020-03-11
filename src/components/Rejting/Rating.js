import React, { Component } from 'react';
import RatingDesign from './RatingDesign'
// import BeautyStars from 'beauty-stars';

// export default class Rating extends Component {
//     state = { value: 0 };
//     render() {
//       return (
//         <BeautyStars
//           value={this.state.value}
//           onChange={value => this.setState({ value })}
         
//         />
        
//       );
//     }
//   }



import axios from 'axios';
class Rating extends Component
{
    constructor(props)  
    {
        super(props);
        this.state={
          products: [],   
          
        }
    }
    componentDidMount() {
        // axios.get("http://localhost:8080/users/pregled")
        //   .then(response => {
        //     this.setState({products:response.data});
        //     console.log(response);
        //   })
        
          axios({
            method: "get",
            url: "http://localhost:8080/users/pregled",
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
       
        
        deleteRatingHandler = (e) =>
        {
          console.log(e.target)
          let arr=this.state.products.filter(prod =>{
            return prod.pregled.produkt.produktId !== parseInt(e.target.attributes.getNamedItem("pid").value)
          })
          this.setState({
            products:arr
          })
          axios.delete("http://localhost:8080/users/"+localStorage.getItem("id")+"/"+e.target.attributes.getNamedItem("pid").value,{headers:{
            'Content-Type': 'application/json'
        }}
        ).then( () => {
                   }
         )
        .catch(error=>console.log(error));        
          }
        render(){
          console.log("zdravo")
          console.log(this.state.products);
            const products=this.state.products.map(product => {
                return <RatingDesign kid={product.pregled.korisnik.korisnikId} key={product.pregled.produkt.produktId} pid={product.pregled.produkt.produktId}  clicked={this.deleteRatingHandler} slika={product.pregled.produkt.slika} avg={product.averageRating} model={product.pregled.produkt.model} brend={product.pregled.produkt.brend} rate={product.pregled.rejting}  />
              }
            );
          return (
                <div>
                {products}
                </div>
          )
    };
}
export default Rating 