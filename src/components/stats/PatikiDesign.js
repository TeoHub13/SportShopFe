import React from 'react';
const PatikiDesign = (props) =>
{
    
    
    return(
      
        <div className="card " style={{width: '18rem ',display:'inline-block'}}>
  <div className="card-body">
  
  
    <p className="card-text">Prosek na prodavani patiki po mesec </p> 
    <p className="card-text">id: {props.id}</p>
    <p className="card-text">mesec: {props.mesec}</p>
    <p className="card-text">potrosuvacka: {props.potrosuvacka}</p>
    
    {/* <p className="card-text">korisnik_id: {props.patiki}</p>
    
     */}
     </div>
</div>
 
    )

}
export default PatikiDesign;