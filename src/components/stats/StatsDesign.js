import React from 'react';
const StatsDesign = (props) =>
{
    
    
    return(
      
        <div className="card " style={{width:'18rem',height:'100%',padding: '0px',marginLeft:'1rem',display:'inline-block'}}>
  <div className="card-body">
  
  
    <p className="card-text">Najprodavan Produkt</p> 
    <p className="card-text">brend: {props.brend}</p>
    <p className="card-text">model: {props.model}</p>
    <p className="card-text">cena: {props.cena}</p>
    <p></p>
    <p></p>
    
    {/* <p className="card-text">korisnik_id: {props.patiki}</p>
    
     */}
     </div>
</div>
 
    )

}
export default StatsDesign;