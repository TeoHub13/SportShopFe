import React, {Component} from 'react';
import Logo from '../assets/sportSlika.PNG'
import Adidas from '../assets/adidas.jpg'
import Nike from '../assets/nike.jpg'
import Puma from '../assets/puma.jpg'
import {Link, Route,withRouter, Redirect, BrowserRouter as Router, Switch} from 'react-router-dom';


class Home extends Component {

    handleClick = (e) =>
    {
        this.props.history.push("/products")
    }
    render(){
        return(
 <div>
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0"  className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img className="d-block w-100" src={Nike} onClick={this.handleClick}  alt="First slide " height="900" width="100" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Adidas} onClick={this.handleClick}  alt="Second slide" height="900" width="100"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Puma} onClick={this.handleClick} alt="Third slide" height="900" width="100" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
 </div>
        )
    }
}

export default withRouter(Home);