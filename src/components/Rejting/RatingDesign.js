import React from 'react';
const RatingDesign = (props) =>
{
    return(
      
<div className="card " style={{width: '18rem ',display:'inline-block'}}>
  <img className="card-img-top" src={props.slika} style={{width:280,height:300}} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{props.model}</h5>
    
    <p className="card-text">brend: {props.brend}</p>
    <p className="card-text">My Rating: {props.rate}</p>
    
    <p className="card-text">Avg Rating Users: {parseFloat(props.avg).toFixed(2)}</p>
    {/* <p className="card-text">magacin: {props.magacin}</p>
    <p className="card-text">kolicina: {props.kolicina}</p> */}
    <a href="#" kid={props.kid} pid={props.pid}  onClick={props.clicked} className="btn btn-primary">Delete my rating</a>
  </div>
</div>
 
    )

}
export default RatingDesign;