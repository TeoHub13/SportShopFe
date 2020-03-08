import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Home from './components/Home';
import ProductService from './repository/axiosProductRepository/axiosProductRepository';
import axios from 'axios';
import Products from './components/products/Products'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import Wishlist from './components/Wishlist/Wishlist'
import Button from './components/button/Button';
import Checkout from './components/checkout/Checkout'
import SignUp from './components/signUp/SignUp'
import Rating from './components/Rejting/Rating'
import AddProduct from './components/addProd/AddProduct'
import Admin from './components/admin/Admin'
import Stats from './components/stats/Stats'
class  App extends Component {
  constructor(props)
{
    super(props);
    this.state={
      products: [],
      kolicina: null
    }
}

componentDidMount() {
  axios.get("http://localhost:8080/products")
    .then(response => {
      this.setState({products:response.data});
      console.log(response);
    })
  //this.loadListOfProducts();
}
// componentDidMount() {
//   axios.get("http://localhost:8080/cart")
//     .then(response => {
//       this.setState({cart:response.data});
//       console.log(response);
//     })
  //this.loadListOfProducts();

// loadListOfProducts = () => {
//   ProductService.loadProducts.then(response => {
//       this.setState((prevState) => {
//           return {
//               products: response.data.content
//           }
//       })
//   })
// };
  onStarEventHandler = (e) =>
  {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
   // console.log(e.target.value);
    const rejting={
      rejting:e.target.value
    }
    console.log(rejting);
    axios.post("http://localhost:8080/users/"+localStorage.getItem("id")+"/"+e.target.id,rejting,{headers:{
      'Content-Type': 'application/json'
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
    if(localStorage.getItem("id")==null)
    {
      alert("najavi se!!");
    }
    console.log(e.target)
    console.log(e.target.id)
    const kolicina=
    {
      kolicina:e.target.attributes.getNamedItem("kol").value
  };
    console.log(kolicina)
      axios.post("http://localhost:8080/users/"+localStorage.getItem("id")+"/kosnica/product/"+e.target.id,kolicina
//       {  headers:{
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Accept': 'application/json'}
// })
      )
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
      axios.post("http://localhost:8080/users/"+localStorage.getItem("id")+"/wishlist/product/"+e.target.id,popust)
      .then(response=>{
        console.log(response);
      }).catch(error=>console.log(error));

  }
  render(){
    //let brojac = 1;
    const products=this.state.products.map(product => {
      //console.log(product.slika)
      return <Products  ime="Add to Cart"  star={this.onStarEventHandler} slika={product.slika} kol={this.state.kolicina} wish={this.WishlistEventHandler} click={this.onClickEventHandler} id={product.produktId} key={product.produktId} model={product.model}  cena={product.cena} brend={product.brend}/>
      //brojac++;
    }

    );
  return (
    <Router>
    <Header/>
    <Route path={"/"} exact><Home/></Route>
    <Route path={"/products"} >
      <div className="container">
      <div className='d-flex justify-content row   '  style={{display:'inline-block'}}>
        {products}
      </div>
      </div>
    </Route>
    <Route path={"/kosnica"} exact render={() => <Cart />}>
    </Route>
    <Route path={"/wishlist"} exact render={() => <Wishlist />} ></Route>
    <Route path={"/naracka"} exact render={() => <Checkout />} ></Route>    
    <Route path={"/signup"} exact render={() => <SignUp />} ></Route>   
    <Route path={"/login"} exact render={()=>
    <Login />  
      } ></Route>
    <Route path={"/rating"} exact render={()=> <Rating />}></Route>
    <Route path={"/admin"} exact render={()=>
        localStorage.getItem("uloga") === 'administrator'
    ?   <AddProduct />
    :   
    alert("you are not authorized to access this page")
        
    }>
    
    </Route>
    <Route path={"/stats"} exact render={()=>
        localStorage.getItem("uloga") === 'administrator'
    ?   <Stats/>
    :   
    alert("you are not authorized to access this page")
        
    }>
    
    </Route>
    </Router>
  );
  }
}


export default App;
