import React from 'react';
const WishlistDesign = (props) =>
{
    return(
      
<div className="card " style={{width: '18rem ',display:'inline-block'}}>
  <img className="card-img-top" src={props.slika} style={{width:280,height:300}} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{props.model}</h5>
    
    <p className="card-text">brend: {props.brend}</p>
    <p className="card-text">cena: {props.cena} MKD</p>
    <a href="#"   idp={props.idp}  onClick={props.clicked} className="btn btn-primary">Delete from Wishlist</a>
  </div>
</div>
 
    )

}
export default WishlistDesign;