import React from 'react';
import Checkout from '../checkout/Checkout'
const cartDesign = (props) =>
{
    return(
      
<div className="card " style={{width: '18rem ',display:'inline-block'}}>
  <img className="card-img-top" src={props.slika} style={{width:280,height:300}} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{props.model}</h5>
    
    <p className="card-text">brend: {props.brend}</p>
    <p className="card-text">cena: {props.cena} MKD</p>
    <p className="card-text">magacin: {props.magacin}</p>
    <p className="card-text">kolicina: {props.kolicina}</p>
    <a href="#" idm={props.idm} idp={props.idp} idk={props.idk} kol={props.kolicina}  onClick={props.clicked} className="btn btn-primary">Delete from Cart</a>
  </div>
</div>
 
    )

}
export default cartDesign;