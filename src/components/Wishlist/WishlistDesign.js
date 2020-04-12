import React from 'react';
const WishlistDesign = (props) =>
{
  console.log(props.products)
  const Wishlist=props.products.map(product=>{
    const pop=product.cena* (product.popust / 100)
    var newCena=product.cena-pop;
    if(product.popust===0)
    {
    return(
      
<div className="card " style={{width:'18rem',height:'100%',padding: '0px',marginLeft:'1rem',display:'inline-block'}} key={product.produktId}>
  <img className="card-img-top" src={product.slika} style={{width:280,height:300}} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{product.model}</h5>
    
    <p className="card-text">brend: {product.brend}</p>
    <p className="card-text">cena: {product.cena} MKD</p>
    <a href="#"   idp={product.produktId}  onClick={props.clicked} className="btn btn-primary">Delete from Wishlist</a>
  </div>
</div>
 
    )}
    else{
        return(
<div className="card " style={{width:'18rem',height:'100%',padding: '0px',marginLeft:'1rem',display:'inline-block'}} key={product.produktId}>
  <img className="card-img-top" src={product.slika} style={{width:280,height:300}} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{product.model}</h5>
    
    <p className="card-text">brend: {product.brend}</p>
    <p className="card-text"><strike>cena: {product.cena} MKD</strike></p>
    
    <p className="card-text">Popust cena: {newCena} MKD</p>
    <a href="#"   idp={product.produktId}  onClick={props.clicked} className="btn btn-primary">Delete from Wishlist</a>
  </div>
</div>
        )
    }


})
return(
  <div>
    {Wishlist}
  </div>
)
}
export default WishlistDesign;