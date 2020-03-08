import React from 'react';
const PotrosPoMesec = (props) =>
{
    
    
    return(
      
        <div className="card " style={{width: '18rem ',display:'inline-block'}}>
  <div className="card-body">
  
  
    <p className="card-text">Potrosuvacka po mesec </p> 
    <p className="card-text">mesec: {props.mesec}</p>
    <p className="card-text">suma: {props.suma}</p>
    
    {/* <p className="card-text">korisnik_id: {props.patiki}</p>
    
     */}
     </div>
</div>
 
    )

}
export default PotrosPoMesec;