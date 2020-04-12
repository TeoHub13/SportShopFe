import React from 'react';
import Checkout from '../checkout/Checkout'
const cartDesign = (props) =>
{

  const ProdList=props.products.map(product=>{
    const pop=product.produkt.cena* (product.produkt.popust / 100)
    var newCena=product.produkt.cena-pop;
    if(product.produkt.popust===0)
    {
      return(
   
        <div className="card " style={{width: '18rem ' ,height:'100%',padding:'0px',marginLeft:'1rem',display:'inline-block'}} key={ product.produkt.produktId}>
        
          <img className="card-img-top" src={product.produkt.slika} style={{width:280,height:300}} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">{product.produkt.model}</h5>         
            <p className="card-text">brend: {product.produkt.brend}</p>
            <p className="card-text">cena: {product.produkt.cena} MKD</p>
            <p className="card-text">magacin: {product.magacin.imeMagacin}</p>
            <p className="card-text">kolicina: {product.kolicina}</p>
            <a href="#" idm={product.magacin.magacinId} idp={product.produkt.produktId} idk={product.kosnica.kosnicaId} kol={product.kolicina}  onClick={props.clicked} className="btn btn-primary">Delete from Cart</a>
          </div>
          </div>
        
        
            )
    }
    else
    {
      return(
      
        <div className="card " style={{width: '18rem ',padding: '0px',marginLeft:'1rem',display:'inline-block'}} key={ product.produkt.produktId}>
         <img className="card-img-top" src={product.produkt.slika} style={{width:280,height:300}} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">{product.produkt.model}</h5> 
            <p className="card-text">brend: {product.produkt.brend}</p>
            <p className="card-text"><strike>cena: {product.produkt.cena} MKD</strike></p>  
            <p className="card-text">Popust cena: {newCena} MKD</p>
            <p className="card-text">magacin: {product.magacin.imeMagacin}</p>
            <p className="card-text">kolicina: {product.kolicina}</p>
            <a href="#" idm={product.magacin.magacinId} idp={product.produkt.produktId} idk={product.kosnica.kosnicaId} kol={product.kolicina}  onClick={props.clicked} className="btn btn-primary">Delete from Cart</a>
             </div>
          </div>
        
         
            )
    }
  })
  return(
      <div>{ProdList}</div>
  )
   

}
export default cartDesign;